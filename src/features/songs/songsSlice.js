import { createSlice, nanoid } from "@reduxjs/toolkit";
import { chansons } from "../../constants/data.js";

const initialState = chansons; //;-)

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    songAdded: {
      reducer(state, action) {
        state.push(action.payload);
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
      const newState = [...state.filter((song) => song.id !== action.payload)];
      state.splice(0, state.length);
      state = newState.map((elem) => state.push(elem));
    },
    songsSorted(state, action) {
      state.splice(0, state.length);
      state = action.payload.map((elem) => state.push(elem));
    },
  },
});

export const { songAdded, songDeleted, songsSorted } = songsSlice.actions;

export const selectAllSongs = (state) => state.songs;

export default songsSlice.reducer;
