import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <div className="container mt-5 awards-section">
      <div className="row align-items-center">
        <div className="col-6 p-5 awards-image">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
          />
        </div>

        <div className="col-6 p-5 awards-content">
          <h1>Largest stock broker in India</h1>

          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row awards-list">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="press-logos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
