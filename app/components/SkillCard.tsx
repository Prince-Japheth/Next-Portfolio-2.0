"use client";

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
        <img src={iconSrc} alt={iconAlt} />
      </div>
      <div className="tooltip shadow-box">{tooltipText}</div>
    </div>
  );
};

export default SkillCard;
