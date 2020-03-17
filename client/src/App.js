import React from 'react';
import { BroserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './wrappers/Header';
import Content from './content/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Content />
        </main>
      </div>
    </Router>
  );
}

export default App;
