import React, { useState } from 'react';

const SimpleWebpage = () => {
  const [content, setContent] = useState('Welcome to my simple webpage!');

  const handleClick = () => {
    setContent('You clicked the button!');
  };

  return (
    <div>
      <h1>{content}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default SimpleWebpage;
