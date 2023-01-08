import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { songDeleted } from "./songsSlice";
import { selectAllSongs } from "./songsSlice";
import { ratings } from "../../constants/data";

export const SongList = () => {
  const { songs, filter } = useSelector(selectAllSongs);

  const dispatch = useDispatch();

  const renderedSongs = songs
    .filter((item) => {
      if (filter === "All") {
        return item;
      } else if (ratings.includes(filter - 0)) {
        return item.rating === filter - 0;
      } else {
        return item.genre === filter;
      }
    })
    .map((song) => {
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
