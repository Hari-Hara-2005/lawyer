import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlineOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { ACCENT } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

// Background image
const BG_IMAGE =
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80";

const TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.";

const REASONS = [
  {
    title: "15 Years Experience",
    icon: CalendarMonthOutlinedIcon,
  },
  {
    title: "Professional Lawyer",
    icon: PersonOutlineIcon,
  },
  {
    title: "Have Many Team Work",
    icon: GroupsOutlinedIcon,
  },
];

const CHECKS = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
];

export default function WhyChoose() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        color: "#fff",

        py: {
          xs: 7,
          sm: 9,
          md: 13,
        },

        backgroundImage: `
          linear-gradient(
            rgba(20, 14, 12, 0.62),
            rgba(20, 14, 12, 0.62)
          ),
          url(${BG_IMAGE})
        `,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#2a201c",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1460,
          mx: "auto",
          px: {
            xs: 2.5,
            sm: 4,
            md: 5,
          },
        }}
      >
        <Grid
          container
          columnSpacing={{
            xs: 0,
            md: 6,
            lg: 10,
          }}
          rowSpacing={{
            xs: 6,
            md: 0,
          }}
          alignItems="center"
        >
          {/* =========================
              LEFT SIDE
          ========================= */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "rgba(43, 35, 33, 0.97)",
                borderRadius: "4px",

                px: {
                  xs: 3,
                  sm: 4,
                  md: 6,
                  lg: 7,
                },

                py: {
                  xs: 4,
                  sm: 5,
                  md: 6,
                  lg: 7,
                },
              }}
            >
              <Stack
                direction="column"
                spacing={{
                  xs: 4,
                  md: 4.5,
                }}
              >
                {REASONS.map(({ title, icon: Icon }) => (
                  <Stack
                    key={title}
                    direction="row"
                    alignItems="flex-start"
                    spacing={{
                      xs: 2,
                      sm: 2.5,
                      md: 2,
                    }}
                    sx={{
                      width: "100%",
                    }}
                  >
                    {/* ICON */}
                    <Box
                      sx={{
                        width: {
                          xs: 52,
                          md: 68,
                        },

                        minWidth: {
                          xs: 52,
                          md: 68,
                        },

                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",

                        pt: 0.5,
                      }}
                    >
                      <Icon
                        sx={{
                          color: ACCENT,
                          fontSize: {
                            xs: 48,
                            sm: 56,
                            md: 64,
                          },
                        }}
                      />
                    </Box>

                    {/* TEXT */}
                    <Box
                      sx={{
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 600,

                          fontSize: {
                            xs: 21,
                            sm: 23,
                            md: 26,
                          },

                          lineHeight: 1.25,
                          mb: 0.8,
                        }}
                      >
                        {title}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 14,
                            sm: 15,
                          },

                          lineHeight: 1.6,
                          color: "rgba(255,255,255,0.78)",
                        }}
                      >
                        {TEXT}
                      </Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* =========================
              RIGHT SIDE
          ========================= */}

          <Grid
            size={{
              xs: 12,
              md: 6,
            }}
          >
            <Box
              sx={{
                width: "100%",

                pl: {
                  xs: 0,
                  md: 2,
                  lg: 3,
                },
              }}
            >
              <SectionTitle
                eyebrow="Why Choice Us"
                title="Why You Choice Our Legal & Lawyer Services"
                light
                maxWidth={700}
                sx={{
                  mb: 2.5,
                }}
              />

              <Typography
                sx={{
                  fontSize: {
                    xs: 15,
                    md: 16,
                  },

                  lineHeight: 1.7,
                  maxWidth: 680,
                  mb: 3.5,
                  color: "rgba(255,255,255,0.82)",
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Typography>

              {/* CHECK LIST */}
              <Stack direction="column" spacing={1.8}>
                {CHECKS.map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    alignItems="center"
                    spacing={1.5}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: ACCENT,
                        fontSize: 23,
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 14,
                          md: 15,
                        },

                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
