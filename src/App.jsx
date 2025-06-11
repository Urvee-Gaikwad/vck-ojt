import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";


const App = () => {
  return (
    <>
      <Router>
        <div className="main-layout">
          <div className="content">
          <Routes>
            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/aboutpage" element={<AboutPage/>}/>
            <Route path="/coursespage" element={<CoursesPage/>}/>
            <Route path="/contactpage" element={<ContactPage/>}/>
            <Route path="/admissionspage" element={<AdmissionsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          </div>
          <ChatbotComponent/>
        </div>
      </Router>
    </>  
  )
}

export default App;