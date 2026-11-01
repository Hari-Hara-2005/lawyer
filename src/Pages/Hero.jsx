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

const HERO_IMAGE = "/assets/hero-justice.png";

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
            minHeight: { xs: 680, sm: 760, md: 750 },
            backgroundImage: `
              radial-gradient(ellipse at 85% 45%, rgba(185, 89, 47, 0.18) 0%, transparent 60%),
              linear-gradient(90deg, rgba(14, 10, 8, 0.94) 0%, rgba(18, 13, 10, 0.82) 42%, rgba(18, 13, 10, 0.38) 72%, rgba(18, 13, 10, 0.22) 100%),
              linear-gradient(180deg, rgba(14, 10, 8, 0.7) 0%, transparent 20%, transparent 75%, rgba(14, 10, 8, 0.92) 100%),
              url(${HERO_IMAGE})
            `,
            backgroundSize: "cover",
            backgroundPosition: { xs: "center", md: "center right", lg: "right center" },
            backgroundRepeat: "no-repeat",
            backgroundColor: "#16110f",
          }}
        >
          <Navbar />

          <Container
            maxWidth={false}
            sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4, md: 5 } }}
          >
            <Box
              sx={{
                position: "relative",
                pt: { xs: 8, sm: 10, md: 14, lg: 16 },
                pb: { xs: 8, sm: 10, md: 14, lg: 16 },
              }}
              data-aos="fade-up"
            >
              <Typography
                sx={{
                  fontSize: { xs: 13, md: 15 },
                  fontWeight: 600,
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
                  lineHeight: { xs: 1.2, sm: 1.15 },
                  fontSize: { xs: 36, sm: 48, md: 58, lg: 64 },
                  maxWidth: { xs: "100%", md: 680, lg: 720 },
                  mb: 3.5,
                  letterSpacing: "-0.02em",
                }}
              >
                Professional Legal &amp; Lawyer Services
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16, md: 16.5 },
                  lineHeight: 1.7,
                  maxWidth: { xs: "100%", md: 620, lg: 660 },
                  mb: 4,
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.88)",
                }}
              >
                At Gen Attorneys, we offer a comprehensive range of legal
                services, from litigation to corporate and commercial matters,
                and arbitration dispute resolution. Our expertise spans advisory
                and transactional roles, representing clients across various
                courts, including the Supreme Court, High Courts, District
                Courts, and tribunals.
              </Typography>

              <Stack spacing={1.8} mb={4.5}>
                {FEATURES.map((f) => (
                  <Stack
                    key={f}
                    direction="row"
                    spacing={1.5}
                    alignItems="center"
                  >
                    <CheckCircleIcon sx={{ color: ACCENT, fontSize: 22 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: 14.5, sm: 15.5 },
                        fontWeight: 500,
                        color: "rgba(255, 255, 255, 0.95)",
                      }}
                    >
                      {f}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Box data-aos="fade-up" data-aos-delay="200">
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      px: 4,
                      py: 1.6,
                      mt:5,
                      textTransform: "none",
                      borderRadius: "6px",
                      fontWeight: 600,
                      fontSize: 16,
                      bgcolor: ACCENT,
                      boxShadow: "0 8px 24px rgba(185, 89, 47, 0.35)",
                      "&:hover": {
                        bgcolor: ACCENT_HOVER,
                        boxShadow: "0 12px 30px rgba(185, 89, 47, 0.48)",
                      },
                      transition: "all 0.25s ease",
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