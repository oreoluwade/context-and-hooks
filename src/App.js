import React from 'react';
import './App.css';
import AppProvider from './context/Provider';
import AppChild from './AppChild';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppChild />
      </div>
    </AppProvider>
  );
}

export default App;
