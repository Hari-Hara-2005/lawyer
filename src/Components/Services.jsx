import { Box, Container, Typography } from "@mui/material";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import { ACCENT } from "../Theme";
import SectionTitle from "../Components/SectionTitle";

// Replace with your own background photo
const BG_IMAGE =
  "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1920&q=80";

const DARK = "#241c19";
const TEXT =
  "We bring the right people together to challenge established thinking and drive transform in 2020";

const SERVICES = [
  { title: "Property acquisition support", icon: GroupsOutlinedIcon, filled: false },
  { title: " Family disputes resolution", icon: HandshakeOutlinedIcon, filled: true },
  {
    title: "Community living disputes resolution",
    icon: AccountBalanceWalletOutlinedIcon,
    filled: false,
  },
  { title: "Corporate advising", icon: VerifiedUserOutlinedIcon, filled: true },
  { title: "Copy rights and trade  mark", icon: WorkOutlineOutlinedIcon, filled: false },
  { title: "Contract advising", icon: FindInPageOutlinedIcon, filled: true },
   { title: "Transaction structuring", icon: FindInPageOutlinedIcon, filled: true },
];

function ServiceCard({ title, icon: Icon, filled }) {
  // Filled cards: orange background, dark icon + link. Outlined: orange icon + link.
  const fg = filled ? DARK : ACCENT;
  return (
    <Box
      sx={{
        minHeight: 300,
        px: { xs: 3, md: 4.4 },
        py: { xs: 4, md: 4.4 },
        border: "1px solid rgba(255,255,255,.14)",
        bgcolor: filled ? ACCENT : "transparent",
        borderColor: filled ? ACCENT : "rgba(255,255,255,.14)",
        transition: "background-color .25s, border-color .25s",
        "& .svc-icon, & .svc-link": {
          color: fg,
          transition: "color .25s, border-color .25s",
        },
        "& .svc-link": { borderBottom: `2px solid ${fg}` },
        "&:hover": {
          bgcolor: ACCENT,
          borderColor: ACCENT,
          "& .svc-icon, & .svc-link": { color: DARK },
          "& .svc-link": { borderBottomColor: DARK },
        },
      }}
    >
      <Icon
        className="svc-icon"
        sx={{ fontSize: 64, mb: 1.5, display: "block" }}
      />
      <Typography
        component="h3"
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: 22, md: 24 },
          mb: 2.25,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ color: "#fff", fontSize: 15, lineHeight: 1.5, mb: 3.25 }}
      >
        {TEXT}
      </Typography>
      <Box
        component="a"
        href="#"
        className="svc-link"
        sx={{
          display: "inline-block",
          fontSize: 15,
          textDecoration: "none",
          pb: 0.5,
        }}
      >
        Get a Quotation
      </Box>
    </Box>
  );
}

export default function Services() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 7, md: 10 },
        backgroundImage: `linear-gradient(rgba(20,14,12,.82), rgba(20,14,12,.82)), url(${BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#1a1412",
      }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 }, position: "relative" }}
      >
        {/* Decorative gavel, top right */}
        <GavelOutlinedIcon
          aria-hidden
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: 10,
            right: { md: 32 },
            fontSize: 120,
            color: ACCENT,
          }}
        />

        <SectionTitle
          eyebrow="What We Do"
          textColor="#fff"
          title="Our Legal & Lawyer Service Provided"
          light
          sx={{ mb: 2.5 }}
        />
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: 15, md: 16 },
            lineHeight: 1.45,
            maxWidth: 660,
            mb: { xs: 5, md: 7 },
          }}
        >
          From property acquisition and contract structuring to dispute resolution
          and corporate governance, we deliver strategic legal solutions tailored to your needs.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.5, md: 3.75 },
          }}
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
