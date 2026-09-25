import { Box, Container, Typography, Link } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { ACCENT } from "../Theme";

const BG_IMAGE =
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80";

const DESCRIPTION =
  "We bring the right people together to challenge established thinking and drive transform in 2020";

const SERVICES = [
  { title: "Family Lawyer", Icon: GroupsIcon },
  { title: "Company Lawyer", Icon: ApartmentIcon },
  { title: "Legal & Copyright", Icon: CopyrightIcon },
  { title: "Family Lawyer", Icon: GroupsIcon },
  { title: "Company Lawyer", Icon: ApartmentIcon },
  { title: "Legal & Copyright", Icon: CopyrightIcon },
];

const ServicesInfo = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        mx: "auto",
        maxWidth: 1460,
        px: { xs: 2, sm: 4 },
        mt: { xs: -20, md: -5 },
        mb: 10,
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "relative",
          color: "#fff",
          py: { xs: 8, md: 10 },
          px: { xs: 3, md: 8 },
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(40,20,14,.92), rgba(40,20,14,.92)), url(${BG_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              color: ACCENT,
              fontSize: 13,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            We Can Do
          </Typography>
          <Typography
            component="h2"
            sx={{ fontWeight: 700, fontSize: { xs: 30, md: 40 }, mb: 2 }}
          >
            What You Need
          </Typography>
          <Typography
            sx={{
              maxWidth: 560,
              mx: "auto",
              fontSize: 14,
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          }}
        >
          {SERVICES.map(({ title, Icon }, i) => {
            const isLastCol = (i + 1) % 3 === 0;
            const isFirstRow = i < 3;
            return (
              <Box
                key={i}
                sx={{
                  px: { xs: 0, md: 5 },
                  py: 4,
                  borderRight: {
                    md: isLastCol ? "none" : "1px solid rgba(255,255,255,.12)",
                  },
                  borderBottom: {
                    md: isFirstRow ? "1px solid rgba(255,255,255,.12)" : "none",
                  },
                }}
              >
                <Icon sx={{ fontSize: 44, color: ACCENT, mb: 2 }} />
                <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1.5 }}>
                  {title}
                </Typography>
                <Typography
                  sx={{ fontSize: 13, lineHeight: 1.6, mb: 2, maxWidth: 300 }}
                >
                  {DESCRIPTION}
                </Typography>
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    color: ACCENT,
                    fontSize: 13,
                    textDecorationColor: ACCENT,
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Get a Quotation
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesInfo;
