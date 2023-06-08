import React, { useState } from 'react';

const TypingBox = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
};

export default TypingBox;
