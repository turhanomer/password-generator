type IncludeLowercaseProps = {
  includeLowercase: boolean;
  setIncludeLowercase: (include: boolean) => void;
};

export default function IncludeLowercase({
  includeLowercase,
  setIncludeLowercase
}: IncludeLowercaseProps) {
  function handleIncludeLowercaseChange() {
    setIncludeLowercase(!includeLowercase);
  }
  return (
    <div className="mb-3">
      <input
        type="checkbox"
        className="btn-check"
        id="includeLowercase"
        checked={includeLowercase}
        onChange={handleIncludeLowercaseChange}
      />
      <label className="btn btn-outline-primary" htmlFor="includeLowercase">Include Lowercase Letters</label>
    </div>
  );
}
