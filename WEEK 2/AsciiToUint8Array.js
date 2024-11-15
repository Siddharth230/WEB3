function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map((char) => char.charCodeAt(0)));
}

// Example usage:
const ascii = "Hello World!";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: Uint8Array(5)  [ 72, 101, 108, 108, 111, 32,  87, 111, 114, 108, 100,  33 ]
