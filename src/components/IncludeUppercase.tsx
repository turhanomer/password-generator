import { ChangeEvent } from "react";

type IncludeUppercaseProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (include: boolean) => void;
};

export default function IncludeUppercase({
  includeUppercase,
  setIncludeUppercase,
}: IncludeUppercaseProps) {
  function handleIncludeUppercaseChange(e: ChangeEvent<HTMLInputElement>) {
    setIncludeUppercase(!includeUppercase);
  }

  return (
    <div className="mb-3">
      <input
        className="btn-check"
        type="checkbox"
        id="includeUppercase"
        checked={includeUppercase}
        onChange={handleIncludeUppercaseChange}
      />
      <label className="btn btn-outline-primary" htmlFor="includeUppercase">
        Include Uppercase Letters
      </label>
    </div>
  );
}
