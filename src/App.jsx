import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ExperienceChoice from "./components/experiences/ExperienceChoice";
import Destinations from "./components/destinations/Destinations";
import DestinationPage from "./pages/destinations/DestinationPage";
import ExperiencesPage from "./pages/Experiences/ExperiencesPage";
import GroupsPage from "./pages/Groups/GroupsPage";
import BookingPage from "./pages/Booking/BookingPage";

function Home() {
  return (
    <>
      <Hero />
      <ExperienceChoice />
      <Destinations />
    </>
  );
}

// Remonte en haut à chaque nouvelle page ; laisse le navigateur gérer
// le défilement quand l'URL contient une ancre (#destinations, #contact...).
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollManager />
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

          {/* Expériences, organisées par destination */}
          <Route path="/experiences" element={<ExperiencesPage />} />

          {/* Groupes & entreprises */}
          <Route path="/groups" element={<GroupsPage />} />

          {/* Demande de réservation (démo, sans backend) */}
          <Route path="/booking" element={<BookingPage />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
