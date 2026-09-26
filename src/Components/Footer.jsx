import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ACCENT, ACCENT_HOVER } from "../Theme";
import { Link } from "react-router-dom";
const BG = "#2c2422";
const LINE = "1px solid rgba(255,255,255,.15)";
const QUICK_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];
const SERVICES = [
  { label: "Legal", path: "/legal" },
  { label: "License Case", path: "/license-case" },
  { label: "Criminal Lawyer", path: "/criminal-lawyer" },
  { label: "Company Legal", path: "/company-legal" },
];
const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
  { icon: YouTubeIcon, label: "YouTube", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
];
const LEGAL_LINKS = ["Privacy Policy", "Disclaimer", "Term Of Service"];

function Logo() {
  return (
    <Box
      to="/"
      sx={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        lineHeight: 0,
      }}
    >
      <Box
        component="img"
        src="/assets/logo.png"
        alt="logo"
        sx={{
          height: { xs: 44, md: 70 },
          width: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}

function FooterHeading({ children }) {
  return (
    <Typography
      component="h3"
      sx={{
        color: "#fff",
        fontWeight: 700,
        fontSize: { xs: 24, md: 26 },
        mb: 2.5,
      }}
    >
      {children}
    </Typography>
  );
}
function LinkList({ items }) {
  return (
    <Stack component="ul" spacing={1.9} sx={{ listStyle: "none", m: 0, p: 0 }}>
      {items.map((item) => (
        <li key={item.path}>
          <Box
            component={Link}
            to={item.path}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.25,
              color: "#fff",
              fontSize: 15,
              textDecoration: "none",
              transition: "color .2s",
              "&:hover": { color: ACCENT },
            }}
          >
            <ChevronRightIcon sx={{ color: ACCENT, fontSize: 22, ml: -0.5 }} />
            {item.label}
          </Box>
        </li>
      ))}
    </Stack>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: BG, borderTop: `6px solid ${ACCENT}`, color: "#fff" }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        {/* Main columns */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1.9fr 1fr 1fr 1fr",
            },
            columnGap: { sm: 5, md: 4 },
            rowGap: 5,
            pt: { xs: 7, md: 15 },
            pb: { xs: 6, md: 6 },
          }}
        >
          {/* Brand */}
          <Box sx={{ gridColumn: { sm: "1 / -1", md: "auto" } }}>
            <Logo />
            <Typography
              sx={{
                fontSize: 15,
                lineHeight: 1.5,
                maxWidth: 440,
                mt: 3.5,
                mb: 4.5,
              }}
            >
              Gen Attorneys – Was Designed For Legal & Law Firm Business And
              Services. This kit work with elementor PRO & Standar Hello Theme.
            </Typography>
            <Stack direction="row" spacing={1.25}>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  aria-label={label}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "3px",
                    bgcolor: ACCENT,
                    color: "#fff",
                    "&:hover": { bgcolor: ACCENT_HOVER },
                  }}
                >
                  <Icon sx={{ fontSize: 22 }} />
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Quick links */}
          <Box>
            <FooterHeading>Quick Links</FooterHeading>
            <LinkList items={QUICK_LINKS} />
          </Box>

          {/* Services */}
          <Box>
            <FooterHeading>Our Services</FooterHeading>
            <LinkList items={SERVICES} />
          </Box>

          {/* Contact */}
          <Box>
            <FooterHeading>Contact Us</FooterHeading>
            <Typography
              sx={{ fontSize: 15, lineHeight: 1.5, maxWidth: 260, mb: 3.5 }}
            >
              Lumbung Hidup Street Madiun City East Java
            </Typography>
            <Stack spacing={1.75}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon sx={{ color: ACCENT, fontSize: 22 }} />
                <Typography sx={{ fontSize: 15 }}>
                  ( +62 ) 123 456 789
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: ACCENT, fontSize: 22 }} />
                <Typography sx={{ fontSize: 15 }}>
                  Hello@GenAttorneys.com
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            borderTop: LINE,
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: 15 }}>
            Allright Reserved - Gen Attorneys
          </Typography>
          <Stack direction="row" flexWrap="wrap" rowGap={1}>
            {LEGAL_LINKS.map((l, i) => (
              <Box
                key={l}
                component="a"
                href="#"
                sx={{
                  color: "#fff",
                  fontSize: 15,
                  textDecoration: "none",
                  pl: i === 0 ? 0 : 3,
                  pr: i === LEGAL_LINKS.length - 1 ? 0 : 3,
                  borderLeft: i === 0 ? "none" : LINE,
                  "&:hover": { color: ACCENT },
                }}
              >
                {l}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
