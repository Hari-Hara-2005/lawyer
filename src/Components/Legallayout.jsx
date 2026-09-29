import { Box, Container, Typography, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ACCENT, ACCENT_HOVER, LINE } from "../Theme";
import { LEGAL_LINKS } from "../Terms&Service/Legalconfig";
import Navbar from "./Navbar";

/**
 * Props
 * - title:    page heading
 * - intro:    short text under the heading (optional)
 * - sections: [{ heading, paragraphs?: (string | node)[], items?: [{ term, text }] }]
 */
const LegalLayout = ({ title, intro, sections }) => {
  const { pathname } = useLocation();

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* Header band */}
      <Box sx={{ bgcolor: "#1c1c1c", color: "#fff" }}>
        <Navbar />
        <Container
          maxWidth={false}
          sx={{ maxWidth: 1100, px: { xs: 2.5, sm: 4 }, pt: { xs: 8, md: 12 } }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 34, md: 52 },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Box sx={{ width: 64, height: 3, bgcolor: ACCENT, mb: 3 }} />
          {intro && (
            <Typography
              sx={{
                maxWidth: 720,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.8,
                mb: 6,
              }}
            >
              {intro}
            </Typography>
          )}

          {/* Links between the three legal pages */}
          <Box
            component="nav"
            aria-label="Legal pages"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 0, sm: 2 },
              borderTop: LINE,
            }}
          >
            {LEGAL_LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Button
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  aria-current={active ? "page" : undefined}
                  sx={{
                    color: active ? "#fff" : "rgba(255,255,255,0.6)",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 0,
                    mr: { xs: 3, sm: 0 },
                    py: 2,
                    minWidth: 0,
                    borderBottom: `2px solid ${active ? ACCENT : "transparent"}`,
                    "&:hover": {
                      color: "#fff",
                      bgcolor: "transparent",
                      borderBottomColor: ACCENT_HOVER,
                    },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container
        maxWidth={false}
        sx={{ maxWidth: 860, px: { xs: 2.5, sm: 4 }, py: { xs: 6, md: 10 } }}
      >
        {sections.map((section) => (
          <Box
            key={section.heading}
            component="section"
            sx={{
              py: 4,
              borderBottom: "1px solid #e8e8e8",
              "&:first-of-type": { pt: 0 },
              "&:last-of-type": { borderBottom: 0 },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 20, md: 24 },
                color: "#262626",
                mb: 2,
              }}
            >
              {section.heading}
            </Typography>

            {section.paragraphs?.map((p, i) => (
              <Typography
                key={i}
                sx={{ color: "#555", fontSize: 15.5, lineHeight: 1.85, mb: 2 }}
              >
                {p}
              </Typography>
            ))}

            {section.items && (
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                {section.items.map((item) => (
                  <Box
                    component="li"
                    key={item.term}
                    sx={{
                      color: "#555",
                      fontSize: 15.5,
                      lineHeight: 1.85,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "#262626" }}
                    >
                      {item.term}
                    </Box>{" "}
                    {item.text}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default LegalLayout;
