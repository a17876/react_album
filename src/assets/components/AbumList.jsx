
export default function AlbumList({ albums, updateClicked }) {


  return (
    <>
      <ul>
        {albums.map((album) => (
          <div
            className="album"
            key={album.id}
            onClick={() => updateClicked(album.id)}
          >
            <div className="round-image">
              <img className="small-image" src={album.coverImg} />
            </div>
            <p>{album.name}</p>
          </div>
        ))}
      </ul>
    </>
  );
}

