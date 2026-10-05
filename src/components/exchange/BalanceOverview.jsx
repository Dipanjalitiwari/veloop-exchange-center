function BalanceOverview({ availableGems, availableVEs }) {
  return (
    <section className="balance-section">
      <div className="section-heading">
        <span>YOUR BALANCE</span>
        <h2>Reward Overview</h2>
        <p>Keep track of your available rewards before making a conversion.</p>
      </div>

      <div className="balance-grid">
        <div className="balance-card gems-card">
          <div className="balance-card-top">
            <div className="balance-icon">💎</div>

            <span
              className="info-icon"
              title="Gems are reward credits earned through eligible activities."
            >
              ⓘ
            </span>
          </div>

          <div className="balance-content">
            <p>Available Gems</p>
            <h3>{availableGems}</h3>
            <span className="balance-label">Ready to convert</span>
          </div>

          <div className="balance-decoration">✦</div>
        </div>

        <div className="balance-card ves-card">
          <div className="balance-card-top">
            <div className="balance-icon">VE</div>

            <span
              className="info-icon"
              title="VEs are VELOOP Rewards' virtual reward currency."
            >
              ⓘ
            </span>
          </div>

          <div className="balance-content">
            <p>Available VEs</p>
            <h3>{availableVEs.toLocaleString()}</h3>
            <span className="balance-label">Your reward balance</span>
          </div>

          <div className="balance-decoration">◆</div>
        </div>
      </div>
    </section>
  );
}

export default BalanceOverview;