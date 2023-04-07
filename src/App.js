import React, { useState } from 'react';
import './App.css';
import { Keyboard } from './components/Keyboard';
import { Piano } from './components/Piano';

function App() {
  const [volume, setVolume] = useState(0.5);
  const [showKeys, setShowKeys] = useState(false);

  const handleShowKeysChange = (e) => {
    setShowKeys(e.target.checked);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Virtual PIANO</h2>
        <div className="column volume-slider">
          <span>Volume</span><input type="range" min="0" max="1" value={volume} step="any" onChange={(e) => setVolume(e.target.value)}></input>
        </div>
        <div className="column keys-checkbox">
          <span>Show Keys</span><input type="checkbox" checked={showKeys} onChange={handleShowKeysChange}></input>
        </div>
      </header>
      <Keyboard />
      <Piano volume={volume} showKeys={showKeys}/>
    </div>
  );
}

export default App;