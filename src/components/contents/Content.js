import React, { useEffect } from "react";
import { useState } from "react";
import SongOverview from "./SongOverview";
import { genre, rating } from "../../constants/data.js";

const Content = () => {
  const [titleUp, setTitleUp] = useState(false);
  const [artistUp, setArtistUp] = useState(false);
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "Hotel California",
      artist: "Eagles",
      genre: genre[7],
      rating: rating[3],
    },
    {
      id: 2,
      title: "Another Brick in the Wall",
      artist: "Pink Floyd",
      genre: genre[7],
      rating: rating[1],
    },
    {
      id: 3,
      title: "Comfortably Numb",
      artist: "Pink Floyd",
      genre: genre[7],
      rating: rating[4],
    },
  ]);

  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const addNewSong = (newSong) => {
    const sortedSongs = [...songs.sort((a, b) => a.id - b.id)];
    setSongs(sortedSongs);
    const id = songs.length ? songs[songs.length - 1].id + 1 : 1;
    const theNewSong = {
      id,
      title: newSong.title,
      artist: newSong.artist,
      genre: newSong.genre,
      rating: newSong.rating,
    };
    const listSongs = [...songs, theNewSong];
    setSongs(listSongs);
  };

  const sortSongs = (event) => {
    let A = "";
    let B = "";
    let toggle = false;
    if (event) {
      const sortedSongs = [
        ...songs.sort((a, b) => {
          if (event.currentTarget.value === "title") {
            A = a.title.toLowerCase();
            B = b.title.toLowerCase();
            toggle = titleUp;
            setTitleUp(!titleUp);
          }
          if (event.currentTarget.value === "artist") {
            A = a.artist.toLowerCase();
            B = b.artist.toLowerCase();
            toggle = artistUp;
            setArtistUp(!artistUp);
          }
          if (toggle) {
            return A < B ? -1 : A > B ? 1 : 0;
          } else {
            return A < B ? 1 : A > B ? -1 : 0;
          }
        }),
      ];
      setSongs(sortedSongs);
    }
  };

  const handleChange = (event) => {
    setNewSong({ ...newSong, [event.target.name]: event.target.value });
  };

  const handleDelete = (id) => {
    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);
  };

  const handleSubmit = (event) => {
    //event.preventDefault();
    if (!newSong) return;
    setNewSong({
      title: "",
      artist: "",
      genre: "",
      rating: "",
    });
    addNewSong(newSong);
    setFormIsValid(false);
  };

  useEffect(() => {
    if (
      newSong.title.length > 0 &&
      newSong.artist.length > 0 &&
      newSong.genre.length > 0 &&
      newSong.rating.length > 0
    ) {
      setFormIsValid(true);
    }
  }, [newSong]);

  return (
    <main>
      <SongOverview
        songs={songs}
        handleDelete={handleDelete}
        newSong={newSong}
        formIsValid={formIsValid}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        sortSongs={sortSongs}
        titleUp={titleUp}
        artistUp={artistUp}
      />
    </main>
  );
};

export default Content;