import React, { useState, useEffect } from 'react';
import './App.css';
import MusicArtists from './MusicArtists';
import Modal from './components/Modal';
import Music from './components/Music';

function App() {
  useEffect(() => {
    const list = JSON.parse(JSON.stringify(MusicArtists));
    localStorage.setItem(0, JSON.stringify(MusicArtists));

    // localStorage.setItem(0, MusicArtists.artist_list);
    console.log(localStorage.getItem(0));
    console.log(list);

    // useArtists(list);
  }, [])

  // [artists, useArtists] = useState(localStorage.getItem(0));
  const [artists, useArtists] = useState({});


  const handelForm = event => {
    event.preventDefault();
    let name = event.target[0].value;

    // useArtists(list);

    console.log(name);
  }

  return (
    <div>
      <form onSubmit={handelForm}>
        <input type="text" placeholder="Search by artist name" />

        <button type="submit">Press</button>
      </form>



    </div>
  );
}

export default App;