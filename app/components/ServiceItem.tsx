"use client";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div className="service-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceItem;
