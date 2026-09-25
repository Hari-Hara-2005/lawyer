import { Box, Button, IconButton, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { ACCENT, ACCENT_HOVER } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

// Replace with your own photo
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80";

const FEATURES = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
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
      {/* Left: image bleeding to the screen edge */}
      <Box
        sx={{
          position: "relative",
          flex: { md: "0 0 48%" },
          height: { xs: 300, sm: 400, md: 552 },
          backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${ABOUT_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#3a2a20",
        }}
      >
        <IconButton
          aria-label="Play video"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 76, md: 108 },
            height: { xs: 76, md: 108 },
            border: "4px solid #fff",
            color: "#fff",
            transition: "background .2s",
            "&:hover": { bgcolor: "rgba(255,255,255,.15)" },
          }}
        >
          <PlayArrowIcon sx={{ fontSize: { xs: 48, md: 68 } }} />
        </IconButton>
      </Box>

      {/* Right: content */}
      <Box
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet consectetur adipiscing elit dolor
          </Typography>
          <Typography sx={{ color: "#241c19", fontWeight: 600, fontSize: 15 }}>
            Mr. Lawontoni
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
      </Box>
    </Box>
  );
}
