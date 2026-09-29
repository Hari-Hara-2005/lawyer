import { Box, Container, Typography, Grid, Stack } from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BalanceIcon from "@mui/icons-material/Balance";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ACCENT } from "../Theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ETHICS = [
  {
    number: "01",
    icon: AutoAwesomeIcon,
    title: "We thrive in intensity",
    text: "Our team is known for seamlessly executing high-value complex transactions. We have advised on a significant number of innovative, cross-border & domestic deals, some being the first of their kind in the legal ecosystem in India.",
  },
  {
    number: "02",
    icon: Diversity3Icon,
    title: "We revel in diversity",
    text: "Keeping in mind the intricate and multifaceted nature of transactions, our diverse teams have proficiently applied their knowledge across central pivots of key legal transactions across various practice areas, industries, and jurisdictions.",
  },
  {
    number: "03",
    icon: BalanceIcon,
    title: "We deliver balanced advice",
    text: "Through our insightful business intelligence, recognizing the commercial aspects of the situation, as well as the local political environment and wider risk and reputational considerations, we provide high-quality legal input.",
  },
  {
    number: "04",
    icon: SyncAltIcon,
    title: "We adapt and adopt",
    text: "We want clients to know they have made the right choice, every time! With our in-house and in-depth training, innovative approach, and constant feedback from clients, we proactively identify the risks involved in transactions and assist clients in shaping their business needs.",
  },
  {
    number: "05",
    icon: BusinessCenterIcon,
    title: "Proficiency in myriad sectors",
    text: "With deep industrial and services sectoral expertise, we assist our clients with the legal and regulatory framework. The Firm provides strategic advisory across a wide range of sectors.",
  },
  {
    number: "06",
    icon: VerifiedIcon,
    title: "Integrity matters to us above all",
    text: "Investing in our clients is not our only promise. Our mindset is a special mix of integrity, intelligence, energy, and strategy and reflects the backbone of our firm. It is this conspicuous character that defines us and enables us to be a trusted legal advisor.",
  },
];

const SECTORS = [
  "Aviation",
  "E-commerce",
  "Construction & Infrastructure",
  "Energy",
  "Fintech",
  "Insurance",
  "Manufacturing",
];

const OurEthics = () => {
  return (
    <Box sx={{ bgcolor: "#fff", overflow: "hidden" }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          bgcolor: "#1c1c1c",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            width: 450,
            height: 450,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.07)",
            right: -180,
            top: -220,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            border: "1px solid rgba(185,89,47,0.25)",
            left: -130,
            bottom: -160,
          },
        }}
      >
        <Navbar />

        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1180,
            px: { xs: 2.5, sm: 4 },
            py: { xs: 8, md: 12 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              color: ACCENT,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2.5,
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            What Defines Us
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 40, md: 62 },
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              mb: 2.5,
              maxWidth: 700,
            }}
          >
            Our Ethics
          </Typography>

          <Box
            sx={{
              width: 75,
              height: 4,
              bgcolor: ACCENT,
              borderRadius: 3,
              mb: 3,
            }}
          />

          <Typography
            sx={{
              color: "rgba(255,255,255,0.68)",
              fontSize: { xs: 15, md: 17 },
              lineHeight: 1.8,
              maxWidth: 650,
            }}
          >
            Our approach is built on integrity, intelligence, energy, strategy,
            and a deep commitment to delivering meaningful legal solutions for
            our clients.
          </Typography>
        </Container>
      </Box>

      {/* ================= INTRO ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1180,
          px: { xs: 2.5, sm: 4 },
          py: { xs: 7, md: 11 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Our Principles
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                color: "#222",
                fontSize: { xs: 30, md: 42 },
                lineHeight: 1.2,
                letterSpacing: "-0.7px",
              }}
            >
              The values behind
              <Box component="span" sx={{ color: ACCENT }}>
                {" "}
                our practice
              </Box>
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                color: "#555",
                fontSize: 16,
                lineHeight: 1.9,
              }}
            >
              We believe exceptional legal work requires more than technical
              knowledge. It requires understanding the commercial realities,
              risks, industries, and people behind every matter. These
              principles guide how we work with our clients and with one
              another.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* ================= ETHICS CARDS ================= */}
      <Box
        sx={{
          bgcolor: "#faf7f5",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid #eee5df",
          borderBottom: "1px solid #eee5df",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1180,
            px: { xs: 2.5, sm: 4 },
          }}
        >
          <Grid container spacing={3}>
            {ETHICS.map((item) => {
              const Icon = item.icon;

              return (
                <Grid key={item.number} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      height: "100%",
                      bgcolor: "#fff",
                      border: "1px solid #e8dfd9",
                      p: { xs: 3, md: 3.5 },
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 3,
                        bgcolor: ACCENT,
                        transition: "width 0.3s ease",
                      },
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                        "&::before": {
                          width: "100%",
                        },
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      mb={3}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: "#f7ebe5",
                          color: ACCENT,
                        }}
                      >
                        <Icon sx={{ fontSize: 24 }} />
                      </Box>

                      <Typography
                        sx={{
                          color: "#d9d0cb",
                          fontSize: 28,
                          fontWeight: 700,
                          lineHeight: 1,
                        }}
                      >
                        {item.number}
                      </Typography>
                    </Stack>

                    <Typography
                      component="h3"
                      sx={{
                        color: "#222",
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: 1.3,
                        mb: 1.7,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#666",
                        fontSize: 14.5,
                        lineHeight: 1.85,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* ================= SECTORS ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1180,
          px: { xs: 2.5, sm: 4 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 9 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Sector Expertise
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 30, md: 42 },
                lineHeight: 1.2,
                color: "#222",
                mb: 2.5,
              }}
            >
              Proficiency across
              <Box component="span" sx={{ color: ACCENT }}>
                {" "}
                myriad sectors
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: 15.5,
                lineHeight: 1.85,
              }}
            >
              With deep industrial and services sectoral expertise, we assist
              our clients with the legal and regulatory framework and provide
              strategic advisory across diverse industries.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={1.5}>
              {SECTORS.map((sector, index) => (
                <Grid key={sector} size={{ xs: 12, sm: 6 }}>
                  <Box
                    sx={{
                      border: "1px solid #e4dbd5",
                      px: 2.5,
                      py: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        bgcolor: ACCENT,
                        color: "#fff",
                        borderColor: ACCENT,
                        transform: "translateX(5px)",
                        "& .arrow": {
                          opacity: 1,
                          transform: "translateX(0)",
                        },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      {sector}
                    </Typography>

                    <ArrowForwardIcon
                      className="arrow"
                      sx={{
                        fontSize: 18,
                        opacity: 0,
                        transform: "translateX(-6px)",
                        transition: "all 0.25s ease",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* ================= INTEGRITY ================= */}
      <Box
        sx={{
          bgcolor: "#1c1c1c",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.07)",
            right: -180,
            top: -180,
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1180,
            px: { xs: 2.5, sm: 4 },
            py: { xs: 8, md: 11 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  width: 78,
                  height: 78,
                  border: `1px solid ${ACCENT}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: ACCENT,
                }}
              >
                <VerifiedIcon sx={{ fontSize: 38 }} />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 9 }}>
              <Typography
                sx={{
                  color: ACCENT,
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 2.2,
                  textTransform: "uppercase",
                  mb: 1.5,
                }}
              >
                Our Foundation
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 30, md: 42 },
                  lineHeight: 1.2,
                  mb: 2.5,
                }}
              >
                Integrity matters to us above all.
              </Typography>

              <Typography
                sx={{
                  color: "rgba(255,255,255,0.68)",
                  fontSize: 16,
                  lineHeight: 1.9,
                  maxWidth: 850,
                }}
              >
                Investing in our clients is not our only promise. Our mindset is
                a special mix of integrity, intelligence, energy, and strategy
                and reflects the backbone of our firm. It is this conspicuous
                character that defines us. It is what enables us to be the best
                for our clients — their guiding star, and their trusted legal
                advisor.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box sx={{ bgcolor: "#1c1c1c" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default OurEthics;
