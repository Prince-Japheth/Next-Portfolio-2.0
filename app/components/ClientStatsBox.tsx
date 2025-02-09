"use client";

const ClientStatsBox = () => {
  return (
    <div className="col-md-6" data-aos="zoom-in">
      <div className="about-client-box info-box shadow-box">
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />
        <div className="clients d-flex align-items-start gap-24 justify-content-center">
          <div className="client-item">
            <h1>03</h1>
            <p>
              Years <br />
              Experience
            </p>
          </div>
          <div className="client-item">
            <h1>+30</h1>
            <p>
              HAPPY <br />
              CLIENT
            </p>
          </div>
          <div className="client-item">
            <h1>+42</h1>
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
