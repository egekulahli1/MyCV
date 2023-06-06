import "../styles/Footer.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-title">
        <span>Let's work together on your next product.</span>
      </div>
      <div className="footer-contact">
        <span>
          👉<span className="footer-contact-mail"> egekulahli@gmail.com</span>
        </span>
        <div className="footer-social-media-links">
          <Router>
            <Link
              id="personalblog"
              to="https://egekulahli1.github.io/MyBlog/"
              target="_blank"
            >
              <span>Personal Blog</span>
            </Link>
            <Link
              id="github"
              to="https://github.com/egekulahli1/MyCV"
              target="_blank"
            >
              <span>Github</span>
            </Link>
            <Link
              id="linkedin"
              to="https://www.linkedin.com/in/egekulahli/"
              target="_blank"
            >
              <span>Linkedin</span>
            </Link>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Footer;
