import React from 'react';
import './App.css';
import MusicArtists from './MusicArtists';
import Modal from './components/Modal';

function App() {
  const toLocalStorage = event => {
    event.preventDefault();
    let l = event.target[0].value;
    console.log(l);
  }
  return (
    <div>
      <form onSubmit={toLocalStorage}>
        <input type="text" placeholder="Search by name" />

        <button type="submit">Press</button>
      </form>


    </div>
  );
}

export default App;