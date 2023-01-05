import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { songAdded } from "./songsSlice";

const SongForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onArtistChange = (e) => setArtist(e.target.value);
  const onGenreChange = (e) => setGenre(e.target.value);
  const onRatingChange = (e) => setRating(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (title && artist && genre && rating) {
      dispatch(songAdded(title, artist, genre, rating));
      setTitle("");
      setArtist("");
      setGenre("");
      setRating("");
    }
  };

  return (
    <form className="song-form">
      <label htmlFor="AddSong">Add Song</label>
      <input
        autoFocus
        id="addTitle"
        type="text"
        placeholder="Add title"
        name="title"
        value={title}
        onChange={onTitleChange}
      />
      <input
        id="addArtist"
        type="text"
        placeholder="Add artist"
        name="artist"
        value={artist}
        onChange={onArtistChange}
      />
      <select id="addGenre" name="genre" value={genre} onChange={onGenreChange}>
        <option hidden>Add genre</option>
        <option value="blues">Blues</option>
        <option value="country">Country</option>
        <option value="disco">Disco</option>
        <option value="funk">Funk</option>
        <option value="jazz">Jazz</option>
        <option value="pop">Pop</option>
        <option value="reggae">Reggae</option>
        <option value="rock">Rock</option>
        <option value="soul">Soul</option>
      </select>
      <select
        id="addRating"
        name="rating"
        value={rating}
        onChange={onRatingChange}
      >
        <option hidden>Add rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        type="button"
        aria-label="Add Item"
        onClick={(event) => handleSubmit(event)}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default SongForm;
