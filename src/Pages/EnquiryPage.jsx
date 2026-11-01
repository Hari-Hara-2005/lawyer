import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  Alert,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

import { useSearchParams } from "react-router-dom";
import { ACCENT, ACCENT_HOVER, theme } from "../Theme";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HERO_IMAGE = "/assets/digital-justice.jpg";
const WHATSAPP_NUMBER = "919884483327";

const STATES_LIST = [
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Delhi NCR",
  "Gujarat",
  "West Bengal",
  "Rajasthan",
  "Uttar Pradesh",
  "Madhya Pradesh",
  "Punjab",
  "Haryana",
  "Other State / International",
];

const INQUIRY_OPTIONS = [
  "Corporate Plan 1: Strategical advices and Legal Counsel (Rs.50,000/- per month)",
  "Corporate Plan 2: Prelitigation services with weekly two hours visit (Rs.1,00,000/- per month)",
  "Corporate Plan 3: Coordination with inhouse legal team (Rs.75,000/- per month)",
  "Corporate Plan 4: Preliminary / Pre-qualification legal opinions (Rs.1,00,000/- per month)",
  "Custom Corporate Monthly Plan",
  "Real Estate, Property Management & Property Lawyer",
  "Business & Corporate Lawyer",
  "Documentation and Transaction Structuring Lawyer",
  "SARFAESI & Bankruptcy Lawyer",
  "Business & Media Advisory Lawyer",
  "Legal Audit",
  "Civil & Family Lawyer",
  "General Legal Inquiry",
];

const labelSx = {
  fontWeight: 600,
  fontSize: 14.5,
  color: "#334155",
  mb: 1,
  display: "block",
};

const inputSx = {
  width: "100%",
  "& .MuiOutlinedInput-root": {
    bgcolor: "#ffffff",
    borderRadius: "8px",
    fontSize: 15,
    minHeight: { xs: 48, md: 54 },
    "& fieldset": {
      borderColor: "#cbd5e1",
      borderWidth: "1.5px",
    },
    "&:hover fieldset": {
      borderColor: "#94a3b8",
    },
    "&.Mui-focused fieldset": {
      borderColor: ACCENT,
      borderWidth: "2px",
    },
  },
  "& .MuiInputBase-input": {
    py: "15px !important",
    px: "16px !important",
    color: "#0f172a",
    fontSize: 15,
    boxSizing: "border-box",
  },
};

const EnquiryPage = () => {
  const [searchParams] = useSearchParams();

  const initialInquiryFor = (() => {
    const prefill = searchParams.get("inquiryFor");
    if (!prefill) return "";
    const cleanPrefill = prefill.toLowerCase().replace(/&/g, "and").trim();
    const match = INQUIRY_OPTIONS.find((opt) => {
      const cleanOpt = opt.toLowerCase().replace(/&/g, "and");
      return (
        cleanOpt.includes(cleanPrefill) ||
        (cleanPrefill.includes("strategical") && cleanOpt.includes("strategical")) ||
        (cleanPrefill.includes("prelitigation") && cleanOpt.includes("prelitigation")) ||
        (cleanPrefill.includes("inhouse") && cleanOpt.includes("inhouse")) ||
        (cleanPrefill.includes("in-house") && cleanOpt.includes("inhouse")) ||
        (cleanPrefill.includes("preliminary") && cleanOpt.includes("preliminary")) ||
        (cleanPrefill.includes("custom corporate") && cleanOpt.includes("custom corporate"))
      );
    });
    return match || "";
  })();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    state: "",
    city: "",
    zipCode: "",
    country: "India",
    inquiryFor: initialInquiryFor,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.contactNumber.trim() && !formData.email.trim()) {
      setErrorMsg("Please provide your contact number or email address.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);

    // Format WhatsApp message
    const formattedText =
      `*New Online Legal Enquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email || "N/A"}\n` +
      `*Contact Number:* ${formData.contactNumber || "N/A"}\n` +
      `*State:* ${formData.state || "N/A"}\n` +
      `*City:* ${formData.city || "N/A"}\n` +
      `*Zip Code:* ${formData.zipCode || "N/A"}\n` +
      `*Country:* ${formData.country || "India"}\n` +
      `*Inquiry For:* ${formData.inquiryFor || "General Inquiry"}\n` +
      `*Message:* ${formData.message || "N/A"}`;

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      formattedText
    )}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleDirectWhatsApp = () => {
    const text = "Hello, I would like to schedule an immediate legal consultation.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 1. EXECUTIVE HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: "relative",
          color: "#fff",
          overflow: "hidden",
          minHeight: { xs: "auto", md: 380 },
          backgroundImage: `linear-gradient(135deg, rgba(8, 26, 53, 0.94) 0%, rgba(13, 39, 77, 0.91) 50%, rgba(20, 14, 12, 0.92) 100%), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0d274d",
        }}
      >
        <Navbar />

        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1440,
            px: { xs: 2.5, sm: 4 },
            pt: { xs: 6, md: 8 },
            pb: { xs: 7, md: 9 },
          }}
        >
          <Box sx={{ maxWidth: 840, mx: "auto", textAlign: "center" }} data-aos="fade-up">
            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: { xs: 1.2, md: 1.15 },
                fontSize: { xs: 32, sm: 44, md: 52 },
                mb: 2,
                letterSpacing: "-0.5px",
              }}
            >
              Legal Consultation & Case Enquiry
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.88)",
                maxWidth: 720,
                mx: "auto",
                mb: 3.5,
              }}
            >
              Submit your property due diligence, corporate monthly retainer, or litigation requirements. Our senior advocates conduct prompt case evaluations with complete client-attorney legal privilege.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. CENTERED FORM CONTAINER WITH HORIZONTAL 4-COLUMN LAYOUT */}
      <Box
        component="section"
        sx={{
          bgcolor: "#f8fafc",
          py: { xs: 6, md: 9 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: 1320, mx: "auto" }}>
          <Box
            data-aos="fade-up"
            sx={{
              maxWidth: { xs: "100%", md: "1260px" },
              mx: "auto",
              bgcolor: "#ffffff",
              p: { xs: 3.5, sm: 5, md: 5.5 },
              borderRadius: "12px",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.06)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* FORM HEADER */}
            <Box sx={{ mb: 3.5, pb: 2, borderBottom: "1px solid #f1f5f9" }}>
              <Typography
                sx={{
                  color: ACCENT,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  mb: 0.5,
                }}
              >
                Online Case Submission
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: 22, sm: 28 },
                  color: "#0f172a",
                  lineHeight: 1.25,
                  mb: 0.75,
                }}
              >
                Direct Legal Enquiry Form
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#64748b" }}>
                Please provide your contact and matter details below. All submissions are protected under advocate confidentiality.
              </Typography>
            </Box>

            {submitted && (
              <Box
                sx={{
                  bgcolor: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  borderRadius: "6px",
                  p: 1.75,
                  mb: 2.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <CheckCircleIcon sx={{ color: "#10b981", fontSize: 22 }} />
                <Typography sx={{ fontWeight: 600, color: "#065f46", fontSize: 13.5 }}>
                  Enquiry submitted successfully! Forwarded to our legal advocates.
                </Typography>
              </Box>
            )}

            {errorMsg && (
              <Alert severity="error" sx={{ mb: 2.5, py: 0.5, borderRadius: "6px", fontSize: 13 }}>
                {errorMsg}
              </Alert>
            )}

            {/* 4-COLUMN HORIZONTAL GRID LAYOUT */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(4, 1fr)",
                  },
                  columnGap: 2.75,
                  rowGap: 3.25,
                }}
              >
                {/* ROW 1: 4 COLUMNS (Name, Email, Contact Number, State) */}
                <Box>
                  <Typography component="label" sx={labelSx}>
                    Name *
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange("name")}
                    required
                    sx={inputSx}
                  />
                </Box>

                <Box>
                  <Typography component="label" sx={labelSx}>
                    Email
                  </Typography>
                  <TextField
                    fullWidth
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange("email")}
                    sx={inputSx}
                  />
                </Box>

                <Box>
                  <Typography component="label" sx={labelSx}>
                    Contact Number *
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange("contactNumber")}
                    required
                    sx={inputSx}
                  />
                </Box>

                <Box>
                  <Typography component="label" sx={labelSx}>
                    State
                  </Typography>
                  <FormControl fullWidth sx={inputSx}>
                    <Select
                      displayEmpty
                      value={formData.state}
                      onChange={handleChange("state")}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <Typography sx={{ color: "#9ca3af", fontSize: 14.5 }}>
                              --------- Select ---------
                            </Typography>
                          );
                        }
                        return selected;
                      }}
                      sx={{
                        minHeight: { xs: 48, md: 54 },
                        "& .MuiSelect-select": {
                          py: "15px !important",
                          px: "16px !important",
                          fontSize: 14.5,
                          display: "flex",
                          alignItems: "center",
                        },
                      }}
                    >
                      <MenuItem disabled value="">
                        <Typography sx={{ color: "#9ca3af", fontSize: 14.5 }}>
                          --------- Select ---------
                        </Typography>
                      </MenuItem>
                      {STATES_LIST.map((st) => (
                        <MenuItem key={st} value={st} sx={{ fontSize: 14.5, py: 1.25 }}>
                          {st}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                {/* ROW 2: 4 COLUMNS (City, Zip Code, Country, Inquiry for) */}
                <Box>
                  <Typography component="label" sx={labelSx}>
                    City
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange("city")}
                    sx={inputSx}
                  />
                </Box>

                <Box>
                  <Typography component="label" sx={labelSx}>
                    Zip Code
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleChange("zipCode")}
                    sx={inputSx}
                  />
                </Box>

                <Box>
                  <Typography component="label" sx={labelSx}>
                    Country
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange("country")}
                    sx={inputSx}
                  />
                </Box>

                <Box>
                  <Typography component="label" sx={labelSx}>
                    Inquiry for
                  </Typography>
                  <FormControl fullWidth sx={inputSx}>
                    <Select
                      displayEmpty
                      value={formData.inquiryFor}
                      onChange={handleChange("inquiryFor")}
                      renderValue={(selected) => {
                        if (!selected) {
                          return (
                            <Typography sx={{ color: "#9ca3af", fontSize: 14.5 }}>
                              --------- Select ---------
                            </Typography>
                          );
                        }
                        return selected;
                      }}
                      sx={{
                        minHeight: { xs: 48, md: 54 },
                        "& .MuiSelect-select": {
                          py: "15px !important",
                          px: "16px !important",
                          fontSize: 14.5,
                          display: "flex",
                          alignItems: "center",
                        },
                      }}
                    >
                      <MenuItem disabled value="">
                        <Typography sx={{ color: "#9ca3af", fontSize: 14.5 }}>
                          --------- Select ---------
                        </Typography>
                      </MenuItem>
                      {INQUIRY_OPTIONS.map((opt) => (
                        <MenuItem key={opt} value={opt} sx={{ fontSize: 14, py: 1.25 }}>
                          {opt}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                {/* ROW 3: Message (Spans 3 Columns) & Action Buttons (Column 4) */}
                <Box sx={{ gridColumn: { xs: "1", sm: "span 2", md: "span 3" } }}>
                  <Typography component="label" sx={labelSx}>
                    Message
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange("message")}
                    sx={{
                      ...inputSx,
                      "& .MuiOutlinedInput-root": {
                        ...inputSx["& .MuiOutlinedInput-root"],
                        minHeight: 140,
                        p: 0,
                      },
                      "& .MuiInputBase-input": {
                        p: "14px 16px !important",
                        fontSize: 14.5,
                        lineHeight: 1.6,
                      },
                    }}
                  />
                </Box>

                {/* Column 4: Action Buttons Stacked Beside Message */}
                <Box
                  sx={{
                    gridColumn: { xs: "1", sm: "span 2", md: "span 1" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    gap: 2,
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disableElevation
                    startIcon={<SendIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      height: { xs: 48, md: 54 },
                      bgcolor: ACCENT,
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: 15,
                      textTransform: "none",
                      borderRadius: "6px",
                      boxShadow: "0 2px 6px rgba(185, 89, 47, 0.25)",
                      "&:hover": {
                        bgcolor: ACCENT_HOVER,
                      },
                    }}
                  >
                    Send message
                  </Button>

                  <Button
                    type="button"
                    variant="outlined"
                    fullWidth
                    onClick={handleDirectWhatsApp}
                    startIcon={<WhatsAppIcon sx={{ color: "#25D366", fontSize: 20 }} />}
                    sx={{
                      height: { xs: 46, md: 50 },
                      borderColor: "#cbd5e1",
                      borderWidth: "1.5px",
                      color: "#334155",
                      fontWeight: 600,
                      fontSize: 14,
                      textTransform: "none",
                      borderRadius: "6px",
                      bgcolor: "#ffffff",
                      "&:hover": {
                        borderColor: "#25D366",
                        bgcolor: "rgba(37, 211, 102, 0.04)",
                        color: "#0f172a",
                      },
                    }}
                  >
                    Direct WhatsApp
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 4. INTAKE WORKFLOW SECTION */}
      <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 10 }, borderTop: "1px solid #e2e8f0" }}>
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2.5, sm: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Intake Workflow
            </Typography>
            <Typography
              component="h2"
              sx={{ fontWeight: 800, fontSize: { xs: 24, sm: 32 }, color: "#0f172a", mb: 1.5 }}
            >
              How Our Consultation Process Operates
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#64748b", maxWidth: 640, mx: "auto" }}>
              From initial intake to courtroom representation, we maintain complete transparency and strategic focus.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3.5,
            }}
          >
            {[
              {
                step: "01",
                icon: ChatOutlinedIcon,
                title: "Enquiry Intake & Verification",
                desc: "Your case specifications and background documents are triaged to identify jurisdiction, urgent timelines, and relevant statutes.",
              },
              {
                step: "02",
                icon: LockOutlinedIcon,
                title: "Conflict Check & Strategy Formulation",
                desc: "We perform a preliminary conflict-of-interest check, assess legal viability, and prepare strategic options or notice response frameworks.",
              },
              {
                step: "03",
                icon: VerifiedUserOutlinedIcon,
                title: "Dedicated Advocate Consultation",
                desc: "A senior advocate conducts a detailed telephonic or in-person conference to execute transaction structuring or representation.",
              },
            ].map((st, i) => {
              const StIcon = st.icon;
              return (
                <Box
                  key={i}
                  sx={{
                    p: 4,
                    borderRadius: "10px",
                    bgcolor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    position: "relative",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      bgcolor: "#ffffff",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                      borderColor: ACCENT,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "8px",
                        bgcolor: "#fef3ee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <StIcon sx={{ fontSize: 22, color: ACCENT }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 32,
                        fontWeight: 900,
                        color: "rgba(13, 39, 77, 0.12)",
                        lineHeight: 1,
                      }}
                    >
                      {st.step}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#0f172a", mb: 1.25 }}>
                    {st.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: "#64748b" }}>
                    {st.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </ThemeProvider>
  );
};

export default EnquiryPage;
