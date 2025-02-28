import React from 'react';
import './styles/App.css';  // Importing global styles

import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';  // Import Footer component

const App = () => {
  return (
    <div>
      <Header />
      <div className="container"> {/* Wrap content in container */}
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
        </section>
        <About />
        <Projects />  {/* Projects section */}
        <Contact />
      </div>
      <Footer />  {/* Footer section */}
    </div>
  );
};

export default App;
