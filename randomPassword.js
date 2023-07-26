function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-=_+[]{}|;:,.<>?";

  const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  let password = "";

  password += getRandomCharacter(uppercaseLetters);
  password += getRandomCharacter(lowercaseLetters);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialCharacters);

  for (let i = password.length; i < length; i++) {
    password += getRandomCharacter(allChars);
  }

  password = shuffleString(password);

  return password;
}

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffleString(str) {
  let shuffledStr = str.split('').sort(() => Math.random() - 0.5).join('');
  return shuffledStr;
}

const passwordLength = 8; 
const randomPassword = generateRandomPassword(passwordLength);
console.log("Random Password:", randomPassword);
