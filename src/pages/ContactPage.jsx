import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../pages/ContactPage.css';

const ContactPage = () => {
    return (
      <div className="content">
        <div className="page-container">
        <div>
            <Header/>
        </div>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether it’s about admissions, programs, or support, reach out!</p>

        <h2>General Enquiries</h2>
        <p><strong>Vivekanand College Main Campus</strong></p>
        <p>Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071</p>
        <p>Phone: <strong>+91 12345 67890</strong></p>
        <p>Email: <strong>info@vivekanandcollege.edu</strong></p>
        <p>Office Hours: Mon - Fri, 9:00 AM - 5:00 PM IST</p>

        <h2>Admissions Office</h2>
        <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
        <p>Phone: +91 98765 43210</p>
        <p>Email: admissions@vivekanandcollege.edu</p>

        <h2>Student Support Services</h2>
        <p>For current student support, academic advising, or general assistance:</p>
        <p>Phone: +91 87654 32109</p>
        <p>Email: studentsupport@vivekanandcollege.edu</p>

        <h2>Find Us on the Map</h2>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Google Maps</a>

        <h2>Send Us a Message</h2>
        <p>[A contact form with fields for Name, Email, Subject, and Message can be added here.]</p>
        <div>
            <Footer/>
        </div>
        </div>
      </div>
      )
}

export default ContactPage;