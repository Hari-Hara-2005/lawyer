import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ACCENT } from "../Theme";

// Exact office location
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=No.8%2C%20Jesus%20Cot%2C%20Vaigai%20Nagar%2C%202nd%20Street%2C%20West%20Tambaram%2C%20Chennai%20600045&output=embed";

const MapSection = () => {
  return (
    <Box component="section" sx={{ position: "relative" }}>
      <Box
        component="iframe"
        src={MAP_EMBED_URL}
        title="Gen Attorneys Office Location"
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

      {/* Address Card */}
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
          sx={{
            color: ACCENT,
            fontSize: 36,
            flexShrink: 0,
          }}
        />

        <Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 16,
              mb: 0.5,
            }}
          >
            Head Office Address
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "rgba(255,255,255,.8)",
              lineHeight: 1.6,
            }}
          >
            No.8, Jesus Cot, Vaigai Nagar, 2nd Street,
            <br />
            West Tambaram, Chennai – 600045
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MapSection;
