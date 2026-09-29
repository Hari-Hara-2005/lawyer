import { Box, Container, Typography } from "@mui/material";
import { ACCENT } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

const STEPS = [
  {
    title: "Understanding",
    text: "We prioritize your legal queries and problems, understanding that issues often have underlying complexities beyond what is immediately visible. We believe in dedicating ample time to listen to our clients, thoroughly understanding their concerns, and avoiding jumping to conclusions prematurely. Our approach involves delving deep into the matter, considering all relevant legal complexities, and providing comprehensive solutions tailored to your specific needs.",
  },
  {
    title: "Strategy and Planning",
    text: "Our dedicated team of lawyers and researchers will promptly address your legal issue and develop a comprehensive action plan. Utilizing our expertise and experience, we will formulate a strategic approach to vigorously defend and advocate for your position, always keeping your best interests at the forefront. Our team's combined knowledge and solution-oriented mindset ensure a streamlined and effective process throughout your legal journey.",
  },
  {
    title: "Implementation",
    text: "An action plan without a robust implementation mechanism is prone to failure. When it comes to resolving legal problems, a solid course of action must be accompanied by effective implementation. We firmly believe in executing our plans comprehensively to yield fruitful results. Our team is dedicated to achieving parity between our planning and performance, ensuring that our strategies are effectively carried out.",
  },
];

function PointingHand() {
  return (
    <Box
      component="svg"
      viewBox="0 0 48 48"
      aria-hidden
      sx={{
        width: 48,
        height: 48,
        flexShrink: 0,
        fill: "none",
        stroke: ACCENT,
        strokeWidth: 2.2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        transform: {
          xs: "rotate(90deg)",
          md: "none",
        },
      }}
    >
      <rect x="3" y="14" width="6" height="25" rx="1" />
      <path d="M12 16 H41 a3 3 0 0 1 0 6 H31 a2.5 2.5 0 0 1 0 5 a2.5 2.5 0 0 1 0 5 a2 2 0 0 1 0 4 H27 L24 40 H14 L12 36 Z" />
    </Box>
  );
}

export default function Process({
  backgroundColor = "#fff",
  textColor = "#111",
}) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: backgroundColor,
        py: { xs: 7, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1460,
          px: { xs: 2.5, sm: 4 },
        }}
      >
        {/* Heading */}

        <SectionTitle
          eyebrow="Our Procces"
          title="How We Work"
          align="center"
          textColor={textColor}
          sx={{
            mb: 2,
            color: textColor,
          }}
        />

        <Typography
          sx={{
            color: textColor,
            opacity: 0.7,
            fontSize: { xs: 15, md: 16 },
            lineHeight: 1.45,
            textAlign: "center",
            maxWidth: 720,
            mx: "auto",
            mb: { xs: 5, md: 6 },
          }}
        >
          Our approach to every matter
        </Typography>

        {/* Steps */}

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
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
              <Box
                sx={{
                  flex: {
                    md: "1 1 0",
                  },
                  width: {
                    xs: "100%",
                    md: "auto",
                  },
                  alignSelf: "stretch",
                  minWidth: 0,
                  border: `1px solid ${textColor}`,
                  borderRadius: "3px",
                  px: {
                    xs: 3,
                    md: 4.4,
                  },
                  pt: {
                    xs: 3.5,
                    md: 4.4,
                  },
                  pb: {
                    xs: 4,
                    md: 6,
                  },
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    color: textColor,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    fontSize: {
                      xs: 21,
                      md: 24,
                    },
                    mb: 2.5,
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  sx={{
                    color: textColor,
                    opacity: 0.7,
                    fontSize: 15,
                    lineHeight: 1.5,
                  }}
                >
                  {step.text}
                </Typography>
              </Box>

              {i < STEPS.length - 1 && (
                <Box
                  sx={{
                    px: {
                      md: 3.5,
                      lg: 7,
                    },
                    display: "flex",
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
