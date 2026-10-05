function ExchangeHistory({ history }) {
  return (
    <section className="history-section">
      <div className="section-heading">
        <span>YOUR ACTIVITY</span>
        <h2>Recent Conversions</h2>
        <p>Keep track of your latest reward conversions.</p>
      </div>

      {history.length === 0 ? (
        <div className="history-empty">
          <div className="history-empty-icon">↻</div>

          <h3>No conversions yet</h3>

          <p>
            Your recent reward conversions will appear here.
          </p>

          <span>
            Convert your Gems to see your activity.
          </span>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div className="history-item" key={item.id}>
              <div className="history-icon">
                💎
              </div>

              <div className="history-details">
                <strong>
                  {item.gems} Gems
                  <span className="history-arrow">→</span>
                  {item.ves} VEs
                </strong>

                <span>{item.date}</span>
              </div>

              <div className="history-right">
                <span className={`history-status ${item.status}`}>
                  {item.status === "completed"
                    ? "✓ Completed"
                    : item.status}
                </span>

                <span className="history-reward">
                  +{item.ves} VEs
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ExchangeHistory;