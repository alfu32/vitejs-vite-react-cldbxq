import { useState } from 'react';
import './PinControl.css';

function PinControl({ id }) {
  const [pinValue, setPinValue] = useState(10);
  function pinUiValueChanged(e) {
    console.log(e);
  }
  return (
    <div className="PinControl">
      <h4 style={{ display: 'inline-block' }}>Pin:{id}</h4>
      <input
        type="range"
        min="-100"
        max="100"
        step="10"
        defaultValue={pinValue}
        onChange={pinUiValueChanged}
      />
      {pinValue}
    </div>
  );
}

export default PinControl;
