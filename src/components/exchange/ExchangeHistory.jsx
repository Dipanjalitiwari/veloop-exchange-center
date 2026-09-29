function ExchangeHistory({ history }) {
  return (
    <section className="history-section">
      <div className="section-heading">
        <span>YOUR ACTIVITY</span>
        <h2>Recent Conversions</h2>
      </div>

      {history.length === 0 ? (
        <div className="history-empty">
          <span>↻</span>
          <p>No conversions yet.</p>
          <small>Your recent reward conversions will appear here.</small>
        </div>
      ) : (
        <div className="history-list">
          {history.map((item) => (
            <div className="history-item" key={item.id}>
              <div className="history-icon">💎</div>

              <div className="history-details">
                <strong>
                  {item.gems} Gems → {item.ves} VEs
                </strong>
                <span>{item.date}</span>
              </div>

              <span className={`history-status ${item.status}`}>
                {item.status === "completed"
                  ? "✓ Completed"
                  : item.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ExchangeHistory;