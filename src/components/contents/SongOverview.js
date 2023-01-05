import React from "react";
import SongListHeader from "./SongListHeader";
import SongList from "./SongList";

const SongOverview = ({
  songs,
  handleDelete,
  sortSongs,
  titleUp,
  artistUp,
}) => {
  return (
    <table>
      <SongListHeader
        sortSongs={sortSongs}
        artistUp={artistUp}
        titleUp={titleUp}
      />
      <SongList songs={songs} handleDelete={handleDelete} />
    </table>
  );
};

export default SongOverview;
