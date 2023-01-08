import React from "react";
import { useDispatch } from "react-redux";
import { ratings } from "../../constants/data";

import { setFilter } from "./songsSlice";

const FilterByRating = () => {
  const dispatch = useDispatch();

  const renderedRatings = ratings.map((rating, index) => {
    return (
      <option key={index} value={rating}>
        {rating}
      </option>
    );
  });

  return (
    <>
      <select value="" onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option hidden>Rating</option>
        {renderedRatings}
      </select>
    </>
  );
};

export default FilterByRating;
