import React, { Component } from 'react';
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registro: false
    }
  }
  registrarse = (e) => {
    e.preventDefault();
    this.setState({
      registro: !this.state.registro
    })
  }
  render() {
    return (
      <HashRouter basename='/'>
          <div>
            <Header />
            <Router basename={process.env.PUBLIC_URL}>
              <Route 
                exact 
                path="/" 
                component={(props) => <Home 
                  {...props} 
                  registrarse={this.registrarse} 
                  registro={this.state.registro}
                />}
              />
              <Route 
                exact 
                path="/dashboard" 
                component={(props) => <Dashboard
                  {...props}
                />}
              />
            </Router>
            <Footer />
          </div>
      </HashRouter>
    );
  }
}

export default App;
