import React from 'react';
import Image from 'next/image';

const ProjectsSection: React.FC = () => {
  return (
    <div className="projects-card">
      <div className="projects-grid">
        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AI-Text to 3D</div>
          </div>
          <div className="project-content">
            <h3>AI-based Image to 3D Model Generator</h3>
            <p>Transform text prompts into stunning images and then into interactive 3D models using local LLM and Openfabric ecosystem. Features memory persistence, voice interaction, and seamless app chaining.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">LLaMA</span>
              <span className="tech-tag">Openfabric</span>
              <span className="tech-tag">Pinecone</span>
              <span className="tech-tag">Streamlit</span>
            </div>
            <div className="project-links">
                              <a href="https://github.com/Shikharcodes13/AI_based-Image_to_3D_model_generator-main" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
            </div>
          </div>
        </div>

                 <div className="project-item">
           <div className="project-image">
             <div className="project-placeholder">GenAI</div>
           </div>
           <div className="project-content">
             <h3>AI_Full-Stack_Project Generator</h3>
             <p>An AI-powered assistant that scaffolds full-stack JavaScript applications (Next.js + Express.js) through natural language commands.</p>
             <div className="project-tech">
               <span className="tech-tag">JavaScript</span>
               <span className="tech-tag">Next.js</span>
               <span className="tech-tag">Express.js</span>
               <span className="tech-tag">AI</span>
               <span className="tech-tag">Full-Stack</span>
             </div>
                           <div className="project-links">
                                <a href="https://github.com/Shikharcodes13/ai_full-stack_projectgenerator" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
              </div>
           </div>
         </div>

                 <div className="project-item">
           <div className="project-image">
             <div className="project-placeholder">Event Management</div>
           </div>
           <div className="project-content">
             <h3>Event management with Django</h3>
             <p>This project is a robust and secure backend service built using Django and Django REST Framework (DRF) for an Event Management System. The system allows users to create, join, and manage events. Key features include advanced querying, performance optimization, real-time features, JWT authentication, and geospatial capabilities using PostGIS.</p>
             <div className="project-tech">
               <span className="tech-tag">Python</span>
               <span className="tech-tag">Django</span>
               <span className="tech-tag">DRF</span>
               <span className="tech-tag">PostGIS</span>
               <span className="tech-tag">JWT</span>
             </div>
             <div className="project-links">
                               <a href="https://github.com/Shikharcodes13/eventmanagementdjango" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
             </div>
           </div>
         </div>

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">AI-CSV Modifier</div>
          </div>
          <div className="project-content">
            <h3>AI-enabled CSV Modifier</h3>
            <p>Intelligent CSV data modification tool powered by AI. Automatically processes and modifies CSV files with smart data transformation capabilities, featuring input/output directory management and comprehensive logging.</p>
            <div className="project-tech">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">AI</span>
              <span className="tech-tag">CSV Processing</span>
              <span className="tech-tag">Data Transformation</span>
              <span className="tech-tag">Logging</span>
            </div>
                         <div className="project-links">
                               <a href="https://github.com/Shikharcodes13/VomyChat" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
             </div>
          </div>
        </div>

        

        

        

        <div className="project-item">
          <div className="project-image">
            <div className="project-placeholder">Blockchian-NFT</div>
          </div>
          <div className="project-content">
            <h3>SafeCase - NFT Marketplace on Hive</h3>
            <p>Decentralized application (DApp) built on the Hive blockchain for secure, transparent, and tamper-proof management of digital assets. Features image upload, editing, versioning, and authentication with immutable blockchain history.</p>
            <div className="project-tech">
              <span className="tech-tag">JavaScript</span>
              <span className="tech-tag">HTML</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">Hive Blockchain</span>
              <span className="tech-tag">IPFS</span>
            </div>
                         <div className="project-links">
                               <a href="https://github.com/Shikharcodes13/nftmarketplaceonhive" target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
             </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ProjectsSection; 