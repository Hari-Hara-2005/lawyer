import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { ACCENT, ACCENT_HOVER } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

// Replace with your own photo of the team
const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

// Optional: set to your own dotted world-map image/SVG. Leave "" to use the built-in drawing.
const MAP_SRC = "";

const CHECKS = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
];

// Pin positions on the map, in % of the map box
const PINS = [
  { left: 18.5, top: 23 },
  { left: 24, top: 54 },
  { left: 49, top: 44 },
  { left: 70, top: 28 },
  { left: 88, top: 67 },
];

const GREY = "#8a8a8a";
const LOGOS = ["inline", "stacked", "inlineDark", "pill"];

/* ---------- Placeholder logos (replace with real images if you have them) ---------- */
function PlaceholderLogo({ variant }) {
  const text = { fontWeight: 700, letterSpacing: -0.5, lineHeight: 1 };
  if (variant === "stacked")
    return (
      <Box sx={{ textAlign: "center" }}>
        <LandscapeIcon
          sx={{ fontSize: 48, color: GREY, display: "block", mx: "auto" }}
        />
        <Typography sx={{ ...text, color: "#333", fontSize: 18 }}>
          logoipsum
        </Typography>
      </Box>
    );
  if (variant === "pill")
    return (
      <Box sx={{ bgcolor: GREY, borderRadius: "50%", px: 3, py: 2 }}>
        <Typography sx={{ ...text, color: "#fff", fontSize: 22 }}>
          logoipsum
        </Typography>
      </Box>
    );
  const Icon = variant === "inline" ? RocketLaunchIcon : HexagonIcon;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Icon sx={{ fontSize: 34, color: GREY }} />
      <Typography
        sx={{
          ...text,
          color: variant === "inline" ? GREY : "#222",
          fontSize: 20,
        }}
      >
        Logoipsum
      </Typography>
    </Box>
  );
}

/* ---------- Dotted world map ---------- */
const LANDMASSES = [
  "20,30 70,15 120,20 130,45 110,65 95,85 80,100 60,80 40,60 15,50", // North America
  "115,8 150,5 155,25 130,30", // Greenland
  "85,110 115,105 130,130 120,170 105,205 95,190 85,150", // South America
  "195,40 235,30 250,50 230,70 200,65", // Europe
  "190,80 240,75 260,105 245,150 225,175 205,150 190,110", // Africa
  "245,30 330,20 395,35 400,75 370,100 330,110 300,90 270,75 250,60", // Asia
  "375,150 420,145 435,170 410,190 380,178", // Australia
];

function WorldMap() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        aspectRatio: "460 / 240",
      }}
    >
      {MAP_SRC ? (
        <Box
          component="img"
          src={MAP_SRC}
          alt=""
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        <Box
          component="svg"
          viewBox="0 0 460 240"
          aria-hidden
          sx={{ width: "100%", height: "100%" }}
        >
          <defs>
            <pattern
              id="dots"
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2.5" cy="2.5" r="1.3" fill="#e3e3e3" />
            </pattern>
          </defs>
          {LANDMASSES.map((pts, i) => (
            <polygon
              key={i}
              points={pts}
              fill="url(#dots)"
              stroke="url(#dots)"
              strokeWidth="6"
              strokeLinejoin="round"
            />
          ))}
        </Box>
      )}
      {PINS.map((p, i) => (
        <LocationOnIcon
          key={i}
          sx={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            transform: "translate(-50%, -100%)",
            color: ACCENT,
            fontSize: { xs: 24, md: 30 },
          }}
        />
      ))}
    </Box>
  );
}

export default function Coverage() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        {/* Coverage */}
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <SectionTitle
              eyebrow="Many Coverage"
              title="We Are in Various Areas Coverage"
              sx={{ mb: 2.5 }}
            />
            <Typography
              sx={{
                color: "#6b6b6b",
                fontSize: 14,
                lineHeight: 1.3,
                maxWidth: 540,
                mb: 3.5,
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </Typography>
            <Stack spacing={1.5}>
              {CHECKS.map((c) => (
                <Stack
                  key={c}
                  direction="row"
                  spacing={1.25}
                  alignItems="center"
                >
                  <CheckCircleIcon sx={{ color: ACCENT, fontSize: 18 }} />
                  <Typography sx={{ color: "#5a5a5a", fontSize: 13 }}>
                    {c}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ pt: { md: 2 } }}>
            <WorldMap />
          </Grid>
        </Grid>

        {/* CTA banner with logo strip */}
        <Box
          sx={{
            position: "relative",
            mt: { xs: 7, md: 10 },
            minHeight: { xs: 420, md: 380 },
            backgroundImage: `linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)), url(${BANNER_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#222",
          }}
        >
          {/* White logo strip */}
          <Box
            sx={{
              mx: { xs: 0, md: 5 },
              bgcolor: "#fff",
              minHeight: { xs: 0, md: 160 },
              py: { xs: 3, md: 0 },
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              rowGap: 3,
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            {LOGOS.map((v) => (
              <PlaceholderLogo key={v} variant={v} />
            ))}
          </Box>

          {/* Title + button */}
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              px: 2.5,
              pt: { xs: 4, md: 5 },
              pb: { xs: 4, md: 0 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: { xs: 30, sm: 38, md: 42 },
                mb: 2,
              }}
            >
              50+ More Company Trust Us
            </Typography>
            <Button
              variant="contained"
              disableElevation
              sx={{
                px: 3,
                py: 1.1,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 14,
                "&:hover": { bgcolor: ACCENT_HOVER },
              }}
            >
              Get Consultation Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
