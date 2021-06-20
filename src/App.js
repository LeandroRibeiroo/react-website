import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services'
import SignUp from './components/Pages/Signup';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/about" exact component={About} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
