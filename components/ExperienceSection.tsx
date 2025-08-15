import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection: React.FC = () => {
  const timelineItems = [
    {
      id: 1,
      position: 'left',
      title: 'Quant and Gen AI lead',
      company: 'EVU',
      duration: '',
      location: '',
      description: 'Led GenAI efforts to build Twin Brain, an AI trading assistant that mirrors user behavior and supports real-time stock/options decisions. Developed a trainable agent, integrated broker APIs, and delivered secure portfolio tools',
      skills: ['GenAI', 'Trading Assistant', 'Broker APIs', 'Portfolio Tools']
    },
    {
      id: 2,
      position: 'right',
      title: 'Full Stack Development Intern',
      company: 'Arpanet',
      duration: '',
      location: '',
      description: 'Worked on the project for Red Tape, handled the CRM part and testing part, and developed the logic for the backend task along with the team. • Handling all over India outlet and controlling the flow from ASM/RSM to QC to IT',
      skills: ['Full Stack Development', 'CRM', 'Backend Logic', 'Testing']
    },
    {
      id: 3,
      position: 'left',
      title: 'AIML Development Intern',
      company: 'GSSIPU',
      duration: '',
      location: '',
      description: 'Worked under my college professor as a AIML intern and developed a Real time analysis of stocks based on opening and closing price of it.',
      skills: ['AIML', 'Real-time Analysis', 'Stock Analysis', 'Data Processing']
    },
    {
      id: 4,
      position: 'right',
      title: 'AIML Extern',
      company: 'Sopra Steria',
      duration: '',
      location: '',
      description: 'Developed and optimized different Machine learning models and will be working on dummy projects. Worked as a team and managed the data handling process such as EDA, data cleaning',
      skills: ['Machine Learning', 'Model Optimization', 'EDA', 'Data Cleaning']
    }
  ];

  return (
    <div className="experience-card">
      <h2 className="experience-title">Experience</h2>
      
      <div className="experience-timeline-center">
        {/* Central Timeline Line */}
        <motion.div 
          className="timeline-center-line"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>
        
        {/* Timeline Items */}
        {timelineItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`timeline-item-center ${item.position}`}
            initial={{ 
              opacity: 0,
              x: item.position === 'left' ? -100 : 100,
              y: 50
            }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="timeline-marker-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.3 + 0.4,
                ease: "easeOut"
              }}
            ></motion.div>
            <motion.div 
              className="timeline-content-center"
              initial={{ 
                opacity: 0,
                scale: 0.8,
                x: item.position === 'left' ? -50 : 50
              }}
              whileInView={{ 
                opacity: 1,
                scale: 1,
                x: 0
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.3 + 0.2,
                ease: "easeOut"
              }}
            >
              <div className="timeline-header">
                <h3>{item.title}</h3>
                <span className="company">{item.company}</span>
                <span className="duration">{item.duration}</span>
                <span className="location">{item.location}</span>
              </div>
              <p className="timeline-description">
                {item.description}
              </p>
              <div className="timeline-skills">
                {item.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4,
                      delay: index * 0.3 + 0.4 + skillIndex * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="experience-stats"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="stat-item">
          <div className="stat-number">4+</div>
          <div className="stat-label">Diverse Roles</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">1</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">10+</div>
          <div className="stat-label">Technologies</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceSection; 