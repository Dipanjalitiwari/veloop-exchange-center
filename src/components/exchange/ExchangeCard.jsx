function ExchangeCard({ option, onConvert }) {
  return (
    <div className="exchange-card">
      <div className="exchange-card-top">
        <span className="reward-badge">REWARD CONVERSION</span>

        <span className="reward-icon">💎</span>
      </div>

      <h3>{option.title}</h3>

      <p className="exchange-description">
        {option.description}
      </p>

      <div className="conversion-box">
        <div className="conversion-item">
          <span>Required Gems</span>
          <strong>💎 {option.requiredGems}</strong>
        </div>

        <div className="conversion-arrow">→</div>

        <div className="conversion-item">
          <span>You Receive</span>
          <strong>VE {option.receiveVEs}</strong>
        </div>
      </div>

      <button
        type="button"
        className="convert-button"
        onClick={() => {
            alert("Button clicked");
            onConvert(option)
        }}
      >
        Convert Rewards
      </button>
    </div>
  );
}

export default ExchangeCard;