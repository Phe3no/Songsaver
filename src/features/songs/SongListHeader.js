import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllSongs,
  songsSortedByTitle,
  songsSortedByArtist,
} from "./songsSlice";
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export const SongListHeader = () => {
  const dispatch = useDispatch();
  const { titleUp, artistUp } = useSelector(selectAllSongs);

  return (
    <thead className="song-header">
      <tr>
        <th className="SongRow-item">
          Title
          <button value="title" onClick={() => dispatch(songsSortedByTitle())}>
            {titleUp ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </th>
        <th className="SongRow-item">
          Artist
          <button
            value="artist"
            onClick={() => dispatch(songsSortedByArtist())}
          >
            {artistUp ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </th>
        <th className="SongRow-item">Genre</th>
        <th className="SongRow-item">Rating</th>
        <th className="SongRow-item">
          <FaTrashAlt />
        </th>
      </tr>
    </thead>
  );
};
