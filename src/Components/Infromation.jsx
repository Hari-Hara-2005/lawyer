import { Box, Button, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ACCENT, ACCENT_HOVER } from "../Theme";
import SectionTitle from "../Components/SectionTitle";
import { Link } from "react-router-dom";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85";

const FEATURES = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
  "We thrive in intensity",
  "We revel in diversity",
  "We deliver balanced advice",
];

export default function Information() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { md: "center" },
        py: { xs: 0, md: 8 },
      }}
    >
      {/* Left: high-resolution lawyer team image bleeding to the screen edge */}
      <Box
        data-aos="fade-right"
        sx={{
          position: "relative",
          flex: { md: "0 0 48%" },
          height: { xs: 320, sm: 420, md: 552 },
          backgroundImage: `url(${ABOUT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f5f5f5",
        }}
      />

      {/* Right: content */}
      <Box
        data-aos="fade-left"
        sx={{
          flex: 1,
          minWidth: 0,
          px: { xs: 2.5, sm: 4, md: 0 },
          pl: { md: "8.4%" },
          pr: { md: "7%" },
          py: { xs: 6, md: 0 },
        }}
      >
        <SectionTitle
          eyebrow="Professional Lawyer"
          title="Lets Introduce With Our Professional Lawyer Team"
          textColor="#241c19"
          sx={{ mb: 2.5 }}
        />

        <Typography
          sx={{
            color: "#6b6b6b",
            fontSize: 16,
            lineHeight: 1.45,
            maxWidth: 660,
            mb: 4,
          }}
        >
          To make up the hedge and stand in the gap
        </Typography>

        {/* Quote with accent bar */}
        <Box
          sx={{
            borderLeft: `8px solid ${ACCENT}`,
            pl: 3.75,
            py: 0.5,
            mb: 3,
            maxWidth: 700,
          }}
        >
          <Typography
            sx={{
              color: "#5a5a5a",
              fontSize: { xs: 16, md: 18 },
              lineHeight: 1.45,
              mb: 1.5,
            }}
          >
            Our aim is to satisfy our clients through a deep understanding of
            their needs, their issues, and their industries, and by providing
            excellent, responsive, and innovative legal service by equally
            defending the rights and interests of our client to the fullest
            extent permissible by law.
          </Typography>
        </Box>

        {/* Feature list, two columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gridAutoFlow: { sm: "column" },
            gridTemplateRows: { sm: "repeat(3, auto)" },
            columnGap: 4,
            rowGap: 1.6,
            maxWidth: 700,
            mb: 4,
          }}
        >
          {FEATURES.map((f, i) => (
            <Box
              key={i}
              sx={{ display: "flex", alignItems: "center", gap: 1.75 }}
            >
              <CheckCircleIcon sx={{ color: ACCENT, fontSize: 22 }} />
              <Typography sx={{ color: "#5a5a5a", fontSize: 15 }}>
                {f}
              </Typography>
            </Box>
          ))}
        </Box>

        <Link to="/our-story">
          <Button
            variant="contained"
            disableElevation
            sx={{
              px: 3.75,
              py: 1.6,
              textTransform: "none",
              borderRadius: "5px",
              fontWeight: 600,
              fontSize: 16,
              "&:hover": { bgcolor: ACCENT_HOVER },
            }}
          >
            Our Story
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
