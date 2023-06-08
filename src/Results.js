import React, { useState } from 'react';

const Results = () => {
  const [numKeysPressed, setNumKeysPressed] = useState(0);
  const [numCorrectKeys, setNumCorrectKeys] = useState(0);

  const calculateAccuracy = () => {
    if (numKeysPressed === 0) {
      return 0;
    }

    return ((numCorrectKeys / numKeysPressed) * 100).toFixed(2);
  };

  const handleKeyPress = (e) => {
    setNumKeysPressed(numKeysPressed + 1);

    const nextKeys = 'asdfjkl;';
    const pressedKey = e.target.value.slice(-1); // Get the last pressed key

    if (nextKeys.includes(pressedKey)) {
      setNumCorrectKeys(numCorrectKeys + 1);
    }
  };

  return (
    <div>
      <p>Keys Pressed: {numKeysPressed}</p>
      <p>Accuracy: {calculateAccuracy()}%</p>
      <input type="text" onChange={handleKeyPress} />
    </div>
  );
};

export default Results;
