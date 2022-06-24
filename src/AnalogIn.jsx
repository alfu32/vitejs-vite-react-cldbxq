import { useState, useEffect, useRef } from 'react';
import './AnalogIn.css';
import { humanReadout, human } from './human-numbers';

function random({ min = 0, max = 100 }) {
  return Math.random() * (max - min) - min;
}
function randomSeries({ start = 0, min = 0, max = 100, granularity = 0.01 }) {
  let val = start + (Math.random() * 2 * max - 2 * min) * granularity;
  while (val >= max && val <= min) {
    val = start + (Math.random() * 2 * max - 2 * min) * granularity;
  }
  return val;
}

function useRandomReading({ min = 0, max = 100 }) {
  const [analogIn, setAnalogIn] = useState(0);
  setTimeout(() => {
    setAnalogIn(random({ min, max }));
  }, 1000);
  useEffect(() => {
    // Update count to be 5 after timeout is scheduled
    setTimeout(() => {
      setAnalogIn(random({ min, max }));
    }, 1000);
  }, []);
  return [analogIn];
}

function delayed(cb, delay) {
  return Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cb());
    });
  });
}

function usePoll(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay != null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
}

function AnalogIn({ id }) {
  const [reading, setReading] = useState(0);
  usePoll(() => {
    setReading(randomSeries({ min: 0, max: 3.3, granularity: 0.001 }));
  }, 100);
  return (
    <div className="AnalogIn">
      <h4 style={{ display: 'inline-block' }}>Analog In({id})</h4>
      <input type="range" min="0" max="3.3" step="0.001" value={reading} />
      {human({ value: reading, unit: 'V' })}
    </div>
  );
}

export default AnalogIn;
