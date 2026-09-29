function BalanceOverview(
    {availableGems,availableVEs}
) {

  return (
    <section className="balance-section">
      <div className="section-heading">
        <span>YOUR BALANCE</span>
        <h2>Reward Overview</h2>
      </div>

      <div className="balance-grid">
        <div className="balance-card gems-card">
          <div className="balance-icon">💎</div>

          <div>
            <p>Available Gems</p>
            <h3>{availableGems}</h3>
          </div>

          <span className="info-icon" title="Gems are reward credits earned through eligible activities.">
            ⓘ
          </span>
        </div>

        <div className="balance-card ves-card">
          <div className="balance-icon">VE</div>

          <div>
            <p>Available VEs</p>
            <h3>{availableVEs.toLocaleString()}</h3>
          </div>

          <span className="info-icon" title="VEs are VELOOP Rewards' virtual reward currency.">
            ⓘ
          </span>
        </div>
      </div>
    </section>
  );
}

export default BalanceOverview;