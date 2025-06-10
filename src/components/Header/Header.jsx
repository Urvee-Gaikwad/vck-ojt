import { useState } from "react";
import './Header.css';
import {Link} from "react-router-dom";
import '../Header/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav className="navbar">
    <div className="logo">Vivekanand College</div>
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
    
    <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <Link to="/homepage">Home</Link>
      <Link to="/aboutpage">About</Link>
      <Link to="/coursespage">Courses</Link>
      <Link to="/contactpage">Contact</Link>
      <a href="AdmissionsPage"><button className="apply-btn">Apply Now</button></a>
    </div>
   </nav>
  );
};

export default Header;
