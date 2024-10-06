function DecimalToBinary(binary) {
  let decimal = 0;
  let l = binary.length;
  for (let i = l - 1; i >= 0; i--) {
    if (binary[i] == "1");
    decimal += Math.pow(2, l - 1 - i);
  }
  return decimal;
}
