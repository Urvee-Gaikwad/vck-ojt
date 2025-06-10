import React from "react";
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import '../pages/AboutPage.css';
const AboutPage = () => {
    return (
      <div>
        <div className="content">
          <div className="page-container">
        <div>
            <Header/>
        </div>
        <h1 id="pp">About Vivekanand College</h1>
        <p className="p">
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in <strong>[Year of Establishment, e.g., 1980]</strong>. Located in the bustling heart of <em>Chembur, Mumbai</em>, our college has consistently upheld the highest standards of academic rigor and ethical values.
        </p>
        <p className="p">
          Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility.
        </p>
        <h2 className="h2">Our Mission</h2>
        <ul className="ul">

          <li>Provide high-quality, accessible education across various disciplines.</li>
          <li>Foster research, innovation, and creativity among students and faculty.</li>
          <li>Cultivate a diverse and inclusive learning environment.</li>
          <li>Instill strong ethical values and leadership qualities.</li>
        </ul>
        <h2 className="h2">Our Values</h2>
        <p>
          Integrity, Excellence, Innovation, Community, and Respect are our guiding principles. We encourage open dialogue, curiosity, and lifelong learning.
        </p>
        <h2>Our History</h2>
        <p>
          Our journey began with a vision to make quality education available to all, and we
          continue that legacy today. From humble beginnings to becoming one of the most respected
          institutions in the region, our milestones reflect our dedication to excellence and
          community.       
        </p>
        <div>
            <Footer/>
        </div>
        </div>
        </div>
      </div>
      )
}      

export default AboutPage;