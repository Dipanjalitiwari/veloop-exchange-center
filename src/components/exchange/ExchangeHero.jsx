function ExchangeHero() {
  return (
    <section className="exchange-hero">
      <div className="hero-content">
        <span className="hero-badge">
          ✦ VELOOP REWARDS
        </span>

        <h1>
          Exchange Your
          <span> Rewards</span>
        </h1>

        <p className="hero-title">
          Turn your earned Gems into VEs
        </p>

        <p className="hero-description">
          Convert your eligible Gems into VEs and keep moving forward
          on your reward journey.
        </p>

        <div className="hero-points">
          <div>
            <span>✦</span>
            <p>Simple & Secure</p>
          </div>

          <div>
            <span>◆</span>
            <p>Instant Rewards</p>
          </div>

          <div>
            <span>✓</span>
            <p>Easy Conversion</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-glow"></div>

        <div className="floating-gem gem-one">💎</div>
        <div className="floating-gem gem-two">✦</div>
        <div className="floating-gem gem-three">◆</div>

        <div className="gem-circle">
          <span>💎</span>
        </div>

        <div className="conversion-arrow">
          →
        </div>

        <div className="ve-circle">
          <span>VE</span>
        </div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
      </div>
    </section>
  );
}

export default ExchangeHero;