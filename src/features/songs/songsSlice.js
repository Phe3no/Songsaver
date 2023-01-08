import { createSlice, nanoid } from "@reduxjs/toolkit";
import { chansons } from "../../constants/data.js";

const initialState = chansons;

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    songAdded: {
      reducer(state, action) {
        state.songs.push(action.payload);
      },
      prepare(title, artist, genre, rating) {
        return {
          payload: {
            id: nanoid(),
            title,
            artist,
            genre,
            rating,
          },
        };
      },
    },
    songDeleted(state, action) {
      const newSongs = [
        ...state.songs.filter((song) => song.id !== action.payload),
      ];
      state.songs = newSongs;
    },
    songsSortedByTitle(state) {
      const sortedByTitle = [...state.songs];
      sortedByTitle.sort((a, b) => {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (state.titleUp) {
          return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        } else {
          return titleA < titleB ? 1 : titleA > titleB ? -1 : 0;
        }
      });
      console.log("sortedByTitle");
      state.titleUp = !state.titleUp;
      state.songs = sortedByTitle;
    },
    songsSortedByArtist(state) {
      const sortedByArtist = [...state.songs];
      sortedByArtist.sort((a, b) => {
        let artistA = a.artist.toLowerCase();
        let artistB = b.artist.toLowerCase();
        if (state.artistUp) {
          return artistA < artistB ? -1 : artistA > artistB ? 1 : 0;
        } else {
          return artistA < artistB ? 1 : artistA > artistB ? -1 : 0;
        }
      });
      state.artistUp = !state.artistUp;
      state.songs = sortedByArtist;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {
  songAdded,
  songDeleted,
  songsSortedByTitle,
  songsSortedByArtist,
  setFilter,
} = songsSlice.actions;

export const selectAllSongs = (state) => state.songs;

export default songsSlice.reducer;
