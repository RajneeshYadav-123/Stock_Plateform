import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="container mt-5 education-section">
      <div className="row align-items-center">
        <div className="col-6 education-image">
          <img
            src="media/images/education.svg"
            alt="Education"
          />
        </div>

        <div className="col-6 education-content">
          <h1 className="mb-3 fs-2">
            Free and open market education
          </h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="edu-link">
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#" className="edu-link">
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
