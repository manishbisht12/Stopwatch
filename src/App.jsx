import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);  
  const id = useRef(null);  


  function handleTime() {
    
    if (id.current) return;

    
    id.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }


  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  
  function handlePause() {
    clearInterval(id.current);
    id.current = null;  
  }

  function handleReset() {
    clearInterval(id.current);
    setTime(0);  
    id.current = null;  
  }

  return (
    <div className="App">
      <h1>{time}</h1>

      <button onClick={handleTime}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
