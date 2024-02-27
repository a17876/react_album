import albums from './data.js'
import './App.css'
import AlbumList from './assets/components/AbumList'
import Album from './assets/components/Album.jsx'

function App() {
  return (
    <>
      <Album albums={albums}></Album>
      <AlbumList albums={albums}></AlbumList>
    </>
  )
}

export default App
