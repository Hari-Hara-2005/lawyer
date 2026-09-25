import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80";

const FEATURES = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
];

// Words that get typed automatically after "We Do"
const TYPED_WORDS = [
  "Legal Company",
  "Product",
  "Registered",
  "Criminal Lawyer",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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

              <Button
                variant="contained"
                disableElevation
                sx={{
                  px: 3.75,
                  py: 1.6,
                  mt:2,
                  textTransform: "none",
                  borderRadius:"5px",
                  fontWeight: 600,
                  fontSize: 16,
                  "&:hover": { bgcolor: ACCENT_HOVER },
                }}
              >
                Our Services
              </Button>

              <IconButton
                aria-label="Play video"
                sx={{
                  position: { xs: "static", md: "absolute" },
                  mt: { xs: 5, md: 0 },
                  display: "flex",
                  right: { md: "14%", lg: "15%" },
                  top: { md: "52%" },
                  width: { xs: 76, md: 108 },
                  height: { xs: 76, md: 108 },
                  border: "4px solid #fff",
                  color: "#fff",
                  transition: "transform .2s, background .2s",
                  "&:hover": {
                    transform: "scale(1.06)",
                    bgcolor: "rgba(255,255,255,.12)",
                  },
                }}
              >
                <PlayArrowIcon sx={{ fontSize: { xs: 48, md: 68 } }} />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </section>
      <section>
        <Achievements />
      </section>
      <section>
        <Information />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <FeaturedCompany />
      </section>
      <section>
        <SuccessStats />
      </section>
      <section>
        <WhyChoose />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </ThemeProvider>
  );
}
