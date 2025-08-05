// import * as ed from "@noble/ed25519";
// import { Keypair } from "@solana/web3.js";
// import nacl from "tweetnacl";

// async function main() {
//   // Generate a secure random private key
//   const privKey = ed.utils.randomPrivateKey();
//   console.log(privKey)

//   const str = "hello world"

//   // Convert the message "hello world" to a Uint8Array
//   const message = new TextEncoder().encode(str);

//   // Generate the public key from the private key
//   const pubKey = await ed.getPublicKeyAsync(privKey);
//   console.log(pubKey)

//   // Sign the message
//   const signature = await ed.signAsync(message, privKey);

//   // Verify the signature
//   const isValid = await ed.verifyAsync(signature, message, pubKey);

//   // Output the result
//   console.log("Input message: ", str)
//   console.log("Private Key:", Buffer.from(privKey).toString("hex"));
//   console.log("Public Key: ", Buffer.from(pubKey).toString("hex"));
//   console.log("Signature:  ", Buffer.from(signature).toString("hex"));
//   console.log(isValid); // Should print `true` if the signature is valid
// }

// main();

// // * solana/web3.js
// // Generate a new keypair
// const keypair = Keypair.generate();

// // Extract the public and private keys
// const publicKey = keypair.publicKey.toString();
// const secretKey = keypair.secretKey;

// // Display the keys
// console.log("Public Key:", publicKey);
// console.log("Private Key (Secret Key):", secretKey);
// const str = "hello world"

// // Convert the message "hello world" to a Uint8Array
// const message = new TextEncoder().encode(str);
// console.log("Input message: ", str)

// const signature = nacl.sign.detached(message, secretKey);
// const result = nacl.sign.detached.verify(
//   message,
//   signature,
//   keypair.publicKey.toBytes(),
// );

// console.log(result);

import { generateMnemonic } from "bip39";

const words = generateMnemonic(256)
console.log(words)