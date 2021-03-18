import React from 'react';
import './App.scss';
import AppProvider from './context/Provider';
import AppChild from './components/AppChild';
import UserList from './components/UserList';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppChild />

        <UserList />
      </div>
    </AppProvider>
  );
}

export default App;
