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

// Placeholder avatars - replace `avatar` with your own image URLs
const TESTIMONIALS = Array.from({ length: 7 }, (_, i) => ({
  name: "John Doe",
  role: "CEO",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  avatar: `https://i.pravatar.cc/100?img=${i + 11}`,
}));

const AUTOPLAY_MS = 4000;

function TestimonialCard({ name, role, text, avatar }) {
  return (
    <Box
      sx={{
        height: "100%",
        border: "1px solid #e2e2e2",
        borderRadius: "3px",
        bgcolor: "#fff",
        px: { xs: 3, md: 5 },
        py: { xs: 4, md: 5.5 },
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#6b6b6b",
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.45,
          mb: 3.5,
        }}
      >
        {text}
      </Typography>
      <Stack
        direction="row"
        spacing={2.5}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          src={avatar}
          alt={name}
          sx={{ width: 50, height: 50, bgcolor: "#241c19" }}
        >
          {name[0]}
        </Avatar>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            sx={{
              color: "#241c19",
              fontWeight: 600,
              fontSize: 15,
              lineHeight: 1.4,
            }}
          >
            {name}
          </Typography>
          <Typography sx={{ color: ACCENT, fontSize: 15, lineHeight: 1.4 }}>
            {role}
          </Typography>
        </Box>
      </Stack>
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
          eyebrow="Testimonial"
          title="What They Says"
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
