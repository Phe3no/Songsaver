import React from "react";
import SongFormOption from "./SongFormOption";
import { FaPlus } from "react-icons/fa";
import { genres, ratings } from "../../constants/data.js";

const SongForm = ({ newSong, formIsValid, handleChange, handleSubmit }) => {
  return (
    <form className="song-form" disabled={!formIsValid}>
      <label htmlFor="AddSong">Add Song</label>
      <input
        autoFocus
        id="addTitle"
        type="text"
        placeholder="Add title"
        name="title"
        value={newSong.title}
        onChange={(event) => handleChange(event)}
      />
      <input
        id="addArtist"
        type="text"
        placeholder="Add artist"
        name="artist"
        value={newSong.artist}
        onChange={(event) => handleChange(event)}
      />
      <SongFormOption
        id="addGenre"
        name="genre"
        data={genres}
        value={newSong.genre}
        handleChange={handleChange}
      />
      <SongFormOption
        id="addRating"
        name="rating"
        data={ratings}
        value={newSong.rating}
        handleChange={handleChange}
      />
      <button
        type="submit"
        aria-label="Add Item"
        disabled={!formIsValid}
        onClick={(event) => handleSubmit(event)}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default SongForm;
