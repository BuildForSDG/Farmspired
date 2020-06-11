/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable implicit-arrow-linebreak */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </Router>
  );
}
export default App;
