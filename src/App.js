import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';
import PortfolioItem from './contents/PortfolioItem';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/about" component={About}/>
          <Route path="/education" component={Education}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects} exact={true}/>
          <Route path="/projects/:id" component={PortfolioItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
