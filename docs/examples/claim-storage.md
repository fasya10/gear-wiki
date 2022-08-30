---
sidebar_label: Claim Storage
---


# Claim Storage

## Introduction

This smart contracts example created by Gear represents a Simple Claim storage.

It is a simple storage operating with Claims. A claim is a basic strucure which states some fact about a subject. A claim can be issued by a subject, or any other issuer on behalf of the subject (e.g. a university might issue the claim that a subject has successfully graduted).
Whenever a claim is issued it MUST be signed by an issuer (or a subject in case he issues it on behalf of himself).

Every other contract user can verify any claim with his public key and a signature or check the claim data using one of the claim set's hash (more detail bellow).

The basic stored value inside the contract is a claim:
```rust
/// Typings for u8 arrays.
pub type PublicKey = [u8; 32];
pub type Signature = [u8; 64];
pub type PieceId = u128;

/// ClaimData represents an internal data stored inside a claim.
#[derive(Decode, Encode, TypeInfo, Debug, Clone, PartialEq)]
pub struct ClaimData {
    /// Set of hashed data (e.g. BTreeSet::from([city], [street])).
    pub hashed_info: BTreeSet<[u8; 32]>,
    /// Date of issuance of this claim.
    pub issuance_date: u128,
    /// Validation status of the claim.
    pub valid: bool,
}

/// Claim is a main object stored inside the identity storage.
/// Consists of the claim data and all the public keys and signatures.
///
/// # Requirements:
/// * all public keys and signatures MUST be non-zero arrays
#[derive(Decode, Encode, TypeInfo, Debug, Clone, PartialEq)]
pub struct Claim {
    /// Issuer's  public key (e.g. who issued the claim). Can be equal to subject keys
    /// if the subject issues any claim about himself.
    pub issuer: PublicKey,
    /// Issuer's signature with the issuer keypair.
    pub issuer_signature: Signature,
    /// Subject's public key.
    pub subject: PublicKey,
    /// Map of verifiers PublicKey -> Signature
    pub verifiers: BTreeMap<PublicKey, Signature>,
    /// Internal data of the claim
    pub data: ClaimData,
}
```
Internally claim contains an issuance date, a validity status and a set of hashed data. The set is used the following way. Say, one wants to store his address: Russia, Moscow, Nikolskaya street, 3, 15. This is okay if the users wants to be able to verify the whole address. But if a user wants to only verify that he lives in Moscow? Should there be another claim created? The answer is no. A user simply breaks his address and hashed every value seprately and than passes it as a set. The check procedure is done against the whole set, so one can now verify he lives in Moscow without disclosing the full address.

### Init Config
To successfully initialize a claim storage contract one should provide an ActorID of and owner, and that's it.

```rust
/// Initializes an identity storage.
///
/// # Requirements:
/// * `owner_id` MUST be non-zero address
///
/// `owner_id` - is the owner of the contract.
#[derive(Decode, Encode, TypeInfo)]
pub struct InitIdentity {
    pub owner_id: ActorId,
}

```

### `Action` Structure
```rust

#[derive(Debug, Decode, Encode, TypeInfo)]
pub enum IdentityAction {
    /// Issues a new claim either by a subject himself
    /// or by an issuer on behalf of the subject
    ///
    /// # Requirements:
    /// * all public keys and signatures MUST be non-zero arrays
    IssueClaim {
        /// Issuer's public key.
        issuer: PublicKey,
        /// Issuer's signature with his keypair.
        issuer_signature: Signature,
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's data.
        data: ClaimData,
    },
    /// Changes a validation status of the claim.
    /// Can only be performed by a subject or an issuer of the claim.
    ///
    /// # Requirements:
    /// * all public keys and signatures MUST be non-zero arrays
    ClaimValidationStatus {
        /// Validator's public key. Can be either a subject's or an issuer's one.
        validator: PublicKey,
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's id.
        piece_id: PieceId,
        /// New status of the claim.
        status: bool,
    },
    /// Verify a specific claim with a public key and a signature.
    /// Can not be performed by an issuer or a subject.
    ///
    /// # Requirements:
    /// * all public keys and signatures MUST be non-zero arrays
    VerifyClaim {
        /// Verifier's public key.
        verifier: PublicKey,
        /// Verifier's signature.
        verifier_signature: Signature,
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's id.
        piece_id: PieceId,
    },
    /// Check the claim with a hash from it's data set.
    ///
    /// # Requirements:
    /// * all public keys and signatures MUST be non-zero arrays
    CheckClaim {
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's id.
        piece_id: PieceId,
        /// Hash to check against.
        hash: [u8; 32],
    },
}
```
As the corresponding event structure:
```rust
#[derive(Debug, Decode, Encode, TypeInfo)]
pub enum IdentityEvent {
    ClaimIssued {
        /// Issuer's public key.
        issuer: PublicKey,
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's id generated automatically.
        piece_id: PieceId,
    },
    ClaimValidationChanged {
        /// Validator's public key.
        validator: PublicKey,
        /// Subjects's public key.
        subject: PublicKey,
        /// Claims' id.
        piece_id: PieceId,
        /// Claim's new validation status.
        status: bool,
    },
    VerifiedClaim {
        /// Verifier's public key.
        verifier: PublicKey,
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's id.
        piece_id: PieceId,
    },
    CheckedClaim {
        /// Subject's public key.
        subject: PublicKey,
        /// Claim's id.
        piece_id: PieceId,
        /// The result of the check (e.g. true is it was found in BTreeSet).
        status: bool,
    },
}
```

### `State` Query & Replies
```rust
#[derive(Debug, Decode, Encode, TypeInfo)]
pub enum IdentityStateQuery {
    /// Get all the claims for a specified public key.
    UserClaims(PublicKey),
    /// Get a specific claim with the provided public key and a claim id.
    Claim(PublicKey, PieceId),
    /// Get all the verifiers' public keys for a corresponding claim.
    Verifiers(PublicKey, PieceId),
    /// Get claim's validation status.
    ValidationStatus(PublicKey, PieceId),
    /// Get claim's issuance date.
    Date(PublicKey, PieceId),
}

#[derive(Debug, Decode, Encode, TypeInfo)]
pub enum IdentityStateReply {
    UserClaims(BTreeMap<PieceId, Claim>),
    Claim(Option<Claim>),
    Verifiers(Vec<PublicKey>),
    ValidationStatus(bool),
    Date(u128),
}
```


### Functions
According the actions/events provided there is a need in 4 functions:
```rust
    /// Creates a new claim.
    ///
    /// # Requirements:
    /// * all the public keys and signatures MUST be non-zero.
    ///
    /// # Arguments:
    /// * `issuer` - the claim issuer's public key.
    /// * `issuer_signature` - the corresponding signature with the `issuer` public key.
    /// * `subject`- the subject's public key.
    /// * `data` - claim's data.
    fn issue_claim(
        &mut self,
        issuer: PublicKey,
        issuer_signature: Signature,
        subject: PublicKey,
        data: ClaimData,
    ) {
        if subject == ZERO_KEY || issuer_signature == ZERO_SIGNATURE || issuer == ZERO_KEY {
            panic!("IDENTITY: Can not use a zero public key");
        }
        self.user_claims.entry(subject).or_default().insert(
            self.piece_counter,
            Claim {
                issuer,
                issuer_signature,
                subject,
                verifiers: BTreeMap::new(),
                data,
            },
        );

        self.piece_counter += 1;
        msg::reply(
            IdentityEvent::ClaimIssued {
                issuer,
                subject,
                piece_id: self.piece_counter - 1,
            },
            0,
        )
        .expect("IDENTITY: Error during replying with IdentityEvent::ClaimIssued");
    }

    /// Changes claim's validation status.
    ///
    /// # Requirements:
    /// * all the public keys and signatures MUST be non-zero.
    ///
    /// # Arguments:
    /// * `validator` - the claim issuer's or subject's public key.
    /// * `subject`- the subject's public key.
    /// * `piece_id` - claim's id.
    /// * `status` - new claim's status.
    fn validation_status(
        &mut self,
        validator: PublicKey,
        subject: PublicKey,
        piece_id: PieceId,
        status: bool,
    ) {
        // TODO!: Unnecessary check
        // TODO!: Check validator (message source)
        if validator == ZERO_KEY || subject == ZERO_KEY {
            panic!("IDENTITY: Can not use a zero public key");
        }
        let data_piece = self
            .user_claims
            .get(&subject)
            .expect("The user has no claims")
            .get(&piece_id)
            .expect("The user has not such claim with the provided piece_id");
        if data_piece.subject != validator && data_piece.issuer != validator {
            panic!("IDENTITY: You can not change this claim");
        }
        self.user_claims
            .entry(subject)
            .or_default()
            .entry(piece_id)
            .and_modify(|claim| claim.data.valid = status);

        msg::reply(
            IdentityEvent::ClaimValidationChanged {
                validator,
                subject,
                piece_id,
                status,
            },
            0,
        )
        .expect("IDENTITY: Error during replying with IdentityEvent::ClaimValidationChanged");
    }

    /// Verifies the claim.
    ///
    /// # Requirements:
    /// * all the public keys and signatures MUST be non-zero.
    /// * `verifier` - MUST differ from the claim's subject or issuer.
    ///
    /// # Arguments:
    /// * `verifier` - the claim verifier's public key.
    /// * `verifier_signature` - the corresponding signature with the `verifier` public key.
    /// * `piece_id` - claim's id.
    /// * `subject` - subject's public key.
    fn verify_claim(
        &mut self,
        verifier: PublicKey,
        verifier_signature: Signature,
        subject: PublicKey,
        piece_id: PieceId,
    ) {
        if verifier == ZERO_KEY || subject == ZERO_KEY || verifier_signature == ZERO_SIGNATURE {
            panic!("IDENTITY: Can not use a zero public key");
        }
        let piece = self
            .user_claims
            .get(&subject)
            .expect("The user has no claims")
            .get(&piece_id)
            .expect("The user has not such claim with the provided piece_id");
        if piece.issuer == verifier || piece.subject == verifier {
            panic!("IDENTITY: You can not verify this claim");
        }
        self.user_claims
            .entry(subject)
            .or_default()
            .entry(piece_id)
            .and_modify(|claim| {
                claim.verifiers.insert(verifier, verifier_signature);
            });
        msg::reply(
            IdentityEvent::VerifiedClaim {
                verifier,
                subject,
                piece_id,
            },
            0,
        )
        .expect("IDENTITY: Error during replying with IdentityEvent::VerifiedClaim");
    }

    /// Check the claim's internal data.
    ///
    /// # Requirements:
    /// * all the public keys and signatures MUST be non-zero.
    /// * `verifier` - MUST differ from the claim's subject or issuer.
    ///
    /// # Arguments:
    /// * `piece_id` - claim's id.
    /// * `subject` - subject's public key.
    /// * `hash` - the hash to check against.
    fn check_claim(&mut self, subject: PublicKey, piece_id: PieceId, hash: [u8; 32]) {
        // TODO!: Rewrite in rust
        let mut status = false;
        if self
            .user_claims
            .get(&subject)
            .expect("The user has no claims")
            .get(&piece_id)
            .expect("The user has not such claim with the provided piece_id")
            .data
            .hashed_info
            .contains(&hash)
        {
            status = true;
        }
        msg::reply(
            IdentityEvent::CheckedClaim {
                subject,
                piece_id,
                status,
            },
            0,
        )
        .expect("IDENTITY: Error during replying with IdentityEvent::CheckedClaim");
    }
```

### Testing
Though the contract is not that complicated itself, we strongly suggest you check the tests. In there provided tests we show a user actually interacts with the contract (e.g. keypairs/signature and hasing).

## Conclusion
A source code of the contract example provided by Gear is available on GitHub: [`identity/src/lib.rs`](https://github.com/gear-dapps/identity/blob/master/src/lib.rs).

See also an example of the smart contract testing implementation based on gtest: [`concert/tests/concert_tests.rs`](https://github.com/gear-dapps/identity/blob/master/tests/concert_tests.rs).

For more details about testing smart contracts written on Gear, refer to this article: [Program Testing](/docs/developing-contracts/testing).