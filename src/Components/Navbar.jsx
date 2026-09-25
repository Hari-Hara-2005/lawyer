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

import { Link, useLocation } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { ACCENT, ACCENT_HOVER, LINE, theme } from "../Theme.js";

const NAV = [
  { label: "Home", path: "/" },
  { label: "About Page", path: "/about" },
  { label: "Our Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

const SOCIALS = [FacebookIcon, TwitterIcon, YouTubeIcon, InstagramIcon];

// "/" only matches exactly; other paths match their own subtree too
function isActivePath(pathname, itemPath) {
  if (itemPath === "/") return pathname === "/";
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

/* =========================
   LOGO
========================= */

function Logo({ height = { xs: 44, md: 70 } }) {
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
          height,
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
        py: 3,
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
  const { pathname } = useLocation();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={{ md: 3, lg: 5 }}
      sx={{ flex: 1 }}
    >
      {NAV.map((item) => {
        const active = isActivePath(pathname, item.path);

        return (
          <Button
            key={item.label}
            component={Link}
            to={item.path}
            disableRipple
            aria-current={active ? "page" : undefined}
            sx={{
              position: "relative",
              color: active ? ACCENT : "#fff",
              textTransform: "none",
              fontWeight: 500,
              fontSize: 16,
              p: 0,
              minWidth: 0,
              "&:hover": {
                background: "none",
                color: ACCENT,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: -6,
                height: 2,
                bgcolor: ACCENT,
                transform: active ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "center",
                transition: "transform .2s ease",
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </Stack>
  );
}

/* =========================
   MOBILE DRAWER
========================= */

function MobileDrawer({ open, onClose }) {
  const { pathname } = useLocation();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: "82%", sm: 340 },
          maxWidth: 360,
          bgcolor: "#fff",
          color: "#1a1412",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Header: logo + close */}
      <Stack direction="row" alignItems="center" sx={{ px: 2.5, py: 2.5 }}>
        <Logo height={34} />
        <Box sx={{ ml: "auto" }}>
          <IconButton
            onClick={onClose}
            aria-label="Close menu"
            size="small"
            sx={{
              color: "#1a1412",
              bgcolor: "#f3f1f0",
              "&:hover": {
                bgcolor: "#f1e2db",
                color: ACCENT,
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      {/* Navigation */}
      <List sx={{ px: 1.5, pt: 1 }}>
        {NAV.map((item) => {
          const active = isActivePath(pathname, item.path);

          return (
            <ListItemButton
              key={item.label}
              component={Link}
              to={item.path}
              onClick={onClose}
              aria-current={active ? "page" : undefined}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 1.5,
                mb: 0.5,
                py: 1.5,
                px: 2,
                bgcolor: active ? "#fbe9e2" : "transparent",
                "&:hover": { bgcolor: active ? "#fbe9e2" : "#f7f5f4" },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: active ? 700 : 500,
                  fontSize: 16,
                  color: active ? ACCENT : "#1a1412",
                }}
              />
              {active && (
                <ChevronRightIcon sx={{ fontSize: 20, color: ACCENT }} />
              )}
            </ListItemButton>
          );
        })}
      </List>

      {/* Spacer pushes footer content down */}
      <Box sx={{ flex: 1 }} />

      {/* Contact info */}
      <Stack
        direction="row"
        spacing={3}
        sx={{ px: 3, py: 2.5, borderTop: "1px solid #eee" }}
      >
        <IconButton
          size="small"
          sx={{
            bgcolor: "#f3f1f0",
            color: ACCENT,
            "&:hover": { bgcolor: "#fbe9e2" },
          }}
        >
          <LocationOnIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton
          size="small"
          sx={{
            bgcolor: "#f3f1f0",
            color: ACCENT,
            "&:hover": { bgcolor: "#fbe9e2" },
          }}
        >
          <PhoneIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
          {SOCIALS.map((Icon, i) => (
            <IconButton
              key={i}
              size="small"
              sx={{
                bgcolor: "#f3f1f0",
                color: "#1a1412",
                "&:hover": { bgcolor: ACCENT, color: "#fff" },
              }}
            >
              <Icon sx={{ fontSize: 16 }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>

      {/* Quotation Button */}
      <Box sx={{ px: 3, pb: 3 }}>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            fontSize: 15.5,
            borderRadius: "6px",
            bgcolor: ACCENT,
            "&:hover": { bgcolor: ACCENT_HOVER },
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
            <Box sx={{ ml: "auto", mt: 3 }}>
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
