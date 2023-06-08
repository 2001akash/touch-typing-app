import React from 'react';
import './styles.css'; // Import the style.css file

import TypingBox from './TypingBox';
import NextKeys from './NextKeys';
import Results from './Results';

const App = () => {
  return (
    <div className="touch-typing-container"> {/* Apply the touch-typing-container class */}
      <TypingBox />
      <NextKeys />
      <Results />
    </div>
  );
};

export default App;
