import "../styles/Projects.css";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Projects() {
    return (
      <div className="projects">
          <div>
              <span className = 'projects-title'>Projects</span>
          </div>
          <div className='projects-content-section'>
              <div className='projects-content-card'>
                  <img src = 'https://via.placeholder.com/300x180/100' alt = 'project' />
                  <span className = 'projects-content-card-title'>Project 1</span>
                  <span className = 'projects-content-card-description'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</span>
                  <div className='projects-content-card-skills'>
                      <span className = 'projects-content-card-skill'>react</span>
                      <span className = 'projects-content-card-skill'>redux</span>
                      <span className = 'projects-content-card-skill'>axios</span>
                  </div>
                  <div className='projects-content-card-links'>
                      <Router>
                          <Link to="https://github.com/egekulahli1" target="_blank">
                              <span>Github</span>
                          </Link>
                          <Link to="https://github.com/egekulahli1" target="_blank">
                              <span>View Site</span>
                          </Link>
                      </Router>

                  </div>
              </div>
              <div className='projects-content-card'>
              <img src = 'https://via.placeholder.com/300x180/100' alt = 'project' />
                  <span className = 'projects-content-card-title'>Project 2</span>
                  <span className = 'projects-content-card-description'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</span>
                  <div className='projects-content-card-skills'>
                      <span className = 'projects-content-card-skill'>react</span>
                      <span className = 'projects-content-card-skill'>redux</span>
                      <span className = 'projects-content-card-skill'>axios</span>
                  </div>
                  <div className='projects-content-card-links'>
                      <Router>
                          <Link to="https://github.com/egekulahli1" target="_blank">
                          <span>Github</span>
                          </Link>
                          <Link to="https://github.com/egekulahli1" target="_blank">
                          <span>View Site</span>
                          </Link>
                      </Router>

                  </div>
              </div>
              <div className='projects-content-card'>
              <img src = 'https://via.placeholder.com/300x180/100' alt = 'project' />
                  <span className = 'projects-content-card-title'>Project 3</span>
                  <span className = 'projects-content-card-description'>A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</span>
                  <div className='projects-content-card-skills'>
                      <span className = 'projects-content-card-skill'>react</span>
                      <span className = 'projects-content-card-skill'>redux</span>
                      <span className = 'projects-content-card-skill'>axios</span>
                  </div>
                  <div className='projects-content-card-links'>
                      <Router>
                          <Link to="https://github.com/egekulahli1" target="_blank">
                          <span>Github</span>
                          </Link>
                          <Link to="https://github.com/egekulahli1" target="_blank">
                          <span>View Site</span>
                          </Link>
                      </Router>

                  </div>
              </div>
          </div>
          <div className="pink-line">

          </div>
      </div>
    );
  }

export default Projects;