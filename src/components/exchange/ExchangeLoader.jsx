function ExchangeLoader() {
  return (
    <div className="exchange-loader">
      <div className="loader-icon">💎</div>

      <div className="loader-content">
        <div className="loader-spinner"></div>

        <h3>Preparing your reward conversions...</h3>

        <p>Please wait while we load the available options.</p>
      </div>
    </div>
  );
}

export default ExchangeLoader;