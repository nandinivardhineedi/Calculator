import React, { useState } from 'react';

const Co = () => {
  const [kg, setKg] = useState(0);
  const [pounds, setPounds] = useState(0);
  const [grams, setGrams] = useState(0);

  const handleKgChange = (value) => {
    if (!isNaN(value)) {
      setKg(value);
      setPounds((value * 2.20462));
      setGrams((value * 1000));
    } else {
      setKg(0);
      setPounds(0);
      setGrams(0);
    }
  };

  const handlePoundsChange = (value) => {
    if (!isNaN(value)) {
      setPounds(value);
      setKg((value / 2.20462));
      setGrams(((value / 2.20462) * 1000));
    } else {
      setKg(0);
      setPounds(0);
      setGrams(0);
    }
  };

  const handleGramsChange = (value) => {
    if (!isNaN(value)) {
      setGrams(value);
      setKg((value / 1000));
      setPounds((value / 1000 * 2.20462));
    } else {
      setKg(0);
      setPounds(0);
      setGrams(0);
    }
  };

  return (
    <div className="input">
      <b>KG: </b>
      <input
        type="number"
        value={kg}
        onChange={(e) => handleKgChange(e.target.value)}
        id="text-box"
      />
      <p> = </p>
      <b>Pounds: </b>
      <input
        type="number"
        value={pounds}
        onChange={(e) => handlePoundsChange(e.target.value)}
        id="text-box"
      />
      <p> = </p>
      <b>Grams: </b>
      <input
        type="number"
        value={grams}
        onChange={(e) => handleGramsChange(e.target.value)}
        id="text-box"
      />
    </div>
  );
};

export default Co;
