import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../pages/HomePage.css';

const HomePage = () => {
    return (
      <div className="content">
        <div className="page-container">
          <div>
            <Header/>
          </div>
        <div className="hero-section">
  
          <img alt="Vivekanand College Campus" className="hero-banner-image" src="http://vck.codewonders.in/assets/college-banner-Cz0xylpt.png"/>
          <div className="hero-overlay-text"> 
            <h1>Welcome to Vivekanand College!</h1>
            <p>Your journey to excellence starts here.</p>
            <a href="AdmissionsPage"> <button className="call-to-action" >Apply Now!</button></a>
          </div>
         </div> 

        <div>
          <p><strong>"Vivekanand College"</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
          <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
        </div> 
        <h2>Why Choose Vivekanand College?</h2>
        <ul className="ul">
          <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
          <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
          <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
        </ul>
        <h2>Campus Life &amp; Facilities</h2>
        <div>
          <img className="image-gallery" src="/Images/vck.jpeg"/>
          <img className="image-gallery" src="/Images/vckcampus.jpg"/>
        </div>
        <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your
          learning experience and personal growth.</p>
        <div>
        <p>Ready to start your journey with us?</p>
        <Link className="btn" to="/coursespage">Explore Courses</Link>
        </div>
        <div>
            <Footer/>
        </div>
        </div>
      </div>
      )
}

export default HomePage;