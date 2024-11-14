const x1 = 0;
console.log(x1);

const x2 = 202;
console.log(x2);

const bytes1 = [202, 244, 1, 23];
console.log(bytes1);

let bytes2 = new Uint8Array([0, 255, 127, 128]);
console.log(bytes2);

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr);
