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
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeNumbers"
        checked={includeNumbers}
        className="mr-2"
        onChange={handleIncludeNumberChange}
      />
      
      <label htmlFor="includeNumbers">Include Number</label>
    </div>
  );  
}

