import React, { useState, useEffect } from 'react';
import './App.css';
import Genre from './components/Genre';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {!data ? 'Loading...' : data}
        </p>
        <Genre />
      </header>
    </div>
  );
}

export default App;
