import React from 'react';

const AboutMeSection: React.FC = () => {
  return (
    <div className="about-me-card">
      {/* Left Section - Visual/Decorative */}
      <div className="about-me-visual">
        <div className="yellow-gradient-bg">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          <div className="abstract-shape shape-4"></div>
        </div>
      </div>
      
      {/* Right Section - Content */}
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <div className="about-me-text">
          <p className="about-me-paragraph">
            Hello from a 2025 grad. Not someone with X YOE but X times the impact.
          </p>
          <p className="about-me-paragraph">
            I am having an experience in Quant, Finance, AI, Full Stack development, Product Management and Data Science.
          </p>
          <p className="about-me-paragraph">
            At EVU, I led the GenAI wing, built Twin Brain, an AI trading assistant that learns your strategy, talks to Schwab/Robinhood APIs, and manages portfolios. Full-stack. End to end.
          </p>
          <p className="about-me-paragraph">
            At Sopra Steria, I worked with real-world ML models and messy data. At Arpanet, I handled Red Tape's backend + CRM logic, automated outlet flows, and managed servers like production-ready ops.
          </p>
          <p className="about-me-paragraph">
            I've built a text to 2D to 3D image generator.
          </p>
          <p className="about-me-paragraph">
            Runner-up at IIT-M's Appian AI Challenge (₹30K prize). I speak Python, Java, JS, React, Node, SQL, MongoDB and ship fast using CrewAI, Zapier, Cursor, and GCP.
          </p>
          <p className="about-me-paragraph">
            If you're hiring someone who builds real products and learns at startup speed, I'm ready to deliver.
          </p>
          <p className="about-me-paragraph">
            Let's talk.
          </p>
        </div>
        <div className="about-me-border-line"></div>
      </div>
    </div>
  );
};

export default AboutMeSection; 