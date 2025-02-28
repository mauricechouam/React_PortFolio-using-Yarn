import React, { useState } from 'react';

const MySimpleWebpage = () => {
  // State to manage the sections and their content
  const [sections, setSections] = useState([
    { id: 'home', content: 'This is the home section of my webpage.', background: 'white' },
    { id: 'about', content: 'Learn more about me in this section.', background: 'white' },
    { id: 'contact', content: 'Get in touch with me through this section.', background: 'white' }
  ]);

  // Function to change the text of a section
  const changeText = (id) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content: `This is the updated content for the ${id} section!` } : section
    ));
  };

  // Function to change the background color of a section
  const changeBackgroundColor = (id) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, background: section.background === 'red' ? 'white' : 'red' } : section
    ));
  };

  // Function to add a new section dynamically
  const addNewSection = () => {
    const newSection = {
      id: `new${sections.length + 1}`,
      content: 'This is a dynamically added section!',
      background: 'white'
    };
    setSections([...sections, newSection]);
  };

  // Function to handle animations (simulate by changing the content slightly)
  const animateText = (id) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content: `Animating the ${id} section text!` } : section
    ));
    setTimeout(() => {
      setSections(sections.map(section => 
        section.id === id ? { ...section, content: `This is the updated content for the ${id} section!` } : section
      ));
    }, 1000); // Revert after 1 second
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f9' }}>
      {/* Header Section */}
      <header style={{ backgroundColor: '#4CAF50', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to My Simple Webpage</h1>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Home</a>
            </li>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>About</a>
            </li>
            <li style={{ display: 'inline', margin: '0 15px' }}>
              <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main style={{ marginTop: '30px' }}>
        {sections.map((section, index) => (
          <section key={section.id} style={{
            backgroundColor: section.background,
            padding: '20px',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            animation: 'fadeIn 1s forwards'
          }}>
            <h2 style={{ color: '#388e3c', fontSize: '1.8rem' }}>{section.id.charAt(0).toUpperCase() + section.id.slice(1)}</h2>
            <p style={{ fontSize: '1rem', color: '#333' }}>{section.content}</p>
            <button onClick={() => changeText(section.id)} style={buttonStyle}>Change {section.id} Text</button>
            <button onClick={() => changeBackgroundColor(section.id)} style={buttonStyle}>Change {section.id} Background</button>
            <button onClick={() => animateText(section.id)} style={buttonStyle}>Animate {section.id} Text</button>
          </section>
        ))}

        {/* Button to add a new section */}
        <button onClick={addNewSection} style={buttonStyle}>Add New Section</button>
      </main>

      {/* Footer Section */}
      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#4CAF50', color: 'white', marginTop: '30px' }}>
        <p>&copy; 2025 My Simple Webpage</p>
      </footer>
    </div>
  );
};

// Styles for the buttons
const buttonStyle = {
  margin: '10px 0',
  padding: '10px 20px',
  fontSize: '1rem',
  cursor: 'pointer',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: 'white',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease'
};

export default MySimpleWebpage;
