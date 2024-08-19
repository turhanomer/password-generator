type GeneratePasswordOptions = {
  length: number;
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};

const lower_case = "abcdefghijklmnopqrstuvwxyz";
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword({
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
}: GeneratePasswordOptions) {
  let chars = "";
  if (includeLowercase) chars += lower_case;
  if (includeUppercase) chars += upper_case;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export {generatePassword}