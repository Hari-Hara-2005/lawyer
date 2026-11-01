import { Box, Container, Typography } from "@mui/material";
import { ACCENT } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

function PointingHand() {
  return (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      aria-hidden
      sx={{
        width: { xs: 40, md: 46 },
        height: { xs: 40, md: 46 },
        flexShrink: 0,
        fill: "none",
        stroke: ACCENT,
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        filter: "drop-shadow(0 2px 6px rgba(185, 89, 47, 0.22))",
        transform: {
          xs: "rotate(90deg)",
          md: "none",
        },
      }}
    >
      <rect x="3" y="14" width="6" height="25" rx="1.5" />
      <path d="M12 16 H41 a3 3 0 0 1 0 6 H31 a2.5 2.5 0 0 1 0 5 a2.5 2.5 0 0 1 0 5 a2 2 0 0 1 0 4 H27 L24 40 H14 L12 36 Z" />
    </Box>
  );
}

const STEPS = [
  {
    stepNumber: "Step 01",
    roman: "I",
    title: "Understanding",
    commitment: "Factual Discovery & Client Privilege",
    text: "We prioritize your legal queries and problems, understanding that issues often have underlying complexities beyond what is immediately visible. We believe in dedicating ample time to listen to our clients, thoroughly understanding their concerns, and avoiding jumping to conclusions prematurely. Our approach involves delving deep into the matter, considering all relevant legal complexities, and providing comprehensive solutions tailored to your specific needs.",
  },
  {
    stepNumber: "Step 02",
    roman: "II",
    title: "Strategy and Planning",
    commitment: "Strategic Research & Senior Counsel",
    text: "Our dedicated team of lawyers and researchers will promptly address your legal issue and develop a comprehensive action plan. Utilizing our expertise and experience, we will formulate a strategic approach to vigorously defend and advocate for your position, always keeping your best interests at the forefront. Our team's combined knowledge and solution-oriented mindset ensure a streamlined and effective process throughout your legal journey.",
  },
  {
    stepNumber: "Step 03",
    roman: "III",
    title: "Implementation",
    commitment: "Decisive Representation & Parity",
    text: "An action plan without a robust implementation mechanism is prone to failure. When it comes to resolving legal problems, a solid course of action must be accompanied by effective implementation. We firmly believe in executing our plans comprehensively to yield fruitful results. Our team is dedicated to achieving parity between our planning and performance, ensuring that our strategies are effectively carried out.",
  },
];

export default function Process({
  backgroundColor = "#fff",
  textColor = "#111",
}) {
  const isDark =
    backgroundColor === "#2D2424" ||
    backgroundColor.toLowerCase().includes("2d2424") ||
    textColor === "#fff" ||
    textColor === "#ffffff";

  return (
    <Box
      component="section"
      sx={{
        bgcolor: backgroundColor,
        py: { xs: 8, md: 11 },
        position: "relative",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1440,
          px: { xs: 2.5, sm: 4 },
        }}
      >
        {/* Section Heading */}
        <SectionTitle
          eyebrow="Our Process"
          title="How We Work"
          align="center"
          textColor={textColor}
          sx={{
            mb: 1.5,
            color: textColor,
          }}
        />

        <Typography
          sx={{
            color: isDark ? "rgba(255, 255, 255, 0.75)" : "#64748b",
            fontSize: { xs: 15, md: 16.5 },
            lineHeight: 1.6,
            textAlign: "center",
            maxWidth: 680,
            mx: "auto",
            mb: { xs: 5, md: 7 },
            fontStyle: "normal",
            letterSpacing: "0.2px",
          }}
        >
          Our approach to every matter
        </Typography>

        {/* 3 Process Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "stretch",
            justifyContent: "space-between",
            gap: {
              xs: 3,
              md: 0,
            },
          }}
        >
          {STEPS.map((step, i) => (
            <Box
              key={step.title}
              sx={{
                display: "contents",
              }}
            >
              {/* Premium Architectural Legal Card */}
              <Box
                data-aos="fade-up"
                data-aos-delay={i * 120 + 100}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    md: "1 1 0",
                  },
                  width: {
                    xs: "100%",
                    md: "auto",
                  },
                  alignSelf: "stretch",
                  minWidth: 0,
                  bgcolor: isDark ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.12)"
                    : "1px solid rgba(15, 23, 42, 0.09)",
                  borderTop: `4px solid ${ACCENT}`,
                  borderRadius: "8px",
                  p: {
                    xs: 3.5,
                    sm: 4.5,
                    md: 5,
                  },
                  boxShadow: isDark
                    ? "0 12px 36px rgba(0, 0, 0, 0.45)"
                    : "0 8px 30px -4px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: isDark
                      ? "0 22px 50px rgba(0, 0, 0, 0.65)"
                      : "0 18px 40px -4px rgba(185, 89, 47, 0.14), 0 4px 10px rgba(0, 0, 0, 0.03)",
                    borderColor: isDark
                      ? "rgba(255, 255, 255, 0.3)"
                      : ACCENT,
                  },
                }}
              >
                {/* Subtle Roman Numeral Watermark in Top-Right */}
                <Typography
                  aria-hidden
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 22,
                    fontSize: { xs: 64, md: 80 },
                    fontWeight: 900,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: isDark
                      ? "rgba(255, 255, 255, 0.04)"
                      : "rgba(185, 89, 47, 0.08)",
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                    letterSpacing: "-2px",
                  }}
                >
                  {step.roman}
                </Typography>

                {/* Step Pill / Seal Tag */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    bgcolor: isDark
                      ? "rgba(185, 89, 47, 0.16)"
                      : "rgba(185, 89, 47, 0.08)",
                    border: `1px solid ${
                      isDark
                        ? "rgba(185, 89, 47, 0.35)"
                        : "rgba(185, 89, 47, 0.22)"
                    }`,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "4px",
                    mb: 2.25,
                    width: "fit-content",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: ACCENT,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: 1.8,
                      textTransform: "uppercase",
                    }}
                  >
                    Phase {step.roman}
                  </Typography>
                  <Box
                    sx={{
                      width: 3.5,
                      height: 3.5,
                      borderRadius: "50%",
                      bgcolor: ACCENT,
                      opacity: 0.7,
                    }}
                  />
                  <Typography
                    sx={{
                      color: isDark ? "rgba(255, 255, 255, 0.7)" : "#64748b",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                    }}
                  >
                    {step.stepNumber}
                  </Typography>
                </Box>

                {/* Card Title */}
                <Typography
                  component="h3"
                  sx={{
                    color: isDark ? "#ffffff" : "#0f172a",
                    fontWeight: 800,
                    lineHeight: 1.25,
                    fontSize: {
                      xs: 22,
                      sm: 24,
                      md: 25,
                    },
                    letterSpacing: "-0.4px",
                    mb: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </Typography>

                {/* Refined Prestige Divider */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2.75,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 2.5,
                      bgcolor: ACCENT,
                      borderRadius: "2px",
                    }}
                  />
                  <Box
                    sx={{
                      width: 8,
                      height: 2.5,
                      bgcolor: isDark ? "rgba(255, 255, 255, 0.2)" : "#cbd5e1",
                      borderRadius: "2px",
                    }}
                  />
                </Box>

                {/* Clean Paragraph Text */}
                <Typography
                  sx={{
                    color: isDark
                      ? "rgba(255, 255, 255, 0.76)"
                      : "#475569",
                    fontSize: 15,
                    lineHeight: 1.76,
                    flexGrow: 1,
                    mb: 3,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.text}
                </Typography>

                {/* Card Footer Detail / Practice Commitment */}
                <Box
                  sx={{
                    pt: 2.25,
                    mt: "auto",
                    borderTop: isDark
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid #f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: isDark ? "rgba(255, 255, 255, 0.45)" : "#94a3b8",
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                    }}
                  >
                    Commitment
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: ACCENT,
                      letterSpacing: 0.2,
                      textAlign: "right",
                    }}
                  >
                    {step.commitment}
                  </Typography>
                </Box>
              </Box>

              {/* Pointing Hand Flow Connector */}
              {i < STEPS.length - 1 && (
                <Box
                  data-aos="fade-in"
                  data-aos-delay={i * 120 + 160}
                  sx={{
                    px: {
                      md: 2,
                      lg: 3.5,
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    my: {
                      xs: 1.5,
                      md: 0,
                    },
                  }}
                >
                  <PointingHand />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
