import "./App.css";
import { NavbarLayout } from "./components/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { FooterFitnezz } from "./components/layout/Footer";

function App() {
  return (
    <>
      <NavbarLayout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <FooterFitnezz />
    </>
  );
}

export default App;
