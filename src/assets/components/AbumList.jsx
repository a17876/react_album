import React from "react";

export default function AlbumList({ albums }) {
  return (
    <>
      <ul>
        {albums.map((album) => (
           <div className="album" key={album.id}>
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

// coverImg
// name
