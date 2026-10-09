import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ACCENT, theme } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

const TESTIMONIALS = [
  {
    name: "Rajesh Mehta",
    role: "Director, Apex Realty",
    text: "Their counsel during our multi-acre property acquisition and title verification was immaculate. They identified hidden encumbrances that safeguarded our investment.",
  },
  {
    name: "Sarah Jenkins",
    role: "Managing Partner, Zenith Tech",
    text: "Gen Attorneys handled our corporate contracts and IP licensing with exceptional precision. We rely on them for all our regulatory and advisory needs.",
  },
  {
    name: "Arun Kumar",
    role: "Commercial Property Investor",
    text: "Navigating property approvals and title clearance was seamless with their experienced team managing the due diligence from start to finish.",
  },
  {
    name: "Elena Rostova",
    role: "VP Operations, Global Trade Ltd",
    text: "From transaction structuring to partnership agreements, their attorneys are proactive, accessible, and remarkably astute negotiators.",
  },
  {
    name: "Vikram Sethi",
    role: "Founder, Nexus Logistics",
    text: "Their strategic arbitration in a complex contract dispute saved our firm from years of prolonged litigation. Truly top-tier advocates.",
  },
  {
    name: "Priya Nair",
    role: "Private Client",
    text: "They guided our family through an intricate property settlement with utmost integrity, professional sensitivity, and legal clarity.",
  },
  {
    name: "David Vance",
    role: "CFO, Horizon Infrastructure",
    text: "Their deep knowledge of real estate law, lease licenses, and corporate compliance gives our executive board complete confidence.",
  },
];

const AUTOPLAY_MS = 4000;

function getInitials(name) {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialCard({ name, role, text }) {
  const initials = getInitials(name);

  return (
    <Box
      sx={{
        height: "100%",
        border: "1px solid #e2e2e2",
        borderRadius: "4px",
        bgcolor: "#fff",
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 5.5 },
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          color: "#6b6b6b",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: { xs: 16, md: 17 },
          lineHeight: 1.5,
          mb: 3.5,
        }}
      >
        "{text}"
      </Typography>

      {/* General Name Tag */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mx: "auto",
          px: 2.5,
          py: 1.2,
          borderRadius: "32px",
          bgcolor: "#fbf9f6",
          border: "1px solid #ebd8c8",
          boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
        }}
      >
        <Avatar
          sx={{
            width: 44,
            height: 44,
            bgcolor: "#241c19",
            color: ACCENT,
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: 0.5,
            border: `1.5px solid ${ACCENT}`,
          }}
        >
          {initials}
        </Avatar>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              color: "#241c19",
              fontWeight: 700,
              fontSize: 15,
              lineHeight: 1.3,
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: ACCENT,
              fontWeight: 500,
              fontSize: 13,
              lineHeight: 1.3,
            }}
          >
            {role}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default function Testimonials() {
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const visible = isMd ? 3 : isSm ? 2 : 1;
  const maxIndex = TESTIMONIALS.length - visible; // dots = maxIndex + 1

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keep index valid when the number of visible cards changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Autoplay (loops back to the start), pauses on hover
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      AUTOPLAY_MS,
    );
    return () => clearInterval(id);
  }, [paused, maxIndex]);

  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        <SectionTitle
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
          textColor="#000"
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
          Read firsthand how our strategic legal counsel and meticulous due
          diligence have protected our clients' interests and delivered results.
        </Typography>

        {/* Slider */}
        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{ overflow: "hidden" }}
        >
          <Box
            sx={{
              display: "flex",
              mx: -1.6,
              transform: `translateX(-${(index * 100) / visible}%)`,
              transition: "transform .6s ease",
              "@media (prefers-reduced-motion: reduce)": { transition: "none" },
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <Box
                key={i}
                sx={{
                  flex: `0 0 ${100 / visible}%`,
                  px: 1.6,
                  boxSizing: "border-box",
                }}
              >
                <TestimonialCard {...t} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dots */}
        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <Box
              key={i}
              component="button"
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              sx={{
                width: 10,
                height: 10,
                p: 0,
                border: 0,
                borderRadius: "50%",
                cursor: "pointer",
                bgcolor: i === index ? ACCENT : "#c8c8c8",
                transition: "background-color .25s",
                "&:focus-visible": {
                  outline: `2px solid ${ACCENT}`,
                  outlineOffset: 2,
                },
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
