import {
  Box,
  Container,
  Typography,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { ACCENT, theme } from "../Theme";
import Navbar from "../Components/Navbar";
import TypingText from "../Components/TypingText";
import ServicesInfo from "../Components/ServicesInfo";
import Process from "../Components/Process";
import ServiceDetails from "../Components/ServiceDetails";
import Footer from "../Components/Footer";

const HERO_IMAGE = "/assets/court-gavel.jpg";

// Words that get typed automatically after "We Do"
const TYPED_WORDS = [
  "Legal Company",
  "Product",
  "Registered",
  "Criminal Lawyer",
  "Much More",
];
const ServicesPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <section>
          <Box
            component="section"
            sx={{
              position: "relative",
              color: "#fff",
              overflow: "hidden",
              minHeight: { xs: "auto", md: 350 },
              backgroundImage: `linear-gradient(rgba(20,14,12,.72), rgba(20,14,12,.72)), url(${HERO_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#2a201c",
            }}
          >
            <Navbar />

            <Container
              maxWidth={false}
              sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
            >
              <Box
                sx={{
                  position: "relative",
                  pt: { xs: 8, md: 15 },
                  pb: { xs: 8, md: 14 },
                }}
                data-aos="fade-up"
              >
                <Typography
                  sx={{
                    fontSize: { xs: 13, md: 15 },
                    fontWeight: 500,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    mb: 3,
                    minHeight: "1.5em", // keeps layout steady while typing/deleting
                  }}
                >
                  We Do <TypingText words={TYPED_WORDS} color={ACCENT} />
                </Typography>

                <Typography
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    fontSize: { xs: 38, sm: 52, md: 64 },
                    maxWidth: 680,
                    mb: 4,
                  }}
                >
                  Our Services
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 16 },
                    lineHeight: 1.45,
                    maxWidth: 660,
                    mb: 4,
                    fontWeight: 500,
                  }}
                >
                  Involves both Civil and Criminal practises. End to End Service
                  on Real Estate & Infrastructure, Mediation & Arbitration,
                  Contracts, Transaction structuring, Mergers & Acquisitions,
                  Copy rights & Trade mark, matrimonial Disputes, Family
                  partition arrangements, Apartment Owners Welfare solutions and
                  dispute resolutions, Documentations, Redeeming of frozen
                  assets and charges, Cheque Bounce cases, Labour disputes,
                  Industrial and Projects wise legal compliances, Strategic
                  advisory etc.,
                </Typography>
              </Box>
            </Container>
          </Box>
        </section>
        <section data-aos="fade-up">
          <ServicesInfo />
        </section>
        <section data-aos="fade-up">
          <Process backgroundColor="#fff" textColor="#000" />
        </section>
        <section data-aos="fade-up">
          <ServiceDetails />
        </section>
        <section data-aos="fade-up">
          <Footer />
        </section>
      </ThemeProvider>
    </>
  );
};

export default ServicesPage;
