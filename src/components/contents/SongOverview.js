import React from "react";
import SongForm from "./SongForm";
import SongListHeader from "./SongListHeader";
import SongList from "./SongList";

const SongOverview = ({
  songs,
  handleDelete,
  newSong,
  formIsValid,
  handleChange,
  handleSubmit,
  sortSongs,
  titleUp,
  artistUp,
}) => {
  return (
    <>
      <SongForm
        newSong={newSong}
        formIsValid={formIsValid}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <table style={{ width: "100%" }}>
        <SongListHeader
          sortSongs={sortSongs}
          artistUp={artistUp}
          titleUp={titleUp}
        />
        <SongList songs={songs} handleDelete={handleDelete} />
      </table>
    </>
  );
};

export default SongOverview;
