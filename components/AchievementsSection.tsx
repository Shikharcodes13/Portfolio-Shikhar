'use client'

import React from 'react';
import { motion } from 'framer-motion';

const AchievementsSection: React.FC = () => {
  const techAchievements = [

    {
      id: 2,
      title: 'Appian AI Application Challenge @ IIT-Madras, Runner up',
      organization: 'IIT-Madras',
      location: 'Chennai',
      date: 'Jan 2024',
      category: 'AI Challenge',
      description: 'Created a Business Automation AI powered Application for a problem statement focusing on education of University of South Florida, and won a prize of 30K INR.',
      skills: ['AI/ML', 'Business Automation', 'Appian', 'Problem Solving', 'Innovation']
    },


  ];

  const publicSpeaking = [
    {
      id: 1,
      title: 'University Debate Competition - 1st Position',
      organization: 'GGSIPU',
      location: 'New Delhi',
      date: '2022',
      category: 'University Competition',
      description: 'Secured first position in university-level debate competition, demonstrating exceptional oratory skills and critical thinking.',
      skills: ['Debate', 'Public Speaking', 'Critical Thinking', 'Oratory Skills']
    },

    {
      id: 3,
      title: 'Event Host at Multiple Occasions',
      organization: 'Various Organizations',
      location: 'Delhi',
      date: '2020-2024',
      category: 'Event Hosting',
      description: 'Successfully hosted multiple events, demonstrating strong communication skills and ability to engage diverse audiences.',
      skills: ['Event Hosting', 'Communication', 'Audience Engagement', 'Public Speaking']
    }
  ];

  const schoolWinnings = [
    {
      id: 1,
      title: 'Science Olympiad',
      organization: 'Modern Academy School',
      location: 'Ghaziabad',
      date: '',
      category: 'Academic',
      description: 'Won first place in school science olympiad for innovative project.',
      skills: ['Science', 'Innovation', 'Research', 'Presentation']
    },
    {
      id: 2,
      title: 'Debate Competition',
      organization: 'Inter-School Debate',
      location: 'Ghaziabad',
      date: '',
      category: 'Debate',
      description: 'Secured second place in inter-school debate competition.',
      skills: ['Debate', 'Public Speaking', 'Critical Thinking', 'Communication']
    },
    {
      id: 3,
      title: 'Mathematics Competition',
      organization: 'School Level',
      location: 'Ghaziabad',
      date: '',
      category: 'Mathematics',
      description: 'Achieved distinction in school mathematics competition.',
      skills: ['Mathematics', 'Problem Solving', 'Analytical Thinking']
    }
  ];



  return (
    <div className="achievements-card">
      <h2 className="achievements-title">Achievements</h2>
      
      {/* Tech-based Achievements */}
      <div className="achievement-category">
        <h3 className="category-title">Tech-based Achievements</h3>
        <div className="achievement-timeline-center">
          <motion.div 
            className="timeline-center-line"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>
          
          {techAchievements.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item-center ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ 
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -100 : 100
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                x: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.4,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="timeline-marker-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.4 + 0.3,
                  ease: "easeOut"
                }}
              >
                <div className="achievement-icon">🏆</div>
              </motion.div>
              <motion.div 
                className="timeline-content-center"
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{ 
                  opacity: 1,
                  scale: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.4 + 0.2,
                  ease: "easeOut"
                }}
              >
                <div className="achievement-header">
                  <h3>{item.title}</h3>
                  <span className="organization">{item.organization}</span>
                  <span className="location">{item.location}</span>
                  <span className="date">{item.date}</span>
                  <span className="category-badge">{item.category}</span>
                </div>
                <p className="achievement-description">
                  {item.description}
                </p>
                <div className="achievement-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="achievement-skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4,
                        delay: index * 0.4 + 0.4 + skillIndex * 0.1,
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
      </div>

      

      {/* Public Speaking */}
      <div className="achievement-category">
        <h3 className="category-title">Public Speaking</h3>
        <div className="achievement-timeline-center">
          <motion.div 
            className="timeline-center-line"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>
          
          {publicSpeaking.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item-center ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ 
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -100 : 100
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                x: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.4,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="timeline-marker-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.4 + 0.3,
                  ease: "easeOut"
                }}
              >
                <div className="achievement-icon">🎤</div>
              </motion.div>
              <motion.div 
                className="timeline-content-center"
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{ 
                  opacity: 1,
                  scale: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.4 + 0.2,
                  ease: "easeOut"
                }}
              >
                <div className="achievement-header">
                  <h3>{item.title}</h3>
                  <span className="organization">{item.organization}</span>
                  <span className="location">{item.location}</span>
                  <span className="date">{item.date}</span>
                  <span className="category-badge">{item.category}</span>
                </div>
                <p className="achievement-description">
                  {item.description}
                </p>
                <div className="achievement-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="achievement-skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4,
                        delay: index * 0.4 + 0.4 + skillIndex * 0.1,
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
      </div>

      {/* School Level Winnings */}
      <div className="achievement-category">
        <h3 className="category-title">School Level Winnings</h3>
        <div className="achievement-timeline-center">
          <motion.div 
            className="timeline-center-line"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>
          
          {schoolWinnings.map((item, index) => (
            <motion.div
              key={item.id}
              className={`timeline-item-center ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ 
                opacity: 0,
                y: 50,
                x: index % 2 === 0 ? -100 : 100
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                x: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.4,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="timeline-marker-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.4 + 0.3,
                  ease: "easeOut"
                }}
              >
                <div className="achievement-icon">🏅</div>
              </motion.div>
              <motion.div 
                className="timeline-content-center"
                initial={{ 
                  opacity: 0,
                  scale: 0.8,
                  x: index % 2 === 0 ? -50 : 50
                }}
                whileInView={{ 
                  opacity: 1,
                  scale: 1,
                  x: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.4 + 0.2,
                  ease: "easeOut"
                }}
              >
                <div className="achievement-header">
                  <h3>{item.title}</h3>
                  <span className="organization">{item.organization}</span>
                  <span className="location">{item.location}</span>
                  <span className="date">{item.date}</span>
                  <span className="category-badge">{item.category}</span>
                </div>
                <p className="achievement-description">
                  {item.description}
                </p>
                <div className="achievement-skills">
                  {item.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="achievement-skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4,
                        delay: index * 0.4 + 0.4 + skillIndex * 0.1,
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
      </div>
    </div>
  );
};

export default AchievementsSection; 