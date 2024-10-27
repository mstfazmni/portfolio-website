import './App.css';
import React from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import CatchTheBug from './components/CatchTheBug';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  return (
    <div className="app-container">
      {/* Header component */}
      <section id="header">
          <Header/>
      </section>
      {/* About component */}
      <section id="about">
          <About/>
      </section>
      {/* CatchTheBug component */}
      <section id="catch-the-bug">
          <CatchTheBug/>
      </section>
      {/* Projects component */}
      <section id="projects">
        <Projects/>
      </section>
      {/* Footer component */}
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;
