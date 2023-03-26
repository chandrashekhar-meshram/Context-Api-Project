import React from "react";
import "./style.css";
import {BroserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';

const App = ()=> {

  return (
    <Router>
    <div>
     
      <h1>App.js</h1>
      <Header />   
      <Routes>
        <Route path='/' element={  }  />
      </Routes>

    
    </div>
    </Router>
  );
}

export default App;
