import React from "react";
import Middle from "./home/Message";
import Content from "../components/contents/Content";
import SongForm from "../features/songs/SongForm";
import FilterSongs from "../features/songs/FilterSongs";
import SongOverview from "../features/songs/SongOverview";

const Home = () => {
  return (
    <main>
      <Middle
        title="Songsaver using React useState"
        paragraph="files located in './components/....'"
      />
      <Content />
      <Middle
        title="Songsaver using @reduxjs/toolkit"
        paragraph="files located in './features/....'"
      />
      <SongForm />
      <FilterSongs />
      <SongOverview />
    </main>
  );
};

export default Home;
