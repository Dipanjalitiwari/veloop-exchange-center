import { useRef, useState } from "react";

function ExchangeModal({
  option,
  availableGems,
  availableVEs,
  onClose,
  onConfirm,
}) {
  const [isConfirming, setIsConfirming] = useState(false);
  const confirmLock = useRef(false);
  const [error, setError] = useState("");

  if (!option) return null;

  const hasEnoughGems = availableGems >= option.requiredGems;

  const gemsAfterConversion =
    availableGems - option.requiredGems;

  const vesAfterConversion =
    availableVEs + option.receiveVEs;

  return (
    <div className="modal-overlay">
      <div className="exchange-modal">

        {/* Close Button */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close conversion modal"
        >
          ×
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-icon-wrap">
            <div className="modal-icon">💎</div>
          </div>

          <span className="modal-badge">
            ✦ REWARD CONVERSION
          </span>

          <h2>Confirm Conversion</h2>

          <p className="modal-subtitle">
            Review your reward exchange before confirming.
          </p>
        </div>

        {/* Conversion Preview */}
        <div className="modal-conversion-card">

          <div className="modal-currency">
            <span className="modal-currency-label">
              YOU SPEND
            </span>

            <div className="modal-currency-value">
              <span>💎</span>
              <strong>{option.requiredGems}</strong>
            </div>

            <small>Gems</small>
          </div>

          <div className="modal-arrow">
            →
          </div>

          <div className="modal-currency">
            <span className="modal-currency-label">
              YOU RECEIVE
            </span>

            <div className="modal-currency-value ve-value">
              <span>VE</span>
              <strong>{option.receiveVEs}</strong>
            </div>

            <small>VEs</small>
          </div>

        </div>

        {/* Exchange Rate */}
        <div className="modal-rate">
          <span>Exchange rate</span>

          <strong>
            {option.requiredGems} Gems → {option.receiveVEs} VEs
          </strong>
        </div>

        {/* Balance Preview */}
        <div className="balance-preview">

          <div>
            <span>Gems after conversion</span>
            <strong>{gemsAfterConversion}</strong>
          </div>

          <div>
            <span>VEs after conversion</span>
            <strong>
              {vesAfterConversion.toLocaleString()}
            </strong>
          </div>

        </div>

        {/* Insufficient Gems */}
        {!hasEnoughGems && (
          <div className="insufficient-message">
            <div className="message-icon">!</div>

            <div>
              <strong>Not enough Gems</strong>

              <p>
                You need{" "}
                {option.requiredGems - availableGems} more Gems
                to unlock this conversion.
              </p>
            </div>
          </div>
        )}

        {/* Conversion Error */}
        {error && (
          <div className="conversion-error">
            <div className="message-icon">!</div>

            <div>
              <strong>Conversion Failed</strong>

              <p>{error}</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="modal-actions">

          <button
            className="cancel-button"
            onClick={onClose}
            disabled={isConfirming}
          >
            Cancel
          </button>

          {hasEnoughGems ? (
            <button
              className="confirm-button"
              disabled={isConfirming}
              onClick={() => {
                if (confirmLock.current) return;

                confirmLock.current = true;
                setIsConfirming(true);

                setTimeout(() => {
                  try {
                    onConfirm(option);
                  } catch (err) {
                    setError(
                      "Something went wrong. Please try again."
                    );

                    setIsConfirming(false);
                    confirmLock.current = false;
                  }
                }, 700);
              }}
            >
              {isConfirming
                ? "Converting..."
                : "Confirm Conversion"}

              {!isConfirming && <span>→</span>}
            </button>
          ) : (
            <button
              className="earn-button"
              onClick={onClose}
            >
              Earn More Gems
              <span>→</span>
            </button>
          )}

        </div>

        {/* Secure Note */}
        <div className="modal-secure-note">
          <span>✓</span>
          <p>Your reward balance will update after confirmation.</p>
        </div>

      </div>
    </div>
  );
}

export default ExchangeModal;