import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const SongList = ({ songs, handleDelete }) => {
  console.log("kom ik 2 keer?");
  return (
    <tbody>
      {songs.map((song) => (
        <tr className="song-body" key={song.id}>
          <td className="SongRow-item">{song.title}</td>
          <td className="SongRow-item">{song.artist}</td>
          <td className="SongRow-item">{song.genre}</td>
          <td className="SongRow-item">{song.rating}</td>
          <td className="SongRow-item">
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(song.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SongList;
