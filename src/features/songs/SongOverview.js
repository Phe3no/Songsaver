import React from "react";
import { SongListHeader } from "./SongListHeader";
import { SongList } from "./SongList";

const SongOverview = () => {
  return (
    <table>
      <SongListHeader />
      <SongList />
    </table>
  );
};

export default SongOverview;
