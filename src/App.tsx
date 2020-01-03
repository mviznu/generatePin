import React from 'react';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav/nav';

const App: React.FC = (props) => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header> 
      </div>
      <Nav />
    </Router>
  );
}

export default App;
