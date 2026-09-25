import { Box, Container, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ACCENT } from "../Theme";

const DESCRIPTION =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

const SERVICE_ROWS = [
  {
    title: "Family Lawyer Services",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    points: ["Land dispute", "Inheritance", "Family problem"],
  },
  {
    title: "Criminal Lawyer Services",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941b78d5e?auto=format&fit=crop&w=1200&q=80",
    points: ["Land dispute", "Inheritance", "Family problem"],
  },
];

const ServiceRow = ({ service, reverse }) => (
  <Grid
    container
    spacing={{ xs: 4, md: 8 }}
    alignItems="center"
    direction={reverse ? "row-reverse" : "row"}
  >
    <Grid size={{ xs: 12, md: 6 }}>
      <Box
        component="img"
        src={service.image}
        alt={service.title}
        sx={{
          width: "100%",
          height: { xs: 260, md: 465 },
          objectFit: "cover",
          borderRadius: 1,
          display: "block",
        }}
      />
    </Grid>

    <Grid size={{ xs: 12, md: 6 }}>
      <Typography
        sx={{
          color: ACCENT,
          fontSize: 14,
          letterSpacing: 2,
          textTransform: "uppercase",
          mb: 1.5,
        }}
      >
        Our Services
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 32, md: 44 },
          lineHeight: 1.2,
          mb: 3,
          color: "#262626",
        }}
      >
        {service.title}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: 15, lineHeight: 1.7, mb: 3 }}>
        {DESCRIPTION}
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, mb: 4 }}>
        {service.points.map((point) => (
          <Box
            component="li"
            key={point}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              color: "#666",
              fontSize: 15,
              mb: 1.5,
            }}
          >
            <CheckCircleIcon sx={{ color: ACCENT, fontSize: 22 }} />
            {point}
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        disableElevation
        sx={{
          bgcolor: ACCENT,
          color: "#fff",
          borderRadius: 0,
          px: 4,
          py: 1.5,
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { bgcolor: "#a34f30" },
        }}
      >
        Get a Quotation
      </Button>
    </Grid>
  </Grid>
);

const ServiceDetails = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 }, py: 10 }}
    >
      {SERVICE_ROWS.map((service, i) => (
        <Box key={service.title} sx={{ mb: { xs: 8, md: 14 } }}>
          <ServiceRow service={service} reverse={i % 2 === 1} />
        </Box>
      ))}
    </Container>
  );
};

export default ServiceDetails;
