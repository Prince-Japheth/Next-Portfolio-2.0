"use client";

import { useState } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const firstSentence = (description.includes('.') ? description.split('.')[0] + '.' : description).trim();

  return (
    <div className="service-item">
      <h3>{title}</h3>
      {/* Desktop/Tablet: Show full description */}
      <p className="d-none d-md-block">{description}</p>
      {/* Mobile: Show truncated/expanded description with interactive toggle */}
      <p className="d-block d-md-none">
        {isExpanded ? description : firstSentence}{" "}
        {description !== firstSentence && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "var(--primary_color)", // Stays perfectly in sync with your theme
              fontSize: "inherit",
              fontWeight: "600",
              cursor: "pointer",
              marginLeft: "6px",
              display: "inline-block",
            }}
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ServiceItem;
