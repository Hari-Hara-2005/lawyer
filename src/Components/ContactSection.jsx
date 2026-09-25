import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { ACCENT } from "../Theme";

const CONTACT_INFO = [
  {
    icon: LocationOnOutlinedIcon,
    title: "Head Office Address",
    value: "Lumbung Hidup Street Madiun City East Java",
  },
  { icon: EmailOutlinedIcon, title: "Email Address", value: "Hello@Lawak.com" },
  {
    icon: PhoneOutlinedIcon,
    title: "Phone Number",
    value: "( +62 ) 123 456 789",
  },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    bgcolor: "rgba(255,255,255,.08)",
    borderRadius: 0,
    "& fieldset": { borderColor: "rgba(255,255,255,.15)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,.3)" },
    "&.Mui-focused fieldset": { borderColor: ACCENT },
  },
  "& input::placeholder, & textarea::placeholder": {
    color: "rgba(255,255,255,.5)",
    opacity: 1,
  },
};

const labelSx = { color: "#fff", fontSize: 14, mb: 1 };

const ContactSection = () => {
  return (
    <Box
      component="section"
      sx={{ bgcolor: "#2c2523", color: "#fff", py: { xs: 8, md: 12 } }}
    >
      <Container
        maxWidth={false}
        sx={{ maxWidth: 1460, px: { xs: 2.5, sm: 4 } }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* Left column */}
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
              Get in Touch
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: 32, md: 44 },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Stay Tuned & Lets Get In Touch With Us
            </Typography>
            <Typography
              sx={{
                color: "rgba(255,255,255,.8)",
                fontSize: 15,
                lineHeight: 1.7,
                mb: 5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </Typography>

            {CONTACT_INFO.map(({ icon: Icon, title, value }) => (
              <Box
                key={title}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2.5,
                  mb: 4,
                }}
              >
                <Icon sx={{ color: ACCENT, fontSize: 48 }} />
                <Box>
                  <Typography
                    component="h3"
                    sx={{ fontWeight: 700, fontSize: 20, mb: 0.5 }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 15, color: "rgba(255,255,255,.85)" }}
                  >
                    {value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Right column: form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={labelSx}>First Name</Typography>
                  <TextField fullWidth placeholder="First Name" sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={labelSx}>Last Name</Typography>
                  <TextField fullWidth placeholder="Last Name" sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={labelSx}>Email Address</Typography>
                  <TextField
                    fullWidth
                    type="email"
                    placeholder="Email Address"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={labelSx}>Subject</Typography>
                  <TextField fullWidth placeholder="Subject" sx={inputSx} />
                </Grid>
                <Grid size={12}>
                  <Typography sx={labelSx}>Your Message</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    placeholder="Your Message Here..."
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={12}>
                  <Button
                    type="submit"
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
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
