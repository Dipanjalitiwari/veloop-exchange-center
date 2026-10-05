function ConversionSuccess({ option, onContinue }) {
  if (!option) return null;

  return (
    <div className="success-overlay">
      <div className="success-card">

        <div className="success-glow"></div>

        <div className="success-icon-wrap">
          <div className="success-icon">✓</div>
        </div>

        <span className="success-badge">
          ✦ REWARD CONVERSION
        </span>

        <h2>Conversion Complete</h2>

        <p className="success-message">
          Your reward conversion was completed successfully.
        </p>

        <div className="success-conversion">
          <div>
            <span>GEMS USED</span>
            <strong>💎 {option.requiredGems}</strong>
          </div>

          <div className="success-arrow">
            →
          </div>

          <div>
            <span>VE RECEIVED</span>
            <strong>VE {option.receiveVEs}</strong>
          </div>
        </div>

        <div className="success-reward">
          <span>Reward added to your balance</span>
          <strong>+{option.receiveVEs} VEs</strong>
        </div>

        <button
          className="continue-button"
          onClick={onContinue}
        >
          Continue
          <span>→</span>
        </button>

        <div className="success-note">
          <span>✓</span>
          <p>Your balance has been updated.</p>
        </div>

      </div>
    </div>
  );
}

export default ConversionSuccess;