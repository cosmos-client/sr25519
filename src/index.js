"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = exports.keypairFromSeed = exports.derivePublicSoft = exports.deriveKeypairSoft = exports.deriveKeypairHard = void 0;
var crypto = __importStar(require("./pkg/crypto"));
exports.deriveKeypairHard = crypto.derive_keypair_hard;
exports.deriveKeypairSoft = crypto.derive_keypair_soft;
exports.derivePublicSoft = crypto.derive_public_soft;
exports.keypairFromSeed = crypto.keypair_from_seed;
exports.sign = crypto.sign;
exports.verify = crypto.verify;
