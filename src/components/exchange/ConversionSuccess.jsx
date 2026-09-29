function ConversionSuccess({ option, onContinue }) {
  if (!option) return null;

  return (
    <div className="success-overlay">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h2>Conversion Complete</h2>

        <p>
          {option.requiredGems} Gems converted successfully.
        </p>

        <div className="success-reward">
          <strong>+{option.receiveVEs} VEs</strong>
          <span>added to your balance</span>
        </div>

        <button
          className="continue-button"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ConversionSuccess;