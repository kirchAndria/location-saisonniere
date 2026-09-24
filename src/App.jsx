import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import ExperienceChoice from "./components/experiences/ExperienceChoice";
import Destinations from "./components/destinations/Destinations";
import DestinationPage from "./pages/destinations/DestinationPage";

function Home() {
  return (
    <>
      <Hero />
      <ExperienceChoice />
      <Destinations />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Pages des destinations */}
          <Route
            path="/destinations/:id"
            element={<DestinationPage />}
          />

        </Routes>
      </main>
    </>
  );
}

export default App;