import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >

      <div className="icon-container">
        <img src={icon} alt={title} />
      </div>
      <div className="footer-content">
      <h4 className="footer-title">{title}</h4>
      <p className="footer-des">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
