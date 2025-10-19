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
              <CountUp end={8} enableScrollSpy duration={2} prefix="+" />
            </h1>
            <p>
              Years <br />
              Learning
            </p>
          </div>
          <div className="client-item d-none d-md-block">
            <h1>
              <CountUp end={10} enableScrollSpy duration={3} prefix="+" />
            </h1>
            <p>
              TECHNOLOGIES <br />
              MASTERED
            </p>
          </div>
          <div className="client-item">
            <h1>
              <CountUp end={47} enableScrollSpy scrollSpyOnce duration={4} prefix="+" />
            </h1>
            <p>
              Projects <br />
              Built
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStatsBox;
