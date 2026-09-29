import { Box, Container, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ConstructionIcon from "@mui/icons-material/Construction";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import DomainIcon from "@mui/icons-material/Domain";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import SectionTitle from "../Components/SectionTitle";

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

const ACCENT = "#B9592F";

export default function FeaturedCompany() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#faf9f7",
        py: { xs: 8, md: 12 },
        overflow: "hidden",
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          border: "1px solid rgba(185,89,47,0.08)",
          top: -150,
          right: -100,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          border: "1px solid rgba(185,89,47,0.06)",
          bottom: -100,
          left: -70,
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          maxWidth: 1400,
          px: { xs: 2.5, sm: 4, md: 5 },
        }}
      >
        {/* Section heading */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: 650,
            mx: "auto",
            mb: { xs: 5, md: 7 },
          }}
        >
          <SectionTitle
            eyebrow="Trusted By"
            title="Featured Company"
            textColor="#000"
            align="center"
          />

          <Typography
            sx={{
              mt: 2,
              color: "#777",
              fontSize: { xs: 14, md: 16 },
              lineHeight: 1.8,
            }}
          >
            Building trusted relationships with businesses and organizations
            through professional legal support and dedicated service.
          </Typography>
        </Box>

        {/* Company Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {COMPANIES.map(({ name, icon: Icon }, index) => (
            <Box
              key={name}
              sx={{
                position: "relative",
                minHeight: { xs: 125, md: 145 },
                p: { xs: 2.5, md: 3 },
                display: "flex",
                alignItems: "center",
                gap: 2.5,

                backgroundColor: "#fff",
                border: "1px solid #e9e5e1",
                borderRadius: "4px",

                boxShadow: "0 8px 30px rgba(0,0,0,0.035)",

                transition:
                  "transform .3s ease, box-shadow .3s ease, border-color .3s ease",

                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(185,89,47,0.35)",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                },

                "&:hover .icon-box": {
                  backgroundColor: ACCENT,
                  color: "#fff",
                  transform: "scale(1.05)",
                },

                "&:hover .arrow": {
                  opacity: 1,
                  transform: "translate(2px, -2px)",
                },
              }}
            >
              {/* Number */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#d5d0cc",
                  letterSpacing: 1,
                }}
              >
                0{index + 1}
              </Typography>

              {/* Icon */}
              <Box
                className="icon-box"
                sx={{
                  flexShrink: 0,
                  width: 58,
                  height: 58,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  backgroundColor: "#f8f3f0",
                  color: ACCENT,

                  transition: "all .3s ease",
                }}
              >
                <Icon sx={{ fontSize: 28 }} />
              </Box>

              {/* Company name */}
              <Box sx={{ pr: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 16 },
                    fontWeight: 700,
                    lineHeight: 1.45,
                    color: "#292929",
                  }}
                >
                  {name}
                </Typography>

                <Typography
                  sx={{
                    mt: 0.7,
                    fontSize: 12,
                    color: "#999",
                    letterSpacing: 0.4,
                  }}
                >
                  Trusted Client
                </Typography>
              </Box>

              {/* Arrow */}
              <ArrowOutwardIcon
                className="arrow"
                sx={{
                  position: "absolute",
                  right: 16,
                  bottom: 15,
                  fontSize: 17,
                  color: ACCENT,
                  opacity: 0,
                  transform: "translate(0, 0)",
                  transition: "all .3s ease",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Bottom line */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              width: 35,
              height: 1,
              backgroundColor: ACCENT,
            }}
          />

          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: "#999",
              textTransform: "uppercase",
              letterSpacing: 2,
            }}
          >
            Professional • Trusted • Experienced
          </Typography>

          <Box
            sx={{
              width: 35,
              height: 1,
              backgroundColor: ACCENT,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
