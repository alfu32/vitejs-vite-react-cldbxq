import { useState } from 'react';
import './PwmOut.css';

function PwmOut({ id }) {
  const [pinValue, setPinValue] = useState(10);
  function pinUiValueChanged(e) {
    console.log(e.target.value);
    setPinValue(e.target.value);
  }
  return (
    <div className="PwmOut">
      <h4 style={{ display: 'inline-block' }}>PWM({id})</h4>
      <input
        type="range"
        min="-100"
        max="100"
        step="10"
        defaultValue={pinValue}
        onChange={pinUiValueChanged}
      />
      {pinValue}%
    </div>
  );
}

export default PwmOut;
