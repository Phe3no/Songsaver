import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { songDeleted } from "./songsSlice";
import { selectAllSongs } from "./songsSlice";

export const SongList = () => {
  const songs = useSelector(selectAllSongs);

  const dispatch = useDispatch();

  const renderedSongs = songs.map((song) => {
    return (
      <tr className="song-body" key={song.id}>
        <td className="SongRow-item">{song.title}</td>
        <td className="SongRow-item">{song.artist}</td>
        <td className="SongRow-item">{song.genre}</td>
        <td className="SongRow-item">{song.rating}</td>
        <td className="SongRow-item">
          <FaTrashAlt
            role="button"
            tabIndex="0"
            onClick={() => dispatch(songDeleted(song.id))}
          />
        </td>
      </tr>
    );
  });

  return <tbody>{renderedSongs}</tbody>;
};
