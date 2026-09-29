import { Box, Container, Typography, Button, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ACCENT } from "../Theme";

// ---- WhatsApp config ----
// Use international format, digits only, no "+", no spaces, no leading 0.
const WHATSAPP_NUMBER = "6212345 6789".replace(/\s+/g, "");

function openWhatsAppQuotation(serviceTitle) {
  const message = `Hello, I'm interested in getting a quotation for your "${serviceTitle}".`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const SERVICE_ROWS = [
  {
    title: "Criminal Cases",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Filing criminal Complaints",
      "Initiating Cheque bounce proceedings",
      "Quash of FIR",
      "Bails & Anticipatory bails",
      "POSCO cases",
      "Domestic violence cases",
    ],
  },
  {
    title: "Civil Cases",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    points: [
      "Family Disputes",
      "Matrimonial Disputes",
      "Money recovery",
      "Contractual disputes",
      "Labour disputes",
      "Property disputes",
      "Writs",
      "Consumer disputes",
      "NCLT/NCLAT cases",
      "Arbitration & Reconciliation",
      "SARFEASI case",
      "Real Estate cases",
      "RERA",
    ],
  },
  {
    title: "Drafting & Documentations",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBqjwdjklpZ-T7wa-CbpopJ9P8k3NPn8nqWT-Y02S76oZ_jpST7yk3-g&s=10",
    points: [
      "Legal Opinion/Title Due Diligence",
      "Contract Drafting",
      "Transaction structuring & documentation",
      "Transfer of property/Ownership/authority",
      "Sale / Settlement / Release / Partition",
      "Gift / Will / Assignment / Power of Attorney",
      "Sale Certificate",
      "Agreement drafting",
      "Sale / Construction / Joint Development",
      "Rental / Lease / MOU",
      "Hire Purchase / Loan",
      "Risk Analysis Report",
      "Inspection Reports",
    ],
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

      {/* Points list: 1 column on mobile, 2 columns from tablet up */}
      <Box
        component="ul"
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          mb: 4,
          columnCount: { xs: 1, sm: 2 },
          columnGap: 4,
        }}
      >
        {service.points.map((point) => (
          <Box
            component="li"
            key={point}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              color: "#666",
              fontSize: 14,
              mb: 1.5,
              breakInside: "avoid",
            }}
          >
            <CheckCircleIcon
              sx={{ color: ACCENT, fontSize: 20, mt: "2px", flexShrink: 0 }}
            />
            {point}
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        disableElevation
        onClick={() => openWhatsAppQuotation(service.title)}
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
