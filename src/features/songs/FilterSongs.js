import React, { useState } from "react";
import FilterByGenre from "./FilterByGenre";
import FilterByRating from "./FilterByRating";
import ResetFilter from "./ResetFilter";

const FilterSongs = () => {
  return (
    <div className="filter-songs">
      <span>Filter songs below by:</span>
      <FilterByGenre />
      <FilterByRating />
      <ResetFilter />
    </div>
  );
};

export default FilterSongs;
