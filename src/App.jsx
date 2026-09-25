import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import ExperienceChoice from "./components/experiences/ExperienceChoice";
import Destinations from "./components/destinations/Destinations";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/layout/Footer";

import DestinationPage from "./pages/destinations/DestinationPage";
import BookingPage from "./pages/Booking/BookingPage";
import GroupsPage from "./pages/Groups/GroupsPage";
import ExperiencesPage from "./pages/Experiences/ExperiencesPage";

function Home() {
  return (
    <>
      <Hero />

      <ExperienceChoice />

      <Destinations />

      <ContactSection />

      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/destinations/:id"
            element={<DestinationPage />}
          />

          <Route
            path="/experiences"
            element={<ExperiencesPage />}
          />

          <Route
            path="/groups"
            element={<GroupsPage />}
          />

          <Route
            path="/booking"
            element={<BookingPage />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;