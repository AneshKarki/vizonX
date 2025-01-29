import React, { useEffect } from 'react';
import "./Meeting.css";

const Meeting = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="MmainDiv" id='Contact'>
      <div className="insideMMaindiv">
        <div>
          <p className="Mp1">Why take Conferencing</p>
            <ul className="Mp2">
              <li>leads to more efficient project management and quicker decision-making, ultimately boosting productivity.</li>
              <li>beneficial for remote teams, international clients, and businesses with multiple locations.</li>
              <li>can lead to better customer support, personalized consultations, and a more engaging customer experience.</li>
              <li>conduct meetings, training sessions, and presentations without the associated costs and logistical challenges of in-person gatherings.</li>
            </ul>
        </div>
        <div className="Cal">
          <div className="calendly-inline-widget" data-url="https://calendly.com/vizonx6/30min" style={{ minWidth: "300px", height: "530px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;