import { useState, useEffect } from 'react';
import './AnalogIn.css';
import { humanReadout } from './human-numbers';

function useRandomReading({ min = 0, max = 100 }) {
  const [analogIn, setAnalogIn] = useState(0);
  setTimeout(() => {
    setAnalogIn(Math.random() * (max - min) - min);
  }, 1000);
  useEffect(() => {
    // Update count to be 5 after timeout is scheduled
    setTimeout(() => {
      setAnalogIn(Math.random() * (max - min) - min);
    }, 1000);
  }, []);
  return [analogIn];
}

function AnalogIn({ id }) {
  const [reading] = useRandomReading({ min: -3.3, max: 3.3 });
  return (
    <div className="AnalogIn">
      <h4 style={{ display: 'inline-block' }}>Analog In({id})</h4>
      <input type="range" min="0" max="3.3" step="0.001" value={reading} />
      {humanReadout({ value: reading, unit: 'V' })}
    </div>
  );
}

export default AnalogIn;
