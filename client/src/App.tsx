import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './well-call/nav/Nav';
import Header from './well-call/header/Header';
import Main from './well-call/main/Main';

function App() {
  // application logic begins here
  return (
      <div>
        <Header />
        <Nav />
        <Main />
      </div>
  );
}

export default App;
