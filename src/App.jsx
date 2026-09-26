import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ScrollToTop from "./Components/ScrolltoTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/Contact" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
