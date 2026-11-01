import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Hero from "./Pages/Hero";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import CorporatePlansPage from "./Pages/CorporatePlansPage";
import EnquiryPage from "./Pages/EnquiryPage";
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

function AOSInitializer() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 40,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AOSInitializer />
      <DisclaimerDialog />
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/corporate-plans" element={<CorporatePlansPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
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
