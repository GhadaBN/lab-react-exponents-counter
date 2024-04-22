const Exponent = ({ count, exponent }) => {
  // Calculate num raised to the power of exponent
  const result = Math.pow(count, exponent);

  // Generate the display of the operation
  const displayOperation = Array.from({ length: exponent }, () => count).join(
    "*"
  );
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        n<sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {displayOperation} = <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default Exponent;
