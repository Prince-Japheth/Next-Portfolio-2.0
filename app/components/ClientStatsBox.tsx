"use client";

import CountUp from "react-countup";

const ClientStatsBox = () => {
  return (
    <div className="col-md-6" data-aos="zoom-in">
      <div className="about-client-box info-box shadow-box">
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <div className="clients d-flex align-items-start gap-24 justify-content-center">
          <div className="client-item">
            <h1>
              <CountUp end={3} enableScrollSpy duration={2} prefix="+" />
            </h1>
            <p>
              Years <br />
              Experience
            </p>
          </div>
          <div className="client-item">
            <h1>
              <CountUp end={30} enableScrollSpy duration={3} prefix="+" />
            </h1>
            <p>
              HAPPY <br />
              CLIENT
            </p>
          </div>
          <div className="client-item">
            <h1>
              <CountUp end={47} enableScrollSpy scrollSpyOnce duration={4} prefix="+" />
            </h1>
            <p>
              Total <br />
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStatsBox;
