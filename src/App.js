import Header from "./Header.js";
import Middle from "./Middle.js";
import Content from "./components/contents/Content.js";
import Footer from "./Footer.js";

import SongOverview from "./features/songs/SongOverview";
import SongForm from "./features/songs/SongForm.js";

function App() {
  return (
    <main className="App">
      <Header title="Songsaver" />

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
      <SongOverview />

      <Footer />
    </main>
  );
}

export default App;
