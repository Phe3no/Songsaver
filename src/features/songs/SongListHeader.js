import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { songsSorted } from "./songsSlice";
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { selectAllSongs } from "./songsSlice";

export const SongListHeader = () => {
  const [titleUp, setTitleUp] = useState(false);
  const [artistUp, setArtistUp] = useState(false);

  const dispatch = useDispatch();
  const songs = useSelector(selectAllSongs);

  const sortByTitle = () => {
    const sortedSongs = [...songs];
    sortedSongs.sort((a, b) => {
      let titleA = a.title.toLowerCase();
      let titleB = b.title.toLowerCase();
      if (titleUp) {
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      } else {
        return titleA < titleB ? 1 : titleA > titleB ? -1 : 0;
      }
    });
    setTitleUp(!titleUp);
    dispatch(songsSorted(sortedSongs));
  };

  const sortByArtist = () => {
    const sortedSongs = [...songs];
    sortedSongs.sort((a, b) => {
      let artistA = a.artist.toLowerCase();
      let artistB = b.artist.toLowerCase();
      if (artistUp) {
        return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
      } else {
        return artistA < artistB ? 1 : artistA > artistB ? -1 : 0;
      }
    });
    setArtistUp(!artistUp);
    dispatch(songsSorted(sortedSongs));
  };

  return (
    <thead className="song-header">
      <tr>
        <th className="SongRow-item">
          Title
          <button value="title" onClick={sortByTitle}>
            {titleUp ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </th>
        <th className="SongRow-item">
          Artist
          <button value="artist" onClick={sortByArtist}>
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
