import Image from '../images/image.png';
import Image1 from '../images/Screenshot 2025-08-24 112420.png';
import Image2 from '../images/Screenshot 2025-08-24 114913.png';
import './projects.css';

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className='des1'>Selected Projects</h2>
        <p>
          I do deep research before starting any project which gives an
          unfair advantage to bring the best results out for the team.
        </p>
      </div>

      {/* This grid will hold all the project cards */}
      <div className="projects-grid">

        {/* --- Project Card 1 --- */}
        <div className="project-card">
        
         <div className="image-container">
            <img src={Image} alt="Cicu Marketing Project" />
            <a href="https://github.com/rishabh-108272/Career-Counsellor-Chatbot/tree/main" target="_blank" rel="noopener noreferrer">
            <div className='view-study-overlay'>
                 View Project
            </div>
            </a>
          </div>
      
          <div className="project-content">
            <h2>Pathwise:AI Powered Career Counselor</h2>
            <h3>Technology</h3>
            <div className="tag-container">
              <div className="bttn1">RAG</div>
              <div className="bttn1">LLM Fine Tuning</div>
              <div className="bttn1">Django</div>
            </div>
          </div>
        </div>

        {/* --- Project Card 2 --- */}
        <div className="project-card">
          <div className="image-container">
            <img src={Image1} alt="Another Project" />
              <a href="https://github.com/rishabh-108272/Early-Identification-Of-Diabetic-Foot-Ulcer" target="_blank" rel="noopener noreferrer">
            <div className='view-study-overlay'>
                 View Project
            </div>
            </a>
          </div>
           <div className="project-content">
            <h2>Diabetic Foot Ulcer Early Identification</h2>
            <h3>Research</h3>
            <div className="tag-container">
              <div className="bttn1">Machine Learning</div>
              <div className="bttn1">Data Analytics</div>
               <div className="bttn1">Data Preprocessing</div>
            </div>
          </div>
        </div>

 {/* --- Project Card 3 --- */}
          <div className="project-card">
          <div className="image-container">
            <img src={Image2} alt="Another Project" />
             <a href="https://github.com/rishabh-108272/Biomarker_Classification_And_Prediction" target="_blank" rel="noopener noreferrer">
            <div className='view-study-overlay'>
                 View Project
            </div>
            </a>
          </div>
           <div className="project-content">
            <h2>Lung Cancer Classification Using Explainable AI</h2>
            <h3>Research</h3>
            <div className="tag-container">
              <div className="bttn1">Machine Learning</div>
              <div className="bttn1">Data Analytics</div>
               <div className="bttn1">Data Preprocessing</div>
               <div className="bttn1">XAI</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}