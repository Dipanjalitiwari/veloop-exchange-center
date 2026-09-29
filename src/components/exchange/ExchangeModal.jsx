import {useRef, useState } from "react";

function ExchangeModal({
  option,
  availableGems,
  availableVEs,
  onClose,
  onConfirm,
}) {
  const [isConfirming, setIsConfirming] = useState(false);
  const confirmLock = useRef(false);
  const [error , setError]= useState("")
  if (!option) return null;

  const hasEnoughGems = availableGems >= option.requiredGems;

  const gemsAfterConversion = availableGems - option.requiredGems;

  const vesAfterConversion = availableVEs + option.receiveVEs;

  return (
    <div className="modal-overlay">
      <div className="exchange-modal">
        <button className="modal-close" onClick={onClose}>
            ×
        </button>

        <div className="modal-icon">💎</div>

        <h2>Confirm Conversion</h2>

        <p className="modal-subtitle">
          Review your reward conversion before confirming.
        </p>

        <div className="modal-conversion">
          <div>
            <span>Gems</span>
            <strong>💎 {option.requiredGems}</strong>
          </div>

          <div className="modal-arrow">↓</div>

          <div>
            <span>VEs</span>
            <strong>VE {option.receiveVEs}</strong>
          </div>
        </div>

        <div className="balance-preview">
          <div>
            <span>Gems after conversion</span>
            <strong>{gemsAfterConversion}</strong>
          </div>

          <div>
            <span>VEs after conversion</span>
            <strong>{vesAfterConversion.toLocaleString()}</strong>
          </div>
        </div>

        {!hasEnoughGems && (
          <div className="insufficient-message">
            <strong>Not enough Gems</strong>
            <p>
              You need {option.requiredGems - availableGems} more Gems to unlock
              this conversion.
            </p>
          </div>
        )}

        {error && (
          <div className="conversion-error">
            <strong>Conversion Failed</strong>
            <p>{error}
            </p>
          </div>
        )}

        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>

          {hasEnoughGems ? (
            <button
              className="confirm-button"
              disabled={isConfirming}
              
              onClick={() => {
                if (confirmLock.current) return;
                 confirmLock.current=true;
                setIsConfirming(true);

                setTimeout(() => {
                  try{
                  onConfirm(option);
                } catch (err){
                  setError("Something went wrong. Please try again.");
                  setIsConfirming(false);
                }
              }, 700);
              }}
            >
              {isConfirming ? "Converting..." : "Confirm Conversion"}
            </button>
          ) : (
            <button className="earn-button" onClick={onClose}>
              Earn More Gems
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExchangeModal;
