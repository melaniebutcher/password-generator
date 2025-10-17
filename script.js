// script.js
document.getElementById('generate').addEventListener('click', () => {
  const length = parseInt(document.getElementById('length').value);
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, useUpper, useLower, useNumbers, useSymbols);
  document.getElementById('result').value = password;
});

document.getElementById('copy').addEventListener('click', () => {
  const result = document.getElementById('result');
  result.select();
  document.execCommand('copy');
});

function generatePassword(length, upper, lower, numbers, symbols) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let allChars = "";
  if (upper) allChars += upperChars;
  if (lower) allChars += lowerChars;
  if (numbers) allChars += numberChars;
  if (symbols) allChars += symbolChars;

  if (!allChars) return "Select at least one option";

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % allChars.length;
    password += allChars.charAt(randomIndex);
  }
  return password;
}
