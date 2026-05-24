"use client";

import Image from "next/image";

interface SkillCardProps {
  iconSrc: string;
  iconAlt: string;
  delay: number;
  tooltipText: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ iconSrc, iconAlt, delay, tooltipText }) => {
  return (
    <div className="skill-card" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card-icon">
        <Image 
          src={iconSrc} 
          alt={iconAlt} 
          width={48} 
          height={48} 
          style={{ height: 'auto' }} 
        />
      </div> 
      <div className="tooltip shadow-box">{tooltipText}</div>
    </div>
  );
};

export default SkillCard;
