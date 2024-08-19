type IncludeSymbolProps = {
  includeSymbols: boolean;
  setIncludeSymbols: (include: boolean) => void;
};

export default function IncludeSymbols({
  includeSymbols,
  setIncludeSymbols,
}: IncludeSymbolProps) {

  function handleIncludeSymbolChange() {
    setIncludeSymbols(!includeSymbols)
  }

  return (
    <div className="mb-2">
      <input
        type="checkbox"
        id="includeSymbol"
        checked={includeSymbols}
        className="mr-2"
        onChange={handleIncludeSymbolChange}
      />
      <label htmlFor="includeSymbol">Include Symbol</label>
    </div>
  );
}