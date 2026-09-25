import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ACCENT } from "../Theme";

// Replace with your actual office coordinates / embed URL
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8!2d111.5225!3d-7.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMadiun%2C+East+Java!5e0!3m2!1sen!2sid!4v0000000000000";

const MapSection = () => {
  return (
    <Box component="section" sx={{ position: "relative" }}>
      <Box
        component="iframe"
        src={MAP_EMBED_URL}
        title="Office Location Map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sx={{
          display: "block",
          width: "100%",
          height: { xs: 320, md: 450 },
          border: 0,
          filter: "grayscale(0.3) contrast(1.05)",
        }}
      />

      <Box
        sx={{
          position: { xs: "static", md: "absolute" },
          top: { md: 24 },
          left: { md: 24 },
          bgcolor: "#2c2523",
          color: "#fff",
          px: 3,
          py: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
          maxWidth: 360,
        }}
      >
        <LocationOnOutlinedIcon
          sx={{ color: ACCENT, fontSize: 36, flexShrink: 0 }}
        />
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 16, mb: 0.5 }}>
            Head Office Address
          </Typography>
          <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,.8)" }}>
            Lumbung Hidup Street, Madiun City, East Java
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MapSection;
