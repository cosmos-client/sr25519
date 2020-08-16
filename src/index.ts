import * as crypto from "./pkg/crypto";

export const deriveKeypairHard = crypto.derive_keypair_hard;
export const deriveKeypairSoft = crypto.derive_keypair_soft;
export const derivePublicSoft = crypto.derive_public_soft;
export const keypairFromSeed = crypto.keypair_from_seed;
export const sign = crypto.sign;
export const verify = crypto.verify;
