import { Box, Container, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HexagonIcon from "@mui/icons-material/Hexagon";
import SectionTitle from "../Components/SectionTitle";

/*
  Add your real logos by giving each item a `src`, e.g.
    { name: "Acme", src: "/logos/acme.png" }
  Items without `src` render the grey placeholder logos below.
*/
const LOGOS = [
  { name: "Logoipsum", variant: "inline" },
  { name: "logoipsum", variant: "stacked" },
  { name: "Logoipsum", variant: "inlineDark" },
  { name: "logoipsum", variant: "pill" },
];

const GREY = "#8a8a8a";

function PlaceholderLogo({ variant, name }) {
  const text = { fontWeight: 700, letterSpacing: -0.5, lineHeight: 1 };

  if (variant === "stacked") {
    return (
      <Box sx={{ textAlign: "center" }}>
        <LandscapeIcon
          sx={{ fontSize: 56, color: GREY, display: "block", mx: "auto" }}
        />
        <Typography sx={{ ...text, color: "#333", fontSize: 20 }}>
          {name}
        </Typography>
      </Box>
    );
  }
  if (variant === "pill") {
    return (
      <Box sx={{ bgcolor: GREY, borderRadius: "50%", px: 3.5, py: 2.25 }}>
        <Typography sx={{ ...text, color: "#fff", fontSize: 26 }}>
          {name}
        </Typography>
      </Box>
    );
  }
  const Icon = variant === "inline" ? RocketLaunchIcon : HexagonIcon;
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
      <Icon sx={{ fontSize: 40, color: GREY }} />
      <Typography
        sx={{
          ...text,
          color: variant === "inline" ? GREY : "#222",
          fontSize: 24,
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default function FeaturedCompany() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        <SectionTitle
          eyebrow="They Trust Us"
          title="Featured Company"
          align="center"
          sx={{ mb: 2 }}
        />

        <Typography
          sx={{
            color: "#6b6b6b",
            fontSize: { xs: 15, md: 16 },
            lineHeight: 1.45,
            textAlign: "center",
            maxWidth: 720,
            mx: "auto",
            mb: { xs: 5, md: 6 },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            rowGap: { xs: 5, md: 0 },
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {LOGOS.map((logo, i) => (
            <Box
              key={i}
              sx={{
                height: 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {logo.src ? (
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.name}
                  sx={{
                    maxWidth: 170,
                    maxHeight: 70,
                    objectFit: "contain",
                    filter: "grayscale(1)",
                    opacity: 0.85,
                    transition: "filter .25s, opacity .25s",
                    "&:hover": { filter: "none", opacity: 1 },
                  }}
                />
              ) : (
                <PlaceholderLogo variant={logo.variant} name={logo.name} />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
