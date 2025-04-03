import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app">
      <h1>シンプルReactアプリ</h1>
      <div className="counter">
        <h2>カウンター: {count}</h2>
        <button onClick={incrementCount}>カウントアップ</button>
      </div>
    </div>
  );
}

export default App;