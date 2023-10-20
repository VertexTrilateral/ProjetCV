import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AboutMe from './components/About/About_Me';
import Contact from './components/Contact/Contact';
import SkillsAndProjects from './components/Skills_Projects/SkillsAndProjects';
import Education from './components/Education/Education';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <div id="CV">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skillsandprojects" element={<SkillsAndProjects />} />
              <Route path="/education" element={<Education />} />
            </Routes>
            </div>
        <div className="Footer">
          <Footer />
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
