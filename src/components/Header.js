import '../styles/Header.css';
import ppege from '../images/pp/pp-ege.jpeg'; 
function Header() {
  return (
    <div>
    <div className='pink-line'></div>
    <div className="Header">
    
      <div className="header-content">
        <span className='header-name'>Ege Külahlı</span>
        <div className='header-head-section'>
        <span className='header-head'>Creative Thinker</span>
        <span className='header-head'>Minimalism Lover</span>
       
        </div>
        <span className='header-description'>
        Hi, I’m Ege. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.
        </span>
        <div className='header-buttons'>
          <button id = 'buttonheader' className='header-hire-me'> <span className='header-button-title'>Hire Me</span></button>
          <button id = 'buttonheader' className='header-github'> <span className='header-button-title'>Github</span></button>
          <button id = 'buttonheader' className='header-linkedin'> <span className='header-button-title'>Linkedin</span></button>
        </div>
      </div>
      <div className="header-image">
          <img src={ppege} alt="Ege Külahlı" />
      </div>
      
    </div>
    <div className="pink-line"></div>
    </div>
  );
}

export default Header;
