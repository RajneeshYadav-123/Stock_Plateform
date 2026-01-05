import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="container team-section">
      <div className="row p-3 mt-5 border-top team-heading">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-3 text-muted team-content">
        <div className="col-6 p-3 text-center team-profile">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="team-image"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="designation">Founder, CEO</h6>
        </div>

        <div className="col-6 p-3 team-description">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p className="team-links">
            Connect on{" "}
            <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
