var lower_case = "abcdefghijklmnopqrstuvwxyz";
var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
function generatePassword(_a) {
    var length = _a.length, includeLowerCase = _a.includeLowerCase, includeUpperCase = _a.includeUpperCase, includeNumbers = _a.includeNumbers, includeSymbols = _a.includeSymbols;
    var chars = "";
    if (includeLowerCase)
        chars += lower_case;
    if (includeUpperCase)
        chars += upper_case;
    if (includeNumbers)
        chars += numbers;
    if (includeSymbols)
        chars += symbols;
    var password = "";
    for (var i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}
console.log(generatePassword);
