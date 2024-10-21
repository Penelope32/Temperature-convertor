import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  // Convert Celsius to Fahrenheit
  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit(((parseFloat(value) * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((parseFloat(value) - 32) * 5) / 9).toFixed(2);
    }
  };

  return (
    <div className=".container">
      <div className="conversion-box">
        <h1>Convert units</h1>
        <div>
          <label>Celsius:</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
          />
        </div>
        <div>
          <label>Fahrenheit:</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;
