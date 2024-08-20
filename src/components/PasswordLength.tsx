import { ChangeEvent } from "react";

type PasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (length: number) => void;
};

export default function PasswordLength({
  passwordLength,
  setPasswordLength
}: PasswordLengthProps) {

  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value, 10))
  }

  return (
    <>
      <div className="mb-3">
        <label className="flex items-center justify-between font-medium">
          <div>Password Length</div>
          <div>{passwordLength}</div>
        </label>
        <input
          type="range"
          id="passwordLength"
          min="4"
          max="20"
          onChange={handlePasswordLengthChange}
          value={passwordLength}
        />
      </div>
    </>
  );
}
