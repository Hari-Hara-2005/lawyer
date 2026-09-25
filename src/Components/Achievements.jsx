import { useEffect, useRef, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { ACCENT, ACCENT_HOVER } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

const STATS = [
  { value: 250, suffix: "+", label: "Company Partner" },
  { value: 100, suffix: "+", label: "Products Registered" },
  { value: 250, suffix: "+", label: "Company Partner" },
  { value: 100, suffix: "+", label: "Products Registered" },
];

const BORDER = "1px solid #e2e2e2";

// Counts from 0 to `end` the first time it scrolls into view
function CountUp({ end, suffix = "", duration = 2000 }) {
  const ref = useRef(null);
  const started = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let raf;

    const run = () => {
      if (reduceMotion) return setCount(end);
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setCount(Math.round(end * eased));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true; // count only once
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 7, md: 12 } }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left: text */}
          <Grid size={{ xs: 12, md: 6 }}>
            <SectionTitle
              eyebrow="Archivements"
              title="We Have Trust From 15 Years Operation"
            />

            <Typography
              sx={{
                color: "#6b6b6b",
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.45,
                maxWidth: 660,
                mb: 4,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>

            <Button
              variant="contained"
              disableElevation
              sx={{
                px: 3.75,
                py: 1.6,
                textTransform: "none",
                borderRadius:"5px",
                fontWeight: 600,
                fontSize: 16,
                "&:hover": { bgcolor: ACCENT_HOVER },
              }}
            >
              Lets Started
            </Button>
          </Grid>

          {/* Right: 2x2 stats with cross dividers */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                maxWidth: 700,
                mx: { xs: "auto", md: 0 },
                ml: { md: "auto" },
              }}
            >
              {STATS.map((s, i) => (
                <Box
                  key={i}
                  sx={{
                    textAlign: "center",
                    py: { xs: 3.5, md: 4 },
                    px: 1,
                    borderRight: i % 2 === 0 ? BORDER : "none",
                    borderBottom: i < 2 ? BORDER : "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: ACCENT,
                      fontWeight: 600,
                      lineHeight: 1.2,
                      fontSize: { xs: 40, md: 52 },
                      mb: 1.5,
                    }}
                  >
                    <CountUp end={s.value} suffix={s.suffix} />
                  </Typography>
                  <Typography
                    sx={{ color: "#6b6b6b", fontSize: { xs: 15, md: 18 } }}
                  >
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
