import React from "react";

const SongFormOption = ({ data, handleChange, id, name, value }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={(event) => handleChange(event)}
    >
      <option hidden>Add {name}</option>
      {data.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default SongFormOption;
