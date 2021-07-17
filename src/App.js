import React from 'react';
import './assets/css/App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/layout/Navbar';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CharacterDetails from './components/details/CharacterDetails';

function App() {
  return (
  <main>
    <Router>
        <Navbar />
        
        <Route path="/:id">
            <CharacterDetails />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

    </Router>
  </main>
  );
}

export default App;
