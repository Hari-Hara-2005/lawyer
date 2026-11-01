import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ACCENT, ACCENT_HOVER, theme } from "../Theme";
import Navbar from "../Components/Navbar";
import TypingText from "../Components/TypingText";
import Achievements from "../Components/Achievements";
import Information from "../Components/Infromation";
import Process from "../Components/Process";
import Services from "../Components/Services";
import FeaturedCompany from "../Components/Featuredcompany";
import SuccessStats from "../Components/Successstats";
import WhyChoose from "../Components/Whychoose";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2000&q=85";

const FEATURES = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
];

// Words that get typed automatically after "We Do"
const TYPED_WORDS = [
  "Professional PARA LEGAL SERVICES",
  "PRE- LITIGATION CONSULTANCY",
  "LEGAL AND LAWYER SERVICES",
  "Much More",
];

export default function Hero() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <section>
        <Box
          component="section"
          sx={{
            position: "relative",
            color: "#fff",
            overflow: "hidden",
            minHeight: { xs: "auto", md: 840 },
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
                Professional Legal & Lawyer Services
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
                At Gen Attorneys, we offer a comprehensive range of legal
                services, from litigation to corporate and commercial matters,
                and arbitration dispute resolution. Our expertise spans advisory
                and transactional roles, representing clients across various
                courts, including the Supreme Court, High Courts, District
                Courts, and tribunals.
              </Typography>

              <Stack spacing={1.6} mb={4.5}>
                {FEATURES.map((f) => (
                  <Stack
                    key={f}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <CheckCircleIcon sx={{ color: ACCENT, fontSize: 22 }} />
                    <Typography sx={{ fontSize: 15, fontWeight: 500 }}>
                      {f}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box data-aos="fade-up" data-aos-delay="200">
                <Link to="/services">
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      px: 3.75,
                      py: 1.6,
                      mt: 2,
                      textTransform: "none",
                      borderRadius: "5px",
                      fontWeight: 600,
                      fontSize: 16,
                      "&:hover": { bgcolor: ACCENT_HOVER },
                    }}
                  >
                    Our Services
                  </Button>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </section>
      <section data-aos="fade-up">
        <Achievements />
      </section>
      <section data-aos="fade-up">
        <Information />
      </section>
      <section data-aos="fade-up">
        <Process />
      </section>
      <section data-aos="fade-up">
        <Services />
      </section>
      <section data-aos="fade-up">
        <FeaturedCompany />
      </section>
      <section data-aos="fade-up">
        <SuccessStats />
      </section>
      <section data-aos="fade-up">
        <WhyChoose />
      </section>
      <section data-aos="fade-up">
        <Testimonials />
      </section>
      <section data-aos="fade-up">
        <Footer />
      </section>
    </ThemeProvider>
  );
}
