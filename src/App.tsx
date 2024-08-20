import { useState } from "react";
import "./App.css";
import PasswordLength from "./components/PasswordLength";
import IncludeUppercase from "./components/IncludeUppercase";
import IncludeLowercase from "./components/IncludeLowercase";
import "bootstrap/dist/css/bootstrap.css";
import IncludeNumbers from "./components/IncludeNumbers";
import IncludeSymbols from "./components/IncludeSymbols";
import { generatePassword } from "./utils/generatePassword.ts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [password, setPassword] = useState<string | null>(null);
  const [passwordLength, setPasswordLength] = useState<number>(4);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(false);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  function handleCopyToClipboard() {
    if (password) {
      navigator.clipboard.writeText(password).then(
        () => toast.success("Password copied to clipboard!"),
        () => toast("Copy the clipboard!")
      )
    }
    else{
      toast.warn("No password to copy!")
    }
  }
  

  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
    });
    setPassword(newPassword);
  }

  return (
    <>
      <div id="output-main" style={{ position: "relative" }}>
        {password && <div id="output">{password}</div>}
        <svg
        onClick={handleCopyToClipboard}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-clipboard"
          viewBox="0 0 16 16"
        >
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
        </svg>
        <ToastContainer />
      </div>

      <div id="main" className="flex justify-center items-center min-h-screen">
        <div id="container" className="p-4">
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
            id="btn"
            onClick={handleGeneratePassword}
            className="px-4 py-2 btn btn-outline-success"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
