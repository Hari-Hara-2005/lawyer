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
import Information from "../Components/Infromation";
import Achievements from "../Components/Achievements";
import Process from "../Components/Process";
import Coverage from "../Components/Coverage";
import Footer from "../Components/Footer";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85";

// Words that get typed automatically after "We Do"
const TYPED_WORDS = [
  "Legal Company",
  "Product",
  "Registered",
  "Criminal Lawyer",
  "Much More",
];
const AboutPage = () => {
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
                  About Us
                </Typography>
              </Box>
            </Container>
          </Box>
        </section>
        <section data-aos="fade-up">
          <Information />
        </section>
        <section data-aos="fade-up">
          <Achievements />
        </section>
        <section data-aos="fade-up">
          <Process
            backgroundColor="#2D2424"
            textColor="#ffffff"
            textClr="#fff"
          />
        </section>
        <section data-aos="fade-up">
          <Coverage />
        </section>
        <section data-aos="fade-up">
          <Footer />
        </section>
      </ThemeProvider>
    </>
  );
};

export default AboutPage;
