import { Box, Container, Typography } from "@mui/material";
import { ACCENT } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

const STEPS = [
  {
    title: "Find Our Branch On Your City Area",
    text: "We bring the right people together to challenge established thinking and drive transform in 2020",
  },
  {
    title: "Lets Make Consultation With Us",
    text: "We bring the right people together to challenge established thinking and drive transform in 2020",
  },
  {
    title: "We Make Solution For Your Case",
    text: "We bring the right people together to challenge established thinking and drive transform in 2020",
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
