import React from "react";
import { useDispatch } from "react-redux";
import { genres } from "../../constants/data";

import { setFilter } from "./songsSlice";

const FilterByGenre = () => {
  const dispatch = useDispatch();

  const renderedGenres = genres.map((genre, index) => {
    return (
      <option key={index} value={genre}>
        {genre}
      </option>
    );
  });

  return (
    <>
      <select value="" onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option hidden>Genre</option>
        {renderedGenres}
      </select>
    </>
  );
};

export default FilterByGenre;
