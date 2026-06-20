"use client";

import CountUp from "react-countup";
import Image from "next/image";

interface ClientStatsBoxProps {
  isWordpress?: boolean;
}

const ClientStatsBox = ({ isWordpress }: ClientStatsBoxProps) => {
  if (isWordpress) {
    return (
      <div className="col-md-6" data-aos="zoom-in">
        <div className="about-client-box info-box shadow-box" style={{ padding: '30px' }}>
          <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
          <div className="wordpress-packages-box" style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <h4 style={{ fontSize: '18px', marginBottom: '20px', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>WordPress Packages</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Business Website Package</span>
              <strong style={{ color: '#fff' }}>$500</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Professional Company Website</span>
              <strong style={{ color: '#fff' }}>$997</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>E-Commerce + SEO Setup</span>
              <strong style={{ color: '#fff' }}>$1,500</strong>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '16px', margin: 0 }}>*All packages include advanced cyber security hardening.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-md-6" data-aos="zoom-in">
      <div className="about-client-box info-box shadow-box">
        <Image src="/assets/images/bg1.png" alt="BG" className="bg-img" width={600} height={600} />
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
