
import { FaPlayCircle } from "react-icons/fa";

export default function AlbumPlayer({ album }) {
  return (
    <>
      <img src={album.coverImg} alt="beatles_abbey_road" />
      <ol>
        {album.tracks.map((song, index) => (
          <li className="songName" key={index}>
            {song} <FaPlayCircle />
          </li>
        ))}
      </ol>
    </>
  );
}
