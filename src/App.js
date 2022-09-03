import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Main from './pages/Main'
import Share from './pages/Share'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Main />}></Route>
          <Route exact path='/share' element={< Share />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;