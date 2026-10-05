function ExchangeRules() {
  const rules = [
    "Only eligible Gems can be exchanged.",
    "Exchange rates are predefined by VELOOP Rewards.",
    "Available conversions may vary.",
    "A successful conversion cannot be duplicated.",
    "Your balance is updated after successful conversion.",
    "Platform rules apply.",
  ];

  return (
    <section className="rules-section">
      <div className="section-heading">
        <span>IMPORTANT</span>
        <h2>Exchange Rules</h2>
        <p>Please review these guidelines before making a conversion.</p>
      </div>

      <div className="rules-card">
        <div className="rules-card-header">
          <div className="rules-shield">✓</div>

          <div>
            <h3>Before you exchange</h3>
            <p>
              Keep these reward conversion guidelines in mind.
            </p>
          </div>
        </div>

        <div className="rules-list">
          {rules.map((rule, index) => (
            <div className="rule-item" key={index}>
              <span className="rule-check">✓</span>

              <p>{rule}</p>

              <span className="rule-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExchangeRules;