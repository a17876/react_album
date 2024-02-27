import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export default function Album({ albums }) {
  return (
    <>
      <img src={albums[0].coverImg} alt="beatles_abbey_road" />
      <ol>
        {albums[0].tracks.map((song) => (
          <li>
            {song} <FaPlayCircle aria-hidden="true" />{" "}
          </li>
        ))}
      </ol>
    </>
  );
}
