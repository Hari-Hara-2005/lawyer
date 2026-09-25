import { useEffect, useRef, useState } from "react";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import { ACCENT } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

const STATS = [
  { value: 75, label: "Criminal Case" },
  { value: 98, label: "License Case" },
  { value: 88, label: "Goverments" },
  { value: 93, label: "DMCA Takedown" },
];

const SIZE = 136;

// Returns a 0 → 1 value that animates once, the first time `ref` scrolls into view
function useAnimateOnView(ref, duration = 2000) {
  const [t, setT] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf;

    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setT(1);
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setT(1 - Math.pow(1 - p, 3)); // ease-out cubic
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true; // animate only once
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [ref, duration]);

  return t;
}

function CircleStat({ value, label, t }) {
  const current = Math.round(value * t);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
        {/* Track */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={SIZE}
          thickness={3.2}
          sx={{ color: "#f4f4f4", position: "absolute", inset: 0 }}
        />
        {/* Progress */}
        <CircularProgress
          variant="determinate"
          value={current}
          size={SIZE}
          thickness={3.2}
          sx={{
            color: ACCENT,
            "& .MuiCircularProgress-circle": { strokeLinecap: "round", transition: "none" },
          }}
        />
        <Box sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
          <Typography sx={{ color: "#241c19", fontWeight: 600, fontSize: 28 }}>{current}%</Typography>
        </Box>
      </Box>
      <Typography sx={{ color: "#241c19", fontWeight: 600, fontSize: { xs: 18, md: 24 } }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function SuccessStats() {
  const statsRef = useRef(null);
  const t = useAnimateOnView(statsRef);

  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 7, md: 11 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left: text */}
          <Grid item xs={12} md={6}>
            <SectionTitle
              eyebrow="Succes Stats"
              title="Our Lawyer Projects Succes Stats Percent"
              sx={{ mb: 2.5 }}
            />
            <Typography sx={{ color: "#6b6b6b", fontSize: { xs: 15, md: 16 }, lineHeight: 1.45, maxWidth: 660, mb: 4.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>

            <Box
              sx={{
                bgcolor: "#f3f3f3",
                borderLeft: `10px solid ${ACCENT}`,
                borderRadius: "2px",
                px: { xs: 2.5, md: 3.5 },
                py: 3,
                maxWidth: 695,
              }}
            >
              <Typography sx={{ color: "#5a5a5a", fontSize: { xs: 16, md: 17 }, lineHeight: 1.5 }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </Typography>
            </Box>
          </Grid>

          {/* Right: 2x2 circular stats */}
          <Grid item xs={12} md={6}>
            <Box
              ref={statsRef}
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                rowGap: { xs: 5, md: 6 },
                columnGap: 2,
                maxWidth: 640,
                mx: "auto",
              }}
            >
              {STATS.map((s) => (
                <CircleStat key={s.label} {...s} t={t} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}