import '../public/style.css';
import '../public/favicon.ico';
import {
  getPasswordStrength,
  generatePassword
} from './password-generator.js';

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
  const password = passwordText.value;
  if (password === "") return;
  passwordText.select();  
  passwordText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(password);
  fade(false);
  setTimeout(() => fade(true), 1000);
});

input.addEventListener("input", (event) => {
  const passwordLength = event.target.value;
  value.textContent = passwordLength;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  strength.textContent = passwordStrength !== "" ?  passwordStrength : "";
  passwordText.value = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
})

includeUpper.addEventListener("change", (event) => {
  includeUpperChecked = event.target.checked;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  strength.textContent = passwordStrength !== "" ?  passwordStrength : "";
  passwordText.value = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
});

includeLower.addEventListener("change", (event) => {
  includeLowerChecked = event.target.checked;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  strength.textContent = passwordStrength !== "" ?  passwordStrength : "";
  const password = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  passwordText.value = password;
});

includeNumber.addEventListener("change", (event) => {
  includeNumberChecked = event.target.checked;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  strength.textContent = passwordStrength !== "" ? passwordStrength : "";
  passwordText.value = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
});

includeSymbol.addEventListener("change", (event) => {
  includeSymbolChecked = event.target.checked;
  const passwordStrength = getPasswordStrength(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
  strength.textContent = passwordStrength !== "" ? passwordStrength : "";
  passwordText.value = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
});

refreshButton.addEventListener("click", () => {
  passwordText.value = generatePassword(includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked, passwordLength);
});

function fade(fadeSate) {
  if (fadeState == true) {
    toaster.style.animation = "fade-in 2s forwards";
  } else if (fadeState == false) {
    toaster.style.animation = "fade-out 2s forwards";
  }
  fadeState = !fadeState;
}
