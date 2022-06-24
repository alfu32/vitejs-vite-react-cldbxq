import { useState } from 'react';
import './AnalogIn.css';

function AnalogIn({ id, pinValue }) {
  return (
    <div className="AnalogIn">
      <h4 style={{ display: 'inline-block' }}>Analog In({id})</h4>
      <input type="range" min="0" max="3.3" step="0.001" value={pinValue} />
      {pinValue.toFixed(2)}V
    </div>
  );
}

export default AnalogIn;
