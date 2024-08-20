type IncludeNumberProps = {
  includeNumbers: boolean;
  setIncludeNumbers: (include: boolean) => void;
};

export default function IncludeNumbers({
  includeNumbers,
  setIncludeNumbers,
}: IncludeNumberProps) {

  function handleIncludeNumberChange() {
    setIncludeNumbers(!includeNumbers)    
  }

  return (
    <div className="mb-3">
      <input
        type="checkbox"
        className="btn-check"
        id="includeNumbers"
        checked={includeNumbers}
        onChange={handleIncludeNumberChange}
      />
      
      <label className="btn btn-outline-primary" htmlFor="includeNumbers">Include Number</label>
    </div>
  );  
}

