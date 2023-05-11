import '../public/style.css';
import '../public/favicon.ico';
import { getPasswordStrength, generatePassword } from './password-generator.js';

let fadeState = true;

let passwordLength = 0;
let includeUpperChecked  = false;
let includeLowerChecked  = false;
let includeNumberChecked = false;
let includeSymbolChecked = false;

const value = document.querySelector("#value")
const strength = document.querySelector("#strength")
const input = document.querySelector("#password-length")
const includeUpper = document.querySelector("#password-upper")
const includeLower = document.querySelector("#password-lower")
const includeNumber = document.querySelector("#password-number")
const includeSymbol = document.querySelector("#password-symbol")
const passwordText = document.querySelector("#password-text")
const refreshButton = document.querySelector("#password-refresh")
const copyButton = document.querySelector("#password-copy")
const toaster = document.querySelector("#toaster")

includeUpperChecked  = includeUpper.checked;
includeLowerChecked  = includeLower.checked;
includeNumberChecked = includeNumber.checked;
includeSymbolChecked = includeSymbol.checked;

value.textContent = input.value;
passwordLength = input.value;

copyButton.addEventListener("click", () => {
  if (passwordText.value === "") return;
  passwordText.select();  
  passwordText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordText.value);
  fade(false);
  setTimeout(() => fade(true), 500);
});

input.addEventListener("input", (event) => {
  passwordLength = event.target.value;
  value.textContent = passwordLength;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  (passwordStrength !== "") ? strength.textContent = passwordStrength : strength.textContent = "";
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
})

includeUpper.addEventListener("change", (event) => {
  (event.target.checked) ? includeUpperChecked = true : includeUpperChecked = false;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  (passwordStrength !== "") ? strength.textContent = passwordStrength : strength.textContent = "";
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
});

includeLower.addEventListener("change", (event) => {
  (event.target.checked) ? includeLowerChecked = true : includeLowerChecked = false;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  (passwordStrength !== "") ? strength.textContent = passwordStrength : strength.textContent = "";
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
});

includeNumber.addEventListener("change", (event) => {
  (event.target.checked) ? includeNumberChecked = true : includeNumberChecked = false;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  (passwordStrength !== "") ? strength.textContent = passwordStrength : strength.textContent = "";
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
});

includeSymbol.addEventListener("change", (event) => {
  (event.target.checked) ? includeSymbolChecked = true : includeSymbolChecked = false;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  (passwordStrength !== "") ? strength.textContent = passwordStrength : strength.textContent = "";
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
});

refreshButton.addEventListener("click", () => {
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
  console.log(password);
});

function fade(fadeSate) {
  let div = document.querySelector("toaster");
  if (fadeState == true) {
    toaster.style.animation = "fade-in 1s forwards";
  } else if (fadeState == false) {
    toaster.style.animation = "fade-out 1s forwards";
  }
  fadeState = !fadeState;
}