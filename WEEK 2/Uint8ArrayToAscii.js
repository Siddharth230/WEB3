function bytesToAscii(byteArray) {
  return new TextDecoder().decode(byteArray);
}

// Example usage:
const bytes = new Uint8Array([
  72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33,
]); // Corresponds to "Hello World!"
const asciiString = bytesToAscii(bytes);
console.log(asciiString); // Output: "Hello World!"
