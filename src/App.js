import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Main from './pages/Main'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Main />}></Route>
          <Route exact path='/share' element={< Main />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;