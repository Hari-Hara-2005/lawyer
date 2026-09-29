import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { ACCENT, ACCENT_HOVER } from "../Theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CONTACT_EMAIL = "godlygen@yahoo.in";
const CONTACT_PHONE = "+91 9884483327";

const FOUNDER_PHOTO = "/assets/image.png";

const FOUNDER_STORY = [
  {
    heading: "A First-Generation Lawyer",
    paragraphs: [
      "He is a first-generation lawyer. No one in his family practised law before him, and he came to the profession knowing first-hand what a long court case means for an ordinary family.",
    ],
  },
  {
    heading: "Law School and Moot Courts",
    paragraphs: [
      "During his days at Central Law College, he took part in many Moot Court Competitions all over India and debates within the college itself. The atmosphere at Central Law College is different compared to other law schools, be it National Law Universities or any other law school. The vibe of studying there, and the exposure one gets, develops the personality of an individual holistically.",
      "His internship stints in different offices after classes also helped him in making his decision towards taking up litigation as a career.",
    ],
  },
  {
    heading: "Early Career",
    paragraphs: [
      "After his graduation in 2004, he worked as a Junior Law Associate with prominent lawyers like Bhuvanesh Kumar, and later on with law firms such as Ojas Law Firm and other corporate companies, before going fully independent.",
      "All these associations helped him in becoming a better individual in his professional career, and maybe in life as well. The exposure of dealing with different kinds of people and complex situations has its advantages and disadvantages, which one tries to navigate.",
    ],
  },
  {
    heading: "How This Shapes His Practice Today",
    paragraphs: [
      "The above experience shapes how he works with clients today: he explains each step of the case in plain language and keeps them informed after every hearing.",
    ],
  },
  {
    heading: "Bar Enrollment and Practice Areas",
    paragraphs: [
      "He enrolled with the Bar Council of Tamil Nadu & Puducherry in 2005. His practice is centred on Civil law, including property disputes, family disputes, matrimonial disputes, money disputes, contractual disputes, consumer disputes, corporate breaches, and more.",
      "His experience includes work with think tanks, law firms, NGOs, independent advocates, the Chief Minister's Office, and retired judges.",
    ],
  },
  {
    heading: "Where He Practises",
    paragraphs: [
      "He now practises before the High Court of Madras (including the Madurai Bench), the District & Metropolitan courts, tribunals, and consumer forums across Tamil Nadu & Puducherry.",
    ],
  },
  {
    heading: "Beyond Litigation",
    paragraphs: [
      "Alongside litigation, he advises companies and startups on their legal needs and trains law students in litigation practice. He also writes regularly on legal issues to help people understand their rights and how to enforce them.",
    ],
  },
];

const OurStory = () => {
  return (
    <Box sx={{ bgcolor: "#fff", overflow: "hidden" }}>
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          bgcolor: "#1c1c1c",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            right: -120,
            bottom: -170,
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
            Who We Are
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 40, md: 62 },
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
              mb: 2.5,
            }}
          >
            Our Story
          </Typography>

          <Box
            sx={{
              width: 75,
              height: 4,
              bgcolor: ACCENT,
              borderRadius: 5,
            }}
          />
        </Container>
      </Box>

      {/* ================= INTRO ================= */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1180,
          px: { xs: 2.5, sm: 4 },
          py: { xs: 7, md: 12 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 9 }} alignItems="center">
          {/* IMAGE */}
          <Grid size={{ xs: 12, md: 4.5 }}>
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: 330, md: 380 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {/* Decorative background */}
              <Box
                sx={{
                  position: "absolute",
                  width: "82%",
                  height: "82%",
                  bgcolor: "#f2e4dc",
                  right: -18,
                  bottom: -18,
                  borderRadius: "4px",
                }}
              />

              {/* Image */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  borderRadius: "4px",
                  bgcolor: "#eee",
                  border: "8px solid #fff",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={FOUNDER_PHOTO}
                  alt="Godlygen, Founder"
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    "&:hover": {
                      transform: "scale(1.04)",
                    },
                  }}
                />
              </Box>

              {/* Experience badge */}
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  left: { xs: -5, md: -22 },
                  bottom: { xs: 18, md: 28 },
                  bgcolor: ACCENT,
                  color: "#fff",
                  px: 2.5,
                  py: 1.5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.16)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    opacity: 0.85,
                  }}
                >
                  Trusted Legal
                </Typography>

                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    mt: 0.3,
                  }}
                >
                  Experience & Integrity
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* QUOTE */}
          <Grid size={{ xs: 12, md: 7.5 }}>
            <Box
              sx={{
                position: "relative",
                pl: { xs: 0, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: 55,
                  height: 4,
                  bgcolor: ACCENT,
                  mb: 3,
                }}
              />

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
                Meet Our Founder
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 30, md: 43 },
                  lineHeight: 1.18,
                  color: "#222",
                  letterSpacing: "-0.8px",
                  mb: 3,
                }}
              >
                Dedicated to protecting
                <Box component="span" sx={{ color: ACCENT }}>
                  {" "}
                  your rights
                </Box>{" "}
                and interests.
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  bgcolor: "#faf7f5",
                  borderLeft: `4px solid ${ACCENT}`,
                  p: { xs: 2.5, md: 3.5 },
                  mb: 3.5,
                }}
              >
                <FormatQuoteIcon
                  sx={{
                    color: ACCENT,
                    fontSize: 38,
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: 16, md: 18 },
                    lineHeight: 1.9,
                    color: "#4a4a4a",
                    fontStyle: "italic",
                  }}
                >
                  "Hi, I'm Godlygen. I'm a Civil and Corporate attorney at Gen
                  Attorneys. I mostly help first-generation entrepreneurs, small
                  business owners, families, influencers, and path finders to
                  navigate problems that trigger charged emotional situations,
                  contract disputes, matrimonial and family disputes, risk
                  mitigation analysis on projects, reconciling irreconcilable
                  differences and disputes, tax cautiousness, and more — so they
                  can avoid costly, unscheduled bottlenecks and legal headaches
                  down the road."
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 19,
                  color: "#222",
                }}
              >
                Godlygen
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: ACCENT,
                  fontWeight: 600,
                  mt: 0.5,
                }}
              >
                Senior Associate, Civil & Corporate Law
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ================= STORY ================= */}
      <Box
        sx={{
          bgcolor: "#faf7f5",
          py: { xs: 8, md: 12 },
          borderTop: "1px solid #eee5df",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1180,
            px: { xs: 2.5, sm: 4 },
          }}
        >
          <Grid container spacing={{ xs: 5, md: 9 }}>
            {/* LEFT TITLE */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: { md: "sticky" },
                  top: { md: 30 },
                }}
              >
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
                  Founder&apos;s Story
                </Typography>

                <Typography
                  component="h2"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 30, md: 38 },
                    lineHeight: 1.2,
                    color: "#222",
                    letterSpacing: "-0.7px",
                    mb: 2.5,
                  }}
                >
                  From First-Generation Lawyer to Trusted Advocate
                </Typography>

                <Box
                  sx={{
                    width: 60,
                    height: 4,
                    bgcolor: ACCENT,
                    borderRadius: 3,
                    mb: 3,
                  }}
                />

                <Typography
                  sx={{
                    color: "#777",
                    fontSize: 15,
                    lineHeight: 1.8,
                    maxWidth: 330,
                  }}
                >
                  A journey built on experience, perseverance, and a commitment
                  to helping people navigate complex legal situations.
                </Typography>
              </Box>
            </Grid>

            {/* STORY CONTENT */}
            <Grid size={{ xs: 12, md: 8 }}>
              {FOUNDER_STORY.map((block, i) => (
                <Box
                  key={block.heading}
                  sx={{
                    position: "relative",
                    pb: 4.5,
                    mb: 4.5,
                    borderBottom:
                      i === FOUNDER_STORY.length - 1
                        ? "none"
                        : "1px solid #e5dcd6",
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Typography
                      sx={{
                        color: ACCENT,
                        fontSize: 13,
                        fontWeight: 700,
                        minWidth: 32,
                        pt: 0.5,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </Typography>

                    <Box>
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: 19, md: 22 },
                          color: "#222",
                          mb: 1.5,
                        }}
                      >
                        {block.heading}
                      </Typography>

                      {block.paragraphs.map((p, j) => (
                        <Typography
                          key={j}
                          sx={{
                            fontSize: 15.5,
                            lineHeight: 1.9,
                            color: "#555",
                            mb: j === block.paragraphs.length - 1 ? 0 : 1.5,
                          }}
                        >
                          {p}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= CTA ================= */}
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
            width: 350,
            height: 350,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.07)",
            right: -140,
            top: -170,
          }}
        />

        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1180,
            px: { xs: 2.5, sm: 4 },
            py: { xs: 8, md: 10 },
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 28, md: 38 },
              mb: 1.5,
            }}
          >
            Need Legal Guidance?
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.68)",
              fontSize: 16,
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Have a question about your case or need professional legal guidance?
            Get in touch with our team.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="contained"
                startIcon={<EmailIcon />}
                endIcon={<ArrowForwardIcon />}
                href={`mailto:${CONTACT_EMAIL}`}
                disableElevation
                sx={{
                  bgcolor: ACCENT,
                  color: "#fff",
                  borderRadius: "3px",
                  px: 3.5,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  minWidth: { xs: "100%", sm: 230 },
                  "&:hover": {
                    bgcolor: ACCENT_HOVER,
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                Email Us
              </Button>

              <Button
                variant="outlined"
                startIcon={<PhoneIcon />}
                href={`tel:${CONTACT_PHONE.replace(/\s+/g, "")}`}
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.35)",
                  borderRadius: "3px",
                  px: 3.5,
                  py: 1.5,
                  fontWeight: 600,
                  textTransform: "none",
                  minWidth: { xs: "100%", sm: 230 },
                  "&:hover": {
                    borderColor: ACCENT,
                    bgcolor: "rgba(185,89,47,0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                {CONTACT_PHONE}
              </Button>
            </Stack>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Box>
  );
};

export default OurStory;
