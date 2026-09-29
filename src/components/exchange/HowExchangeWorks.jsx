function HowExchangeWorks() {
  const steps = [
    {
      number: "01",
      title: "Earn Gems",
      description: "Complete eligible activities and earn Gems.",
    },
    {
      number: "02",
      title: "Choose Conversion",
      description: "Select an available reward conversion.",
    },
    {
      number: "03",
      title: "Review Exchange",
      description: "Check the Gems required and VEs you will receive.",
    },
    {
      number: "04",
      title: "Confirm",
      description: "Confirm your reward conversion.",
    },
    {
      number: "05",
      title: "Receive VEs",
      description: "Your VEs are added after successful conversion.",
    },
  ];

  return (
    <section className="how-it-works-section">
      <div className="section-heading">
        <span>SIMPLE PROCESS</span>
        <h2>How Exchange Works</h2>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-item" key={step.number}>
            <div className="step-number">{step.number}</div>

            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>

            {index < steps.length - 1 && (
              <div className="step-arrow">↓</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowExchangeWorks;