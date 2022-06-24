import { useState, useEffect } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import PwmOut from './PwmOut';
import AnalogIn from './AnalogIn';

function App() {
  return (
    <div className="App">
      <AnalogIn id="A0" pinValue={analogIn} />
      <PwmOut id="D0" />
      <PwmOut id="D1" />
      <PwmOut id="D2" />
      <PwmOut id="D3" />
      <PwmOut id="D4" />
      <PwmOut id="D5" />
      <PwmOut id="D6" />
      <PwmOut id="D7" />
      <PwmOut id="D8" />
    </div>
  );
}

export default App;
