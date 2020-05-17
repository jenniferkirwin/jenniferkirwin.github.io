import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Cards from './components/Cards';
import Test from './components/NavbarTest';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar></Navbar>
        <Header></Header>
        <Cards></Cards>
        <Footer></Footer>
      </Router>
            
    </div>
  );
}

export default App;
