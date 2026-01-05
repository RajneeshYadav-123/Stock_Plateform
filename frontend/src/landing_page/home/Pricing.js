import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container pricing-section">
      <div className="row align-items-center">
        <div className="col-4 pricing-left">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="pricing-link">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6 mb-5 pricing-right">
          <div className="row text-center">
            <div className="col p-4 border pricing-card">
              <h1 className="price">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>

            <div className="col p-4 border pricing-card">
              <h1 className="price">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
