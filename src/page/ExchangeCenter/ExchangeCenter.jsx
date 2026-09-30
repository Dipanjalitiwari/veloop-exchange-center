import { useState } from "react";

import ExchangeHero from "../../components/exchange/ExchangeHero";
import BalanceOverview from "../../components/exchange/BalanceOverview";
import ExchangeCard from "../../components/exchange/ExchangeCard";
import ExchangeModal from "../../components/exchange/ExchangeModal";
import ConversionSuccess from "../../components/exchange/ConversionSuccess";
import ExchangeHistory from "../../components/exchange/ExchangeHistory";
import ExchangeRules from "../../components/exchange/ExchangeRules";
import HowExchangeWorks from "../../components/exchange/HowExchangeWorks";

import exchangeOptions from "../../data/exchangeData";

import "../../styles/exchange.css";

function ExchangeCenter() {
  const [availableGems, setAvailableGems] = useState(420);
  const [availableVEs, setAvailableVEs] = useState(3850);

  const [selectedOption, setSelectedOption] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const [history, setHistory] = useState([]);

  const handleConvert = (option) => {
    console.log("Selected option:",option);
    setSelectedOption(option);
  };
  const handleConfirm = (option) => {
    setAvailableGems(
      (previousGems) => previousGems - option.requiredGems
    );

    setAvailableVEs(
      (previousVEs) => previousVEs + option.receiveVEs
    );

    const newHistory = {
      id: Date.now(),
      gems: option.requiredGems,
      ves: option.receiveVEs,
      date: "Today",
      status: "completed",
    };

    setHistory((previousHistory) => [
      newHistory,
      ...previousHistory,
    ]);

    setSelectedOption(option);
    setShowSuccess(true);
  };

  const handleContinue = () => {
    setShowSuccess(false);
    setSelectedOption(null);
  };

  return (
    <main className="exchange-center-page">
      <ExchangeHero />

      <BalanceOverview 
      availableGems={availableGems}
      availableVEs={availableVEs}
      />

      <section className="conversion-section">
        <div className="section-heading">
          <span>AVAILABLE OPTIONS</span>
          <h2>Available Conversions</h2>
          <p>
            Choose a reward conversion that works for you.
          </p>
        </div>

        <div className="exchange-grid">
          {exchangeOptions.map((option) => (
            <ExchangeCard
              key={option.id}
              option={option}
              onConvert={handleConvert}
            />
          ))}
        </div>
      </section>

      <HowExchangeWorks />

      <ExchangeHistory history={history} />

      <ExchangeRules />

      {selectedOption && (
        <ExchangeModal
          option={selectedOption}
          availableGems={availableGems}
          availableVEs={availableVEs}
          onClose={() => setSelectedOption(null)}
          onConfirm={handleConfirm}
        />
      )}

      {showSuccess && (
        <ConversionSuccess
          option={selectedOption}
          onContinue={handleContinue}
        />
      )}
    </main>
  );
}

export default ExchangeCenter;