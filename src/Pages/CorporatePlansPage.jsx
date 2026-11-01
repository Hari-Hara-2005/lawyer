import { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CssBaseline,
  ThemeProvider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import { Link, useNavigate } from "react-router-dom";
import { ACCENT, ACCENT_HOVER, theme } from "../Theme";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const HERO_IMAGE = "/assets/legaltech-corporate.jpg";
const WHATSAPP_NUMBER = "919884483327";

// 4 CORPORATE MONTHLY PLANS REQUIRED BY USER
const PLANS = [
  {
    id: "strategic-counsel",
    filterCat: "advisory",
    name: "Strategical Advices & Legal Counsel",
    categoryBadge: "EXECUTIVE ADVISORY",
    price: "50,000",
    annualPrice: "42,500",
    frequency: "/ month",
    popular: false,
    icon: BusinessOutlinedIcon,
    highlight: "🎯 Continuous Board & Commercial Advisory",
    description:
      "Strategic ongoing counsel and commercial risk management for executive leadership, operational decision-making, and regulatory compliance.",
    deliverables: [
      "Senior corporate counsel advisory & consultations",
      "Executive commercial risk assessments",
      "Commercial contract review & strategic vetting",
      "Regulatory & corporate governance advisory",
      "Direct telephonic & video strategy sessions",
      "Early-stage dispute containment strategy",
    ],
    sla: "24-hr response SLA",
    targetAudience: "Startups, Growth SMEs & Executive Boards",
  },
  {
    id: "prelitigation-onsite",
    filterCat: "onsite",
    name: "Prelitigation Services (Weekly On-Site Visits)",
    categoryBadge: "MOST POPULAR • ON-SITE PRESENCE",
    price: "1,00,000",
    annualPrice: "85,000",
    frequency: "/ month",
    popular: true,
    icon: LocationCityOutlinedIcon,
    highlight: "⚡ Weekly 2-Hour Office Visit Included",
    description:
      "Active dispute containment with weekly 2-hour on-site visits to your head, corporate, or branch office for face-to-face counsel and crisis handling.",
    deliverables: [
      "Weekly 2 hours on-site visit to corporate/branch office",
      "In-person grievance mediation & dispute resolution",
      "Pre-litigation containment before court escalation",
      "Direct face-to-face management & HR consultations",
      "Vetting vendor claims, employee disputes & contracts",
      "Real-time corporate risk assessment on premises",
    ],
    sla: "Priority same-day dispatch & weekly on-site",
    targetAudience: "Operating Enterprises, Real Estate & Retail Firms",
  },
  {
    id: "inhouse-coordination",
    filterCat: "onsite",
    name: "Coordination with In-House Legal Team",
    categoryBadge: "DOCUMENTATION SYNERGY",
    price: "75,000",
    annualPrice: "63,750",
    frequency: "/ month",
    popular: false,
    icon: DescriptionOutlinedIcon,
    highlight: "📄 Drafting Notices, Replies & Ancillary Works",
    description:
      "Active synergy and coordination with your in-house legal team for drafting notices, replies, statutory responses, and managing ancillary corporate legal tasks.",
    deliverables: [
      "Drafting & vetting formal legal notices & rejoinders",
      "Formulating official replies & statutory counter-responses",
      "Transaction documentation, NDAs & commercial MOUs",
      "Coordination with your internal legal & compliance team",
      "Reviewing employment, service & vendor agreements",
      "Ancillary legal filings & secondary advisory support",
    ],
    sla: "48-hr drafting turnaround SLA",
    targetAudience: "Corporations with Existing Legal Departments",
  },
  {
    id: "preliminary-opinions",
    filterCat: "advisory",
    name: "Preliminary / Pre-Qualification Legal Opinions",
    categoryBadge: "DUE DILIGENCE & TENDERS",
    price: "1,00,000",
    annualPrice: "85,000",
    frequency: "/ month",
    popular: false,
    icon: WorkspacePremiumOutlinedIcon,
    highlight: "🔍 Authoritative Title & Risk Feasibility",
    description:
      "Rigorous due diligence, preliminary risk assessments, and authoritative pre-qualification legal feasibility opinions for investments, tenders, and property deals.",
    deliverables: [
      "Preliminary legal opinions on major business deals",
      "Pre-qualification due diligence for bids, tenders & RFPs",
      "Property title verification & legal search reports",
      "Statutory risk, encumbrance & liability evaluation",
      "Written legal opinion memorandums signed by senior counsel",
      "Safeguarding corporate investments & capital deployments",
    ],
    sla: "Comprehensive written opinion reports",
    targetAudience: "Developers, EPC Contractors & Investment Funds",
  },
];

// COMPARISON MATRIX ROWS
const COMPARISON_ROWS = [
  {
    category: "Executive & Commercial Counsel",
    feature: "Strategic Commercial & Board Advisory",
    plan1: true,
    plan2: true,
    plan3: true,
    plan4: true,
  },
  {
    category: "Executive & Commercial Counsel",
    feature: "Commercial Agreement & Contract Review",
    plan1: true,
    plan2: true,
    plan3: true,
    plan4: true,
  },
  {
    category: "On-Site Physical Office Visits",
    feature: "Weekly 2-Hour On-Site Visit (Head / Branch Office)",
    plan1: false,
    plan2: "Weekly 2 Hrs",
    plan3: false,
    plan4: false,
  },
  {
    category: "On-Site Physical Office Visits",
    feature: "In-Person Grievance & Dispute Mediation",
    plan1: false,
    plan2: true,
    plan3: false,
    plan4: false,
  },
  {
    category: "Notice Drafting & Statutory Replies",
    feature: "Drafting Formal Notices, Rejoinders & Official Replies",
    plan1: false,
    plan2: "Optional",
    plan3: true,
    plan4: false,
  },
  {
    category: "Notice Drafting & Statutory Replies",
    feature: "Coordination with In-House Legal Team",
    plan1: false,
    plan2: "On-Site",
    plan3: true,
    plan4: false,
  },
  {
    category: "Due Diligence & Title Opinions",
    feature: "Preliminary / Pre-Qualification Title Opinions",
    plan1: false,
    plan2: false,
    plan3: false,
    plan4: true,
  },
  {
    category: "Due Diligence & Title Opinions",
    feature: "Tender, Bid & M&A Feasibility Memorandums",
    plan1: false,
    plan2: false,
    plan3: false,
    plan4: true,
  },
  {
    category: "Support & SLA",
    feature: "Dedicated Senior Advocate Account Lead",
    plan1: true,
    plan2: true,
    plan3: true,
    plan4: true,
  },
  {
    category: "Support & SLA",
    feature: "Direct WhatsApp Escalation Channel",
    plan1: true,
    plan2: true,
    plan3: true,
    plan4: true,
  },
  {
    category: "Pricing & Retainer Term",
    feature: "Standard Monthly Retainer",
    plan1: "₹50,000 / mo",
    plan2: "₹1,00,000 / mo",
    plan3: "₹75,000 / mo",
    plan4: "₹1,00,000 / mo",
  },
];

// FAQS
const FAQS = [
  {
    q: "How do the weekly 2-hour on-site office visits operate?",
    a: "Under the Prelitigation Services plan (₹1,00,000/mo), a senior designated corporate advocate visits your corporate headquarters, regional branch, or registered office for 2 scheduled hours every week. During this visit, our counsel interacts directly with your C-suite, HR, procurement, and operations teams to review pending contracts, mediate internal or vendor disputes, and preempt litigation before formal notices are received.",
  },
  {
    q: "Can we combine or customize services across two retainer packages?",
    a: "Yes! While our 4 standard plans cover the most common enterprise operational models, many clients require a hybrid package (for example, weekly on-site office presence combined with heavy notice drafting). Simply reach out via our Enquiry page or WhatsApp, and our managing partners will structure a tailored Retainer SLA reflecting your exact scope.",
  },
  {
    q: "What is the turnaround SLA for drafting legal notices and responses?",
    a: "Under the In-House Coordination plan (₹75,000/mo), standard drafts of legal notices, rejoinders, and statutory responses are delivered within 48 to 72 business hours upon receipt of relevant case files and background documents. Urgent pre-litigation responses can be expedited through your dedicated advocate.",
  },
  {
    q: "Are the Preliminary and Pre-Qualification opinions legally binding and formal?",
    a: "Yes. All preliminary and pre-qualification legal feasibility opinions (₹1,00,000/mo) are formal written legal memorandums issued on the firm's letterhead, duly signed by practicing senior advocates. They provide authoritative guidance for corporate tenders, bank credit evaluations, joint ventures, and high-value real estate acquisitions.",
  },
  {
    q: "What happens if a matter escalates into active High Court or Tribunal litigation?",
    a: "Our monthly retainers focus on advisory, pre-litigation avoidance, drafting, and due diligence to prevent courtroom battles. If actual litigation before the High Court, District Courts, NCLT, DRT, or RERA becomes unavoidable, retainer clients receive preferred concession rates and prioritized representation by our senior litigation bar counsel.",
  },
];

const CorporatePlansPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // "all", "advisory", "onsite"
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly", "annual"
  const [selectedScenario, setSelectedScenario] = useState(null);
  const cardsRef = useRef(null);

  const handleEnquirePlan = (planName) => {
    navigate(`/enquiry?inquiryFor=${encodeURIComponent(planName)}`);
  };

  const handleWhatsAppPlan = (planName, price) => {
    const text = `Hello, I'm interested in the Corporate Monthly Plan: "${planName}" (Rs. ${price}/- per month). Please share details with us.`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleScenarioClick = (planId) => {
    setSelectedScenario(planId);
    if (cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const visiblePlans = PLANS.filter((p) => {
    if (filter === "all") return true;
    return p.filterCat === filter;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 1. MODERN EXECUTIVE HERO SECTION */}
      <Box
        component="section"
        sx={{
          position: "relative",
          color: "#fff",
          overflow: "hidden",
          minHeight: { xs: "auto", md: 460 },
          backgroundImage: `linear-gradient(135deg, rgba(8, 26, 53, 0.95) 0%, rgba(13, 39, 77, 0.92) 50%, rgba(20, 14, 12, 0.92) 100%), url(${HERO_IMAGE})`,
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
            pt: { xs: 6, md: 9 },
            pb: { xs: 8, md: 11 },
          }}
        >
          <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }} data-aos="fade-up">
            {/* Breadcrumb & Pill */}

            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: { xs: 1.18, md: 1.12 },
                fontSize: { xs: 34, sm: 46, md: 56 },
                mb: 2.5,
                letterSpacing: "-0.5px",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Corporate Monthly Legal Plans
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 15.5, md: 18 },
                lineHeight: 1.65,
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: 780,
                mx: "auto",
                mb: 4.5,
                fontWeight: 400,
              }}
            >
              Protect your business with dedicated senior counsel, weekly on-site office consultations, and comprehensive notice drafting—on a fixed, predictable monthly retainer without running billable hour meters.
            </Typography>

            {/* TRUST HIGHLIGHT BADGES */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1.5, sm: 3, md: 4 }}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                pt: 3.5,
                borderTop: "1px solid rgba(255, 255, 255, 0.14)",
              }}
            >
              {[
                { icon: VerifiedOutlinedIcon, text: "4 Transparent Retainers" },
                { icon: LocationCityOutlinedIcon, text: "Weekly On-Site Visits" },
                { icon: SpeedOutlinedIcon, text: "48-Hr Drafting Turnaround" },
                { icon: HandshakeOutlinedIcon, text: "In-House Team Synergy" },
              ].map((item, i) => {
                const BadgeIcon = item.icon;
                return (
                  <Stack key={i} direction="row" alignItems="center" spacing={1}>
                    <BadgeIcon sx={{ fontSize: 19, color: ACCENT }} />
                    <Typography sx={{ fontSize: 13.5, fontWeight: 600, color: "#fff" }}>
                      {item.text}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* 2. INTERACTIVE "FIND YOUR RETAINER FIT" QUICK SELECTOR */}
      <Box
        sx={{
          bgcolor: "#ffffff",
          py: { xs: 6, md: 8 },
          px: { xs: 2.5, sm: 4 },
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1440, mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: 4.5 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Tailored Corporate Guidance
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 24, sm: 30, md: 34 },
                color: "#0f172a",
                mb: 1.5,
              }}
            >
              Which Legal Retainer Matches Your Enterprise Today?
            </Typography>
            <Typography
              sx={{
                fontSize: 15,
                color: "#64748b",
                maxWidth: 640,
                mx: "auto",
              }}
            >
              Click your primary business objective below to spotlight the ideal monthly retainer package.
            </Typography>
          </Box>

          {/* 4 SCENARIOS */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: 2.5,
            }}
          >
            {[
              {
                id: "strategic-counsel",
                title: "Board & Management Advisory",
                desc: "We need strategic guidance for corporate contracts, corporate risk & management decisions.",
                fee: "₹50,000 / mo",
                icon: BusinessOutlinedIcon,
              },
              {
                id: "prelitigation-onsite",
                title: "Physical Office Legal Presence",
                desc: "We want an advocate to visit our corporate office weekly for direct conflict mediation.",
                fee: "₹1,00,000 / mo",
                icon: LocationCityOutlinedIcon,
                tag: "Most Popular",
              },
              {
                id: "inhouse-coordination",
                title: "Legal Drafting & Notice Vetting",
                desc: "Our in-house team needs drafting of legal notices, replies, counter-responses & contracts.",
                fee: "₹75,000 / mo",
                icon: DescriptionOutlinedIcon,
              },
              {
                id: "preliminary-opinions",
                title: "Tenders & Title Due Diligence",
                desc: "We need formal pre-qualification opinions, title searches, and due diligence feasibility reports.",
                fee: "₹1,00,000 / mo",
                icon: WorkspacePremiumOutlinedIcon,
              },
            ].map((sc) => {
              const ScIcon = sc.icon;
              const isSelected = selectedScenario === sc.id;
              return (
                <Box
                  key={sc.id}
                  onClick={() => handleScenarioClick(sc.id)}
                  sx={{
                    bgcolor: isSelected ? "#0d274d" : "#f8fafc",
                    color: isSelected ? "#ffffff" : "#1e293b",
                    p: 3,
                    borderRadius: "10px",
                    border: "2px solid",
                    borderColor: isSelected ? ACCENT : "#e2e8f0",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    "&:hover": {
                      borderColor: ACCENT,
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                    },
                  }}
                >
                  {sc.tag && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        bgcolor: ACCENT,
                        color: "#fff",
                        fontSize: 10.5,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                        px: 1,
                        py: 0.3,
                        borderRadius: "4px",
                      }}
                    >
                      {sc.tag}
                    </Box>
                  )}
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "8px",
                      bgcolor: isSelected ? "rgba(255,255,255,0.12)" : "#fef3ee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <ScIcon
                      sx={{
                        fontSize: 24,
                        color: isSelected ? "#ffffff" : ACCENT,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 16,
                      mb: 0.75,
                      color: isSelected ? "#ffffff" : "#0f172a",
                    }}
                  >
                    {sc.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: isSelected ? "rgba(255,255,255,0.8)" : "#64748b",
                      mb: 2,
                    }}
                  >
                    {sc.desc}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      pt: 1.5,
                      borderTop: "1px solid",
                      borderColor: isSelected ? "rgba(255,255,255,0.15)" : "#e2e8f0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 13.5,
                        color: isSelected ? ACCENT : ACCENT,
                      }}
                    >
                      {sc.fee}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: isSelected ? "#ffffff" : "#334155",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      Spotlight Plan <ArrowForwardIcon sx={{ fontSize: 13 }} />
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 3. MODERN PRICING CARDS SECTION */}
      <Box
        ref={cardsRef}
        component="section"
        sx={{
          bgcolor: "#f8fafc",
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1440, mx: "auto" }}>
          <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Fixed Retainer Scopes
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 28, sm: 36, md: 42 },
                color: "#0f172a",
                mb: 2,
              }}
            >
              Corporate Monthly Retainer Tiers
            </Typography>
            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                fontSize: 15.5,
                lineHeight: 1.6,
                color: "#64748b",
                mb: 4,
              }}
            >
              Choose the exact scope of engagement for your enterprise. Each plan offers fixed monthly costs, designated advocates, and immediate legal escalation channels.
            </Typography>

            {/* FILTER & BILLING TOGGLE CONTROLS */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2.5}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                mb: 4,
              }}
            >
              {/* Category Filter Pills */}
              <Box
                sx={{
                  display: "inline-flex",
                  bgcolor: "#ffffff",
                  p: 0.6,
                  borderRadius: "30px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                {[
                  { id: "all", label: "All 4 Plans" },
                  { id: "advisory", label: "Advisory & Opinions" },
                  { id: "onsite", label: "On-Site & In-House Synergy" },
                ].map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    size="small"
                    sx={{
                      px: 2.2,
                      py: 0.8,
                      borderRadius: "24px",
                      textTransform: "none",
                      fontSize: 13,
                      fontWeight: filter === tab.id ? 700 : 500,
                      color: filter === tab.id ? "#ffffff" : "#475569",
                      bgcolor: filter === tab.id ? "#0d274d" : "transparent",
                      "&:hover": {
                        bgcolor: filter === tab.id ? "#0d274d" : "#f1f5f9",
                      },
                    }}
                  >
                    {tab.label}
                  </Button>
                ))}
              </Box>

              {/* Billing Cycle Toggle */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.5,
                  bgcolor: "#ffffff",
                  px: 2,
                  py: 0.7,
                  borderRadius: "30px",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <Typography
                  onClick={() => setBillingCycle("monthly")}
                  sx={{
                    fontSize: 13,
                    fontWeight: billingCycle === "monthly" ? 700 : 500,
                    color: billingCycle === "monthly" ? "#0f172a" : "#94a3b8",
                    cursor: "pointer",
                  }}
                >
                  Monthly Retainer
                </Typography>

                <Box
                  onClick={() =>
                    setBillingCycle((prev) => (prev === "monthly" ? "annual" : "monthly"))
                  }
                  sx={{
                    width: 44,
                    height: 24,
                    borderRadius: "12px",
                    bgcolor: billingCycle === "annual" ? ACCENT : "#cbd5e1",
                    position: "relative",
                    cursor: "pointer",
                    transition: "background-color 0.25s ease",
                  }}
                >
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      bgcolor: "#ffffff",
                      position: "absolute",
                      top: 3,
                      left: billingCycle === "annual" ? 23 : 3,
                      transition: "left 0.25s ease",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    }}
                  />
                </Box>

                <Typography
                  onClick={() => setBillingCycle("annual")}
                  sx={{
                    fontSize: 13,
                    fontWeight: billingCycle === "annual" ? 700 : 500,
                    color: billingCycle === "annual" ? "#0f172a" : "#94a3b8",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.75,
                  }}
                >
                  Annual Contract
                  <Chip
                    label="Save 15% • Priority SLA"
                    size="small"
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                      height: 20,
                      bgcolor: "#ecfdf5",
                      color: "#059669",
                      border: "1px solid #a7f3d0",
                    }}
                  />
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* 4-COLUMN RESPONSIVE GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: visiblePlans.length === 2 ? "repeat(2, 1fr)" : "repeat(2, 1fr)",
                lg: visiblePlans.length === 2 ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 3 },
              alignItems: "stretch",
            }}
          >
            {visiblePlans.map((plan) => {
              const Icon = plan.icon;
              const isSpotlighted = selectedScenario === plan.id;
              const displayPrice = billingCycle === "annual" ? plan.annualPrice : plan.price;

              return (
                <Box
                  key={plan.id}
                  id={plan.id}
                  sx={{
                    bgcolor: plan.popular ? "#0d274d" : "#ffffff",
                    color: plan.popular ? "#ffffff" : "#1e293b",
                    borderRadius: "10px",
                    p: { xs: 3, md: 3.5 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "2px solid",
                    borderColor: isSpotlighted
                      ? "#3b82f6"
                      : plan.popular
                        ? ACCENT
                        : "#e2e8f0",
                    boxShadow: plan.popular
                      ? "0 20px 45px rgba(13, 39, 77, 0.28)"
                      : isSpotlighted
                        ? "0 12px 30px rgba(59, 130, 246, 0.18)"
                        : "0 4px 16px rgba(0, 0, 0, 0.04)",
                    position: "relative",
                    transition: "all 0.35s ease",
                    transform: isSpotlighted ? "scale(1.02)" : "none",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: plan.popular
                        ? "0 24px 48px rgba(13, 39, 77, 0.35)"
                        : "0 16px 32px rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  {/* POPULAR OR SPOTLIGHT BADGE */}
                  {plan.popular && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -14,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: ACCENT,
                        color: "#fff",
                        px: 2,
                        py: 0.5,
                        borderRadius: "20px",
                        fontSize: 11,
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        boxShadow: "0 4px 12px rgba(185, 89, 47, 0.4)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Most Popular • On-Site Presence
                    </Box>
                  )}

                  {isSpotlighted && !plan.popular && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: -13,
                        left: "50%",
                        transform: "translateX(-50%)",
                        bgcolor: "#2563eb",
                        color: "#fff",
                        px: 1.8,
                        py: 0.4,
                        borderRadius: "20px",
                        fontSize: 10.5,
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        boxShadow: "0 4px 10px rgba(37, 99, 235, 0.3)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Matched Your Objective
                    </Box>
                  )}

                  {/* TOP HEADER & ICON */}
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                        mt: plan.popular || isSpotlighted ? 1 : 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "10px",
                          bgcolor: plan.popular
                            ? "rgba(255, 255, 255, 0.12)"
                            : "#fef3ee",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          sx={{
                            fontSize: 28,
                            color: plan.popular ? "#ffffff" : ACCENT,
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          bgcolor: plan.popular ? "rgba(255,255,255,0.12)" : "#f1f5f9",
                          color: plan.popular ? "#ffffff" : "#475569",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: 0.8,
                          textTransform: "uppercase",
                          py: 0.5,
                          px: 1.25,
                          borderRadius: "4px",
                        }}
                      >
                        {plan.categoryBadge}
                      </Box>
                    </Box>

                    {/* TITLE */}
                    <Typography
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: 18, md: 19 },
                        lineHeight: 1.35,
                        color: plan.popular ? "#ffffff" : "#0f172a",
                        mb: 1.25,
                        minHeight: { xs: "auto", md: 54 },
                      }}
                    >
                      {plan.name}
                    </Typography>

                    {/* HIGHLIGHT PILL */}
                    <Box
                      sx={{
                        bgcolor: plan.popular
                          ? "rgba(255, 255, 255, 0.1)"
                          : "#fff7ed",
                        color: plan.popular ? "#fef08a" : "#c2410c",
                        border: "1px solid",
                        borderColor: plan.popular
                          ? "rgba(255, 255, 255, 0.18)"
                          : "#ffedd5",
                        p: 1.2,
                        borderRadius: "6px",
                        fontSize: 12.5,
                        fontWeight: 700,
                        mb: 2.5,
                      }}
                    >
                      {plan.highlight}
                    </Box>

                    {/* PRICING BLOCK */}
                    <Box
                      sx={{
                        my: 2,
                        pb: 2.5,
                        borderBottom: "1px solid",
                        borderColor: plan.popular
                          ? "rgba(255, 255, 255, 0.16)"
                          : "#f1f5f9",
                      }}
                    >
                      <Stack direction="row" alignItems="baseline" spacing={0.5}>
                        <Typography
                          sx={{
                            fontSize: 22,
                            fontWeight: 700,
                            color: plan.popular ? ACCENT : ACCENT,
                          }}
                        >
                          ₹
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 34,
                            fontWeight: 800,
                            color: plan.popular ? "#ffffff" : "#0f172a",
                            letterSpacing: -0.5,
                          }}
                        >
                          {displayPrice}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: 13.5,
                            fontWeight: 500,
                            color: plan.popular
                              ? "rgba(255, 255, 255, 0.75)"
                              : "#64748b",
                          }}
                        >
                          {plan.frequency}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          fontSize: 11.5,
                          mt: 0.5,
                          color: plan.popular
                            ? "rgba(255, 255, 255, 0.65)"
                            : "#94a3b8",
                        }}
                      >
                        {billingCycle === "annual"
                          ? "Billed annually • 15% discount applied"
                          : "Fixed monthly retainer • No hidden hourly fees"}
                      </Typography>
                    </Box>

                    {/* DESCRIPTION */}
                    <Typography
                      sx={{
                        fontSize: 13.5,
                        lineHeight: 1.55,
                        color: plan.popular
                          ? "rgba(255, 255, 255, 0.85)"
                          : "#64748b",
                        mb: 2.5,
                        minHeight: { xs: "auto", md: 62 },
                      }}
                    >
                      {plan.description}
                    </Typography>

                    {/* FEATURES / DELIVERABLES */}
                    <Box sx={{ mb: 3.5 }}>
                      <Typography
                        sx={{
                          fontSize: 11.5,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          color: plan.popular
                            ? "rgba(255, 255, 255, 0.65)"
                            : "#94a3b8",
                          mb: 1.75,
                        }}
                      >
                        Retainer Deliverables:
                      </Typography>
                      <Stack spacing={1.25}>
                        {plan.deliverables.map((feat, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 1.25,
                            }}
                          >
                            <CheckCircleIcon
                              sx={{
                                fontSize: 16,
                                color: plan.popular ? "#4ade80" : "#10b981",
                                flexShrink: 0,
                                mt: "2px",
                              }}
                            />
                            <Typography
                              sx={{
                                fontSize: 13,
                                lineHeight: 1.45,
                                color: plan.popular
                                  ? "rgba(255, 255, 255, 0.92)"
                                  : "#334155",
                              }}
                            >
                              {feat}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </div>

                  {/* BOTTOM ACTION BUTTONS */}
                  <Stack spacing={1.5} sx={{ pt: 1 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      disableElevation
                      onClick={() => handleEnquirePlan(plan.name)}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 1.4,
                        fontWeight: 700,
                        fontSize: 14,
                        textTransform: "none",
                        borderRadius: "6px",
                        bgcolor: plan.popular ? ACCENT : "#0d274d",
                        color: "#fff",
                        "&:hover": {
                          bgcolor: plan.popular ? ACCENT_HOVER : "#091c36",
                        },
                      }}
                    >
                      Enquire for This Plan
                    </Button>

                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
                      onClick={() => handleWhatsAppPlan(plan.name, displayPrice)}
                      sx={{
                        py: 1.1,
                        fontWeight: 600,
                        fontSize: 13,
                        textTransform: "none",
                        borderRadius: "6px",
                        borderColor: plan.popular
                          ? "rgba(255, 255, 255, 0.3)"
                          : "#cbd5e1",
                        color: plan.popular ? "#ffffff" : "#1e293b",
                        "&:hover": {
                          borderColor: plan.popular ? "#ffffff" : ACCENT,
                          bgcolor: plan.popular
                            ? "rgba(255, 255, 255, 0.08)"
                            : "#f8fafc",
                        },
                      }}
                    >
                      Quick WhatsApp Quote
                    </Button>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 4. WHY FIXED MONTHLY LEGAL RETAINERS (4 PILLARS) */}
      <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 10 }, borderTop: "1px solid #e2e8f0" }}>
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1440, mx: "auto", px: { xs: 2.5, sm: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Enterprise Benefits
            </Typography>
            <Typography
              component="h2"
              sx={{ fontWeight: 800, fontSize: { xs: 26, md: 36 }, color: "#0f172a" }}
            >
              Why Retaining Dedicated Counsel Protects Your Bottom Line
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
              gap: 3.5,
            }}
          >
            {[
              {
                icon: ShieldOutlinedIcon,
                title: "Zero Billable Surprises",
                desc: "Strictly predictable monthly retainers. No running stopwatch meters or inflated invoicing for quick calls or queries.",
              },
              {
                icon: LocationCityOutlinedIcon,
                title: "On-Site Office Presence",
                desc: "Weekly physical visits to your office to resolve vendor conflicts, HR issues, and contract ambiguities on the spot.",
              },
              {
                icon: SpeedOutlinedIcon,
                title: "48-Hour Drafting SLA",
                desc: "Rapid delivery of legal notices, rejoinders, and official company responses to maintain commercial leverage.",
              },
              {
                icon: HandshakeOutlinedIcon,
                title: "Team Synergy & Due Diligence",
                desc: "Seamless integration with your executive directors, internal legal teams, and board of directors.",
              },
            ].map((p, i) => {
              const PIcon = p.icon;
              return (
                <Box
                  key={i}
                  sx={{
                    p: 3.5,
                    borderRadius: "8px",
                    bgcolor: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      bgcolor: "#ffffff",
                      boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "10px",
                      bgcolor: "#fef3ee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.25,
                    }}
                  >
                    <PIcon sx={{ fontSize: 26, color: ACCENT }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 17, color: "#0f172a", mb: 1 }}>
                    {p.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: "#64748b" }}>
                    {p.desc}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* 5. DETAILED COMPARISON TABLE */}
      <Box sx={{ bgcolor: "#f8fafc", py: { xs: 8, md: 11 }, borderTop: "1px solid #e2e8f0" }}>
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1440, mx: "auto", px: { xs: 2.5, sm: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Side-by-Side Analysis
            </Typography>
            <Typography
              component="h2"
              sx={{ fontWeight: 800, fontSize: { xs: 26, md: 36 }, color: "#0f172a", mb: 1 }}
            >
              Retainer Features Comparison Matrix
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#64748b" }}>
              Comprehensive deliverable breakdown across all four corporate retainer plans
            </Typography>
          </Box>

          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              overflowX: "auto",
              boxShadow: "0 4px 16px rgba(0,0,0,0.03)",
            }}
          >
            <Table sx={{ minWidth: 840 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "#0d274d" }}>
                  <TableCell
                    sx={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: 15,
                      py: 2.5,
                      width: "32%",
                    }}
                  >
                    Deliverable / Legal Scope
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>
                    Strategical Counsel
                    <Typography sx={{ fontSize: 12, color: ACCENT, fontWeight: 700 }}>
                      ₹50,000 / mo
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: 700,
                      color: "#fff",
                      fontSize: 14,
                      bgcolor: "rgba(255, 255, 255, 0.08)",
                      borderLeft: `2px solid ${ACCENT}`,
                      borderRight: `2px solid ${ACCENT}`,
                    }}
                  >
                    Prelitigation On-Site
                    <Typography sx={{ fontSize: 12, color: ACCENT, fontWeight: 700 }}>
                      ₹1,00,000 / mo
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>
                    In-House Coordination
                    <Typography sx={{ fontSize: 12, color: ACCENT, fontWeight: 700 }}>
                      ₹75,000 / mo
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>
                    Pre-Qualification Opinions
                    <Typography sx={{ fontSize: 12, color: ACCENT, fontWeight: 700 }}>
                      ₹1,00,000 / mo
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <TableRow
                    key={row.feature}
                    sx={{
                      bgcolor: idx % 2 === 0 ? "#ffffff" : "#f8fafc",
                      "&:hover": { bgcolor: "#f1f5f9" },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 600, color: "#1e293b", fontSize: 14.5 }}>
                      {row.feature}
                      <Typography sx={{ fontSize: 11.5, color: "#94a3b8" }}>
                        {row.category}
                      </Typography>
                    </TableCell>

                    {/* Plan 1 */}
                    <TableCell align="center">
                      {typeof row.plan1 === "boolean" ? (
                        row.plan1 ? (
                          <CheckCircleIcon sx={{ color: "#10b981", fontSize: 20 }} />
                        ) : (
                          <CloseIcon sx={{ color: "#cbd5e1", fontSize: 20 }} />
                        )
                      ) : (
                        <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                          {row.plan1}
                        </Typography>
                      )}
                    </TableCell>

                    {/* Plan 2 (Highlighted) */}
                    <TableCell
                      align="center"
                      sx={{
                        bgcolor: idx % 2 === 0 ? "#fdfbf9" : "#faf5f0",
                        borderLeft: `2px solid ${ACCENT}`,
                        borderRight: `2px solid ${ACCENT}`,
                      }}
                    >
                      {typeof row.plan2 === "boolean" ? (
                        row.plan2 ? (
                          <CheckCircleIcon sx={{ color: ACCENT, fontSize: 22 }} />
                        ) : (
                          <CloseIcon sx={{ color: "#cbd5e1", fontSize: 20 }} />
                        )
                      ) : (
                        <Typography sx={{ fontSize: 14, fontWeight: 700, color: ACCENT }}>
                          {row.plan2}
                        </Typography>
                      )}
                    </TableCell>

                    {/* Plan 3 */}
                    <TableCell align="center">
                      {typeof row.plan3 === "boolean" ? (
                        row.plan3 ? (
                          <CheckCircleIcon sx={{ color: "#10b981", fontSize: 20 }} />
                        ) : (
                          <CloseIcon sx={{ color: "#cbd5e1", fontSize: 20 }} />
                        )
                      ) : (
                        <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                          {row.plan3}
                        </Typography>
                      )}
                    </TableCell>

                    {/* Plan 4 */}
                    <TableCell align="center">
                      {typeof row.plan4 === "boolean" ? (
                        row.plan4 ? (
                          <CheckCircleIcon sx={{ color: "#10b981", fontSize: 20 }} />
                        ) : (
                          <CloseIcon sx={{ color: "#cbd5e1", fontSize: 20 }} />
                        )
                      ) : (
                        <Typography sx={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>
                          {row.plan4}
                        </Typography>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* 6. HOW CORPORATE RETAINER WORKS (4 ONBOARDING STEPS) */}
      <Box sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 11 }, borderTop: "1px solid #e2e8f0" }}>
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1440, mx: "auto", px: { xs: 2.5, sm: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Simple Retainer Onboarding
            </Typography>
            <Typography
              component="h2"
              sx={{ fontWeight: 800, fontSize: { xs: 26, md: 36 }, color: "#0f172a" }}
            >
              How Our Monthly Legal Partnership Operates
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
              gap: 3.5,
            }}
          >
            {[
              {
                step: "01",
                title: "Scope Briefing",
                desc: "We analyze your enterprise contracts, employee strength, vendor contracts, and risk profile to select the optimal retainer package.",
              },
              {
                step: "02",
                title: "Retainer SLA Agreement",
                desc: "Execution of a formal SLA and strict Non-Disclosure Agreement outlining response turnaround times and scheduled weekly on-site hours.",
              },
              {
                step: "03",
                title: "Advocate Assignment",
                desc: "A dedicated senior advocate is assigned to your account for continuous consultations, document drafting, and office visits.",
              },
              {
                step: "04",
                title: "Active Protection",
                desc: "Continuous dispute mitigation, notice drafting, contract vetting, and regular monthly legal health status reviews.",
              },
            ].map((st, i) => (
              <Box
                key={i}
                sx={{
                  bgcolor: "#f8fafc",
                  p: { xs: 3.5, md: 4 },
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                  position: "relative",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                    borderColor: ACCENT,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 42,
                    fontWeight: 900,
                    color: "rgba(13, 39, 77, 0.12)",
                    lineHeight: 1,
                    mb: 1.5,
                  }}
                >
                  {st.step}
                </Typography>
                <Typography sx={{ fontSize: 18, fontWeight: 700, color: "#0f172a", mb: 1.25 }}>
                  {st.title}
                </Typography>
                <Typography sx={{ fontSize: 14, lineHeight: 1.6, color: "#64748b" }}>
                  {st.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 7. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <Box sx={{ bgcolor: "#f8fafc", py: { xs: 8, md: 11 }, borderTop: "1px solid #e2e8f0" }}>
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 960, mx: "auto", px: { xs: 2.5, sm: 4 } }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Enterprise Queries
            </Typography>
            <Typography
              component="h2"
              sx={{ fontWeight: 800, fontSize: { xs: 26, md: 36 }, color: "#0f172a", mb: 1.5 }}
            >
              Frequently Asked Retainer Questions
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#64748b" }}>
              Key terms, scope definitions, and operational logistics for corporate retainers
            </Typography>
          </Box>

          <Stack spacing={2}>
            {FAQS.map((faq, index) => (
              <Accordion
                key={index}
                elevation={0}
                sx={{
                  bgcolor: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px !important",
                  "&:before": { display: "none" },
                  overflow: "hidden",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: ACCENT }} />}
                  sx={{
                    px: { xs: 2.5, sm: 3 },
                    py: 1,
                    "& .MuiAccordionSummary-content": { my: 1.5 },
                  }}
                >
                  <Typography sx={{ fontWeight: 700, fontSize: { xs: 15, md: 16 }, color: "#0f172a" }}>
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: { xs: 2.5, sm: 3 }, pt: 0, pb: 2.5 }}>
                  <Typography sx={{ fontSize: 14.5, lineHeight: 1.65, color: "#475569" }}>
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* 8. EXECUTIVE CTA STRIP */}
      <Box
        sx={{
          bgcolor: "#0d274d",
          color: "#fff",
          py: { xs: 8, md: 10 },
          px: { xs: 2.5, sm: 4 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container data-aos="fade-up" maxWidth={false} sx={{ maxWidth: 1100, mx: "auto", textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(255, 255, 255, 0.1)",
              px: 2.2,
              py: 0.6,
              borderRadius: "20px",
              mb: 2.5,
            }}
          >
            <HelpOutlineOutlinedIcon sx={{ fontSize: 16, color: ACCENT }} />
            <Typography
              sx={{
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Custom Enterprise Retainer Solutions
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 26, md: 38 },
              mb: 2,
              lineHeight: 1.25,
            }}
          >
            Require Multi-Branch Retainer Coverage or Custom Scope?
          </Typography>
          <Typography
            sx={{
              fontSize: 16,
              color: "rgba(255, 255, 255, 0.85)",
              maxWidth: 720,
              mx: "auto",
              mb: 4.5,
              lineHeight: 1.6,
            }}
          >
            Speak directly with our managing partners to design a tailored monthly legal framework incorporating multi-city branch visits, high-volume property verification, and specialized tribunal coverage.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2.5,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mx: "auto",
            }}
          >
            <Button
              component={Link}
              to="/enquiry?inquiryFor=Custom%20Corporate%20Monthly%20Plan"
              variant="contained"
              disableElevation
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4.5,
                py: 1.6,
                bgcolor: ACCENT,
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                textTransform: "none",
                borderRadius: "6px",
                "&:hover": { bgcolor: ACCENT_HOVER },
              }}
            >
              Submit Custom Retainer Enquiry
            </Button>

            <Button
              variant="outlined"
              startIcon={<WhatsAppIcon sx={{ color: "#25D366" }} />}
              onClick={() => {
                const text =
                  "Hello, I would like to discuss a customized Corporate Monthly Legal Retainer for our enterprise.";
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              sx={{
                px: 4,
                py: 1.6,
                borderColor: "rgba(255, 255, 255, 0.35)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 15,
                textTransform: "none",
                borderRadius: "6px",
                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255, 255, 255, 0.08)",
                },
              }}
            >
              Direct WhatsApp Discussion
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Footer />
    </ThemeProvider>
  );
};

export default CorporatePlansPage;
