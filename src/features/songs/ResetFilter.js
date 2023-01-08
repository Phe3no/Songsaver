import React from "react";
import { useDispatch } from "react-redux";

import { setFilter } from "./songsSlice";

const ResetFilter = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(setFilter("All"))}>Reset Filter</button>
  );
};

export default ResetFilter;
