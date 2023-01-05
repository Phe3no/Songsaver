import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const SongListHeader = ({ sortSongs, artistUp, titleUp }) => {
  return (
    <thead className="song-header">
      <tr>
        <th className="SongRow-item">
          Title
          <button onClick={(e) => sortSongs(e)} value="title">
            {titleUp ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </th>
        <th className="SongRow-item">
          Artist
          <button onClick={(e) => sortSongs(e)} value="artist">
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

export default SongListHeader;
