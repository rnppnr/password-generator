
function getPasswordStrengthCategory(entropy) {
  const strengthCategories = [
    { maxEntropy: 40,       category: "Very weak" },
    { maxEntropy: 60,       category: "Weak" },
    { maxEntropy: 80,       category: "Moderate" },
    { maxEntropy: 128,      category: "Strong" },
    { maxEntropy: Infinity, category: "Very strong" }
  ];  

  const matchedCategory = strengthCategories.find(
    strengthCategory => entropy < strengthCategory.maxEntropy
  );

  return matchedCategory.category;
}


function getPasswordStrength(includeUpperChecked, includeLowerChecked,
  includeNumberChecked, includeSymbolChecked, passwordLength) {

  const entropyValues = {
    upper: 26,
    lower: 26,
    number: 10,
    symbol: 32
  };  
      
  const includeChecked = [includeUpperChecked, includeLowerChecked, includeNumberChecked, includeSymbolChecked];
  const hasIncludedCharacter = includeChecked.some(check => check);

  if (!hasIncludedCharacter) {
    return "";
  }

  const entropy = includeChecked.reduce((totalEntropy, check, index) => {
    return totalEntropy + (check ? entropyValues[Object.keys(entropyValues)[index]] : 0);
  }, 0);

  const strength = Math.log2(entropy) * passwordLength;

  return getPasswordStrengthCategory(strength);
};


function generatePassword(includeUpperChecked, includeLowerChecked,
  includeNumberChecked, includeSymbolChecked, passwordLength) {

  const characterSets = [
    { characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", include: includeUpperChecked },
    { characters: "abcdefghijklmnopqrstuvwxyz", include: includeLowerChecked },
    { characters: "0123456789", include: includeNumberChecked },
    { characters: "!@#$%^&*()_+=-{}[]|:;<>?", include: includeSymbolChecked }
  ];

  let allCharacters = "";
  characterSets.forEach(({ characters, include }) => {
    if (include) {
      allCharacters += characters;
    }
  });

  let password = "";

  if (allCharacters.length !== 0) {
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }
  }

  return password;
}


export { getPasswordStrength, generatePassword };
