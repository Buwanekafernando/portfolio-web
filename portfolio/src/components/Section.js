import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
