import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new React 18 import
import App from './App';
import './styles/App.css';  // Import global styles

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
