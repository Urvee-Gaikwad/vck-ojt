import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmissionsPage from "./pages/AdmissionsPage";


const App = () => {
  return (
    <div id="root">
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/aboutpage" element={<AboutPage/>}/>
          <Route path="/coursespage" element={<CoursesPage/>}/>
          <Route path="/contactpage" element={<ContactPage/>}/>
          <Route path="/admissionspage" element={<AdmissionsPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;