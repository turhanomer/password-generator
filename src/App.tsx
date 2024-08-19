import { useState } from "react";
import "./App.css";
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import "bootstrap/dist/css/bootstrap.css";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import { generatePassword } from "./utils/generatePassword.ts";

function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword)
  }

  return (
    <>
    <div id="output-main">
    {password && (
        <div id="output">{password}</div>
    )}
    </div>
      <div id="main" className="flex justify-center items-center min-h-screen">
        <div id="container" className="w-[20rem] p-4">
          <PasswordLength
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <IncludeUppercase
            includeUppercase={includeUppercase}
            setIncludeUppercase={setIncludeUppercase}
          />
          <IncludeLowercase
            includeLowercase={includeLowercase}
            setIncludeLowercase={setIncludeLowercase}
          />
          <IncludeNumbers
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
          />
          <IncludeSymbols
            includeSymbols={includeSymbols}
            setIncludeSymbols={setIncludeSymbols}
          />
          <button
            onClick={handleGeneratePassword}
            className="px-4 py-2 bg-gray-400"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
