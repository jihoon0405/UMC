import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h2 id="number">{count}</h2>
      <div>
        <button id="increase" onClick={() => setCount(count + 1)}>+1</button>
        <button id="decrease" onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
}

export default App;
