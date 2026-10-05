function ExchangeCard({ option, onConvert }) {
  return (
    <div className="exchange-card">
      <div className="exchange-card-top">
        <span className="reward-badge">
          ✦ REWARD CONVERSION
        </span>

        <div className="reward-icon">
          💎
        </div>
      </div>

      <div className="exchange-card-content">
        <h3>{option.title}</h3>

        <p className="exchange-description">
          {option.description}
        </p>

        <div className="conversion-box">
          <div className="conversion-item">
            <span>REQUIRED GEMS</span>
            <strong>
              💎 {option.requiredGems}
            </strong>
          </div>

          <div className="conversion-arrow">
            →
          </div>

          <div className="conversion-item">
            <span>YOU RECEIVE</span>
            <strong>
              VE {option.receiveVEs}
            </strong>
          </div>
        </div>

        <div className="exchange-rate">
          <span>Exchange rate</span>
          <strong>
            {option.requiredGems} Gems → {option.receiveVEs} VEs
          </strong>
        </div>

        <button
          type="button"
          className="convert-button"
          onClick={() => onConvert(option)}
        >
          Convert Rewards
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

export default ExchangeCard;