import React from 'react';
import './assets/css/App.css';
import FilterBar from './components/filter/FilterBar';
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
          <FilterBar />
        </Route>

    </Router>
  </main>
  );
}

export default App;
