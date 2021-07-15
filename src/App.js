import React from 'react';
import './App.css';
import SearchBar from './components/search/SearchBar';
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
          <SearchBar />
        </Route>

    </Router>
  </main>
  );
}

export default App;
