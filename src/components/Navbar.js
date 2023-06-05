import '../styles/Navbar.css';

function Navbar() {
    return (
      <div className="Navbar">
          <span className='navbar-title'>Skills</span>
          <span className='navbar-title'>Projects</span>
          <button className='navbar-button'> <span className='navbar-button-title'>Hire Me</span></button>
      </div>
    );
  }

export default Navbar;