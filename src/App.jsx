import { useState } from 'react';
import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';
import PinControl from './PinControl';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PinControl id="A0" />
      <PinControl id="D0" />
      <PinControl id="D1" />
      <PinControl id="D2" />
      <PinControl id="D3" />
      <PinControl id="D4" />
      <PinControl id="D5" />
      <PinControl id="D6" />
      <PinControl id="D7" />
      <PinControl id="D8" />
    </div>
  );
}

export default App;
