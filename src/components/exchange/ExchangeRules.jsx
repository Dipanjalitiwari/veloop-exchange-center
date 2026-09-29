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
      </div>

      <div className="rules-card">
        {rules.map((rule, index) => (
          <div className="rule-item" key={index}>
            <span className="rule-check">✓</span>
            <p>{rule}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExchangeRules;