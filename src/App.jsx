import albums from './data.js'
import './App.css'
import AlbumList from './assets/components/AbumList'
import AlbumPlayer from './assets/components/AlbumPlayer.jsx'
import { useState } from "react";

function App() {
  const [albumId, setAlbumId] = useState(0);

  function updateClicked(id) {
    setAlbumId(id);
    console.log(id);
  }

  return (
    <>
      <AlbumPlayer album={albums[albumId]}></AlbumPlayer>
      <AlbumList albums={albums} albumId={albumId} updateClicked={updateClicked}></AlbumList>
    </>
  )
}

export default App
