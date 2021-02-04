import React from 'react';
// import styles
import './styles/app.scss';
//adding componrnts
import Player from './components/Player';
import Song from './components/Song';

function App() {
  return (
    <div>
      <Song />
      <Player />
    </div>
  );
}

export default App;
