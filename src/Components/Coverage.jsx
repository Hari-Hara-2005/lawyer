import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ConstructionIcon from "@mui/icons-material/Construction";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DomainIcon from "@mui/icons-material/Domain";

import { ACCENT, ACCENT_HOVER } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

// Replace with your own photo of the team
const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80";

const MAP_SRC = "";

const CHECKS = [
  "15 Years Experience",
  "Have Professional Team",
  "Has Trusted More 500+ Clients",
];

// Company names
const COMPANIES = [
  {
    name: "SSPDL Limited",
    icon: BusinessIcon,
  },
  {
    name: "Fagun Company Limited",
    icon: CorporateFareIcon,
  },
  {
    name: "Beauty Etoile Private Limited",
    icon: ApartmentIcon,
  },
  {
    name: "SRI SATYA SAI CONSTRUCTIONS",
    icon: ConstructionIcon,
  },
  {
    name: "KOWSKI BUILDERS",
    icon: HomeWorkIcon,
  },
  {
    name: "JP ENTERPRISES",
    icon: DomainIcon,
  },
];

// Pin positions on the map
const PINS = [
  { left: 18.5, top: 23 },
  { left: 24, top: 54 },
  { left: 49, top: 44 },
  { left: 70, top: 28 },
  { left: 88, top: 67 },
];

const LANDMASSES = [
  "20,30 70,15 120,20 130,45 110,65 95,85 80,100 60,80 40,60 15,50",
  "115,8 150,5 155,25 130,30",
  "85,110 115,105 130,130 120,170 105,205 95,190 85,150",
  "195,40 235,30 250,50 230,70 200,65",
  "190,80 240,75 260,105 245,150 225,175 205,150 190,110",
  "245,30 330,20 395,35 400,75 370,100 330,110 300,90 270,75 250,60",
  "375,150 420,145 435,170 410,190 380,178",
];

function WorldMap() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        aspectRatio: "460 / 240",
      }}
    >
      {MAP_SRC ? (
        <Box
          component="img"
          src={MAP_SRC}
          alt=""
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      ) : (
        <Box
          component="svg"
          viewBox="0 0 460 240"
          aria-hidden
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <defs>
            <pattern
              id="dots"
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2.5" cy="2.5" r="1.3" fill="#e3e3e3" />
            </pattern>
          </defs>

          {LANDMASSES.map((pts, i) => (
            <polygon
              key={i}
              points={pts}
              fill="url(#dots)"
              stroke="url(#dots)"
              strokeWidth="6"
              strokeLinejoin="round"
            />
          ))}
        </Box>
      )}

      {PINS.map((p, i) => (
        <LocationOnIcon
          key={i}
          sx={{
            position: "absolute",
            left: `${p.left}%`,
            top: `${p.top}%`,
            transform: "translate(-50%, -100%)",
            color: ACCENT,
            fontSize: {
              xs: 24,
              md: 30,
            },
          }}
        />
      ))}
    </Box>
  );
}

function CompanyLogo({ icon: Icon, name }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
        px: 2,
        minHeight: 90,
        transition: "all .3s ease",

        "&:hover": {
          transform: "translateY(-3px)",
        },

        "&:hover .company-icon": {
          backgroundColor: ACCENT,
          color: "#fff",
        },

        "&:hover .company-name": {
          color: ACCENT,
        },
      }}
    >
      <Box
        className="company-icon"
        sx={{
          width: 48,
          height: 48,
          minWidth: 48,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f4f1ef",
          color: ACCENT,
          transition: "all .3s ease",
        }}
      >
        <Icon sx={{ fontSize: 25 }} />
      </Box>

      <Typography
        className="company-name"
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: 13,
            sm: 14,
            md: 15,
          },
          lineHeight: 1.3,
          color: "#555",
          transition: "color .3s ease",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}

export default function Coverage() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fff",
        py: {
          xs: 7,
          md: 10,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1460,
          px: {
            xs: 2.5,
            sm: 4,
          },
        }}
      >
        {/* Coverage */}
        <Grid
          container
          spacing={{
            xs: 5,
            md: 8,
          }}
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6}>
            <SectionTitle
              eyebrow="Many Coverage"
              title="We Are in Various Areas Coverage"
              sx={{
                mb: 2.5,
              }}
            />

            <Typography
              sx={{
                color: "#6b6b6b",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 540,
                mb: 3.5,
              }}
            >
              We provide professional legal services to businesses,
              organizations and individuals across various areas, supported by
              experienced professionals and a trusted network of clients.
            </Typography>

            <Stack spacing={1.5}>
              {CHECKS.map((c) => (
                <Stack
                  key={c}
                  direction="row"
                  spacing={1.25}
                  alignItems="center"
                >
                  <CheckCircleIcon
                    sx={{
                      color: ACCENT,
                      fontSize: 18,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#5a5a5a",
                      fontSize: 13,
                    }}
                  >
                    {c}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              pt: {
                md: 2,
              },
            }}
          >
            <WorldMap />
          </Grid>
        </Grid>

        {/* CTA Banner */}
        <Box
          sx={{
            position: "relative",
            mt: {
              xs: 7,
              md: 10,
            },
            minHeight: {
              xs: 520,
              md: 470,
            },
            backgroundImage: `
              linear-gradient(
                rgba(0,0,0,.68),
                rgba(0,0,0,.68)
              ),
              url(${BANNER_IMAGE})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#222",
            overflow: "hidden",
          }}
        >
          {/* Company Strip */}
          <Box
            sx={{
              mx: {
                xs: 0,
                md: 5,
              },

              bgcolor: "#fff",

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },

              rowGap: {
                xs: 0,
                md: 1,
              },

              alignItems: "center",

              justifyItems: "center",

              py: {
                xs: 2,
                md: 2.5,
              },

              boxShadow: "0 10px 35px rgba(0,0,0,.12)",
            }}
          >
            {COMPANIES.map((company) => (
              <CompanyLogo
                key={company.name}
                name={company.name}
                icon={company.icon}
              />
            ))}
          </Box>

          {/* CTA Content */}
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              px: 2.5,
              pt: {
                xs: 6,
                md: 7,
              },
              pb: {
                xs: 5,
                md: 6,
              },
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                mb: 1.5,
                px: 2,
                py: 0.6,
                border: "1px solid rgba(255,255,255,.35)",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Trusted Legal Partner
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                fontSize: {
                  xs: 30,
                  sm: 38,
                  md: 42,
                },
                mb: 2.5,
              }}
            >
              50+ Companies Trust Us
            </Typography>

            <Typography
              sx={{
                maxWidth: 600,
                mx: "auto",
                color: "rgba(255,255,255,.75)",
                fontSize: 14,
                lineHeight: 1.7,
                mb: 3.5,
              }}
            >
              Providing reliable legal guidance and professional support to
              businesses and clients across various sectors.
            </Typography>

            <Button
              variant="contained"
              disableElevation
              sx={{
                px: 3.5,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 14,
                bgcolor: ACCENT,

                "&:hover": {
                  bgcolor: ACCENT_HOVER,
                },
              }}
            >
              Get Consultation Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
