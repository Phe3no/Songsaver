import { Link, Route, Routes } from "react-router-dom";

import Header from "./Header.js";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme.js";
import Footer from "./Footer.js";

function App() {
  return (
    <>
      <Header title="Songsaver" />

      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/aboutme">
              About me
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
