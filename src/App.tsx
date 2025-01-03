import React, { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from 'antd';

export const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="layout__content">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Button danger>Click here</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
