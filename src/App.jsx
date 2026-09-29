import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import ScrollToTop from "./Components/ScrolltoTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import DisclaimerDialog from "./Components/Disclaimerdialog";
import PrivacyPolicy from "./Terms&Service/Privacypolicy";
import TermsOfService from "./Terms&Service/Termsofservice";
import Disclaimer from "./Terms&Service/Disclaimer";
import OurStory from "./Components/Ourstory";
import OurEthics from "./Components/Ourethics";
import PropertyApprovals from "./Components/Propertyapprovals";
import PropertyApprovalsView from "./Pages/PropertyapprovalsPage";

function App() {
  return (
    <BrowserRouter>
      <DisclaimerDialog />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-ethics" element={<OurEthics />} />
        <Route path="/genattorneys/admin" element={<PropertyApprovals />} />
        <Route path="/properties" element={<PropertyApprovalsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
