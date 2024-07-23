import React, { useState } from 'react';

const Co = () => {
  const [kg, setKg] = useState('');
  const [pounds, setPounds] = useState('');
  const [grams, setGrams] = useState('');

  const handleKgChange = (value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setKg(value);
      setPounds((numericValue * 2.20462).toString());
      setGrams((numericValue * 1000).toString());
    } else {
      setKg('');
      setPounds('');
      setGrams('');
    }
  };

  const handlePoundsChange = (value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setPounds(value);
      setKg((numericValue / 2.20462).toString());
      setGrams(((numericValue / 2.20462) * 1000).toString());
    } else {
      setKg('');
      setPounds('');
      setGrams('');
    }
  };

  const handleGramsChange = (value) => {
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      setGrams(value);
      setKg((numericValue / 1000).toString());
      setPounds((numericValue / 1000 * 2.20462).toString());
    } else {
      setKg('');
      setPounds('');
      setGrams('');
    }
  };

  return (
    <div className="input">
      <b>KG: </b>
      <input
        type="text"B 
        value={kg}
        onChange={(e) => handleKgChange(e.target.value)}
        id="text-box"
      />
      <p>{'\t'} = </p>
      <b>Pounds: </b>
      <input
        type="text"
        value={pounds}
        onChange={(e) => handlePoundsChange(e.target.value)}
        id="text-box"
      />
      <p> = </p>
      <b>Grams: </b>
      <input
        type="text"
        value={grams}
        onChange={(e) => handleGramsChange(e.target.value)}
        id="text-box"
      />
    </div>
  );
};

export default Co;
