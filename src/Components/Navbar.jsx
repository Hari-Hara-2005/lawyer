import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { ACCENT, ACCENT_HOVER, LINE, theme } from "../Theme.js";

const NAV = [
  { label: "Home", path: "/" },
  { label: "About Page", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const SOCIALS = [FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon];

/* =========================
   LOGO
========================= */

function Logo() {
  return (
    <Box
      component={Link}
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
        alt="Lawak"
        sx={{
          height: { xs: 44, md: 70 },
          width: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}

/* =========================
   TOP BAR
========================= */

function TopBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py:3,
        display: { xs: "none", sm: "flex" },
        width: "100%",
      }}
    >
      {/* LEFT INFORMATION */}
      <Stack direction="row" alignItems="center" spacing={4}>
        <Stack direction="row" spacing={1} alignItems="center">
          <LocationOnIcon sx={{ color: ACCENT, fontSize: 22 }} />
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            MADIUN EAST JAVA
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <PhoneIcon sx={{ color: ACCENT, fontSize: 22 }} />
          <Typography sx={{ fontSize: 13, fontWeight: 500 }}>
            (+62) 123 456 789
          </Typography>
        </Stack>
      </Stack>

      {/* SOCIAL ICONS - EXTREME RIGHT */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2.5}
        sx={{
          ml: "auto",
        }}
      >
        {SOCIALS.map((Icon, i) => (
          <Icon
            key={i}
            sx={{
              fontSize: 20,
              cursor: "pointer",
              color: "#fff",
              "&:hover": {
                color: ACCENT,
              },
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
}

/* =========================
   DESKTOP NAVIGATION
========================= */

function DesktopLinks() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={{ md: 3, lg: 5 }}
      sx={{ flex: 1 }}
    >
      {NAV.map((item) => (
        <Button
          key={item.label}
          component={Link}
          to={item.path}
          disableRipple
          sx={{
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            fontSize: 16,
            p: 0,
            minWidth: 0,
            "&:hover": {
              background: "none",
              color: ACCENT,
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Stack>
  );
}

/* =========================
   MOBILE DRAWER
========================= */

function MobileDrawer({ open, onClose }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 290, bgcolor: "#1a1412", color: "#fff" },
      }}
    >
      {/* Close Button */}
      <Stack direction="row" justifyContent="flex-end" p={1}>
        <IconButton
          onClick={onClose}
          sx={{ color: "#fff" }}
          aria-label="Close menu"
        >
          <CloseIcon />
        </IconButton>
      </Stack>

      {/* Navigation */}
      <List>
        {NAV.map((item) => (
          <ListItemButton
            key={item.label}
            component={Link}
            to={item.path}
            onClick={onClose}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItemButton>
        ))}
      </List>

      {/* Quotation Button */}
      <Box p={2}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Get a Quotation
        </Button>
      </Box>
    </Drawer>
  );
}

/* =========================
   NAVBAR
========================= */

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box component="header" sx={{ color: "#fff" }}>
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        {/* Top Bar */}
        <TopBar />

        {/* Main Navigation */}
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            borderTop: { sm: LINE },
            borderBottom: { sm: LINE },
            height: { xs: 90, md: 92 },
          }}
        >
          {/* LEFT - LOGO */}
          <Logo />

          {isMobile ? (
            /* MOBILE */
            <Box sx={{ ml: "auto" }}>
              <IconButton
                onClick={() => setDrawer(true)}
                sx={{ color: "#fff" }}
                aria-label="Open menu"
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          ) : (
            /* DESKTOP */
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ flex: 1, ml: { md: 4, lg: 6 } }}
            >
              {/* CENTER NAVIGATION */}
              <DesktopLinks />

              {/* RIGHT BUTTON */}
              <Box sx={{ ml: { md: 3, lg: 5 }, flexShrink: 0 }}>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    px: 4,
                    py: 1.3,
                    mt: 2.5,
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: 15.5,
                    borderRadius: "5px",
                    "&:hover": { bgcolor: ACCENT_HOVER },
                  }}
                >
                  Get a Quotation
                </Button>
              </Box>
            </Stack>
          )}
        </Stack>
      </Container>

      {/* MOBILE DRAWER */}
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />
    </Box>
  );
}
