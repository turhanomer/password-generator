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
    <div className="mb-3">
      <input
      className="btn-check"
        type="checkbox"
        id="includeSymbol"
        checked={includeSymbols}
        onChange={handleIncludeSymbolChange}
      />
      <label className="btn btn-outline-primary" htmlFor="includeSymbol">Include Symbol</label>
    </div>
  );
}