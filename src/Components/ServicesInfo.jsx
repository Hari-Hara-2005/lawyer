import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArticleIcon from "@mui/icons-material/Article";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GroupsIcon from "@mui/icons-material/Groups";
import LinkIcon from "@mui/icons-material/Link";

const WHATSAPP_NUMBER = "919884483327";

function openWhatsAppQuotation(serviceTitle) {
  const message = `Hello, I'm interested in getting a quotation for your "${serviceTitle}" services.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const SERVICES = [
  {
    title: "Real Estate, Property Management & Property Lawyer",
    Icon: GavelIcon,
    description:
      "Expert legal advisory and dispute resolution for real estate acquisitions, title due diligence, RERA compliance, tenancy agreements, and property management.",
  },
  {
    title: "Business & Corporate Lawyer",
    Icon: AccountBalanceIcon,
    description:
      "Comprehensive counsel on corporate governance, business entity structuring, commercial contracts, regulatory compliance, and corporate dispute litigation.",
  },
  {
    title: "Documentation and Transaction Structuring Lawyer",
    Icon: ArticleIcon,
    description:
      "Specialized drafting and vetting of commercial contracts, joint ventures, MOUs, deeds, and complex financial transaction structures to protect client assets.",
  },
  {
    title: "Sarfaesi & Bankruptcy Lawyer",
    Icon: LockOpenIcon,
    description:
      "Robust defense and representation under the SARFAESI Act and Insolvency & Bankruptcy Code (IBC), debt recovery proceedings, and DRT/NCLT litigation.",
  },
  {
    title: "Business & Media Advisory Lawyer",
    Icon: LiveTvIcon,
    description:
      "Strategic legal guidance for businesses, media networks, and entertainment ventures, covering intellectual property, licensing, and media regulations.",
  },
  {
    title: "Legal Audit",
    Icon: GroupsIcon,
    description:
      "Systematic review and auditing of corporate statutory compliances, contractual exposure, regulatory filings, and governance risk mitigation frameworks.",
  },
  {
    title: "Civil & Family Lawyer",
    Icon: LinkIcon,
    description:
      "Dedicated and compassionate representation in civil suits, matrimonial disputes, family partition settlements, inheritance, and succession planning.",
  },
];

const ServicesInfo = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#ffffff",
        py: { xs: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1360,
          mx: "auto",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              color: "#e52b2b",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            We Can Do
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 28, sm: 36, md: 42 },
              color: "#1a202c",
              mb: 1.5,
            }}
          >
            What You Need
          </Typography>
          <Typography
            sx={{
              maxWidth: 620,
              mx: "auto",
              fontSize: 15,
              lineHeight: 1.6,
              color: "#64748b",
            }}
          >
            Our dedicated legal specialists bring deep expertise and strategic
            perspective across commercial, property, SARFAESI, corporate, and civil matters.
          </Typography>
        </Box>

        <Box
          onMouseLeave={() => setActiveCard(0)}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2.5, sm: 3, md: 3 },
          }}
        >
          {SERVICES.map(({ title, Icon, description }, i) => {
            const isActive = activeCard === i;
            return (
              <Box
                key={title}
                onMouseEnter={() => setActiveCard(i)}
                onClick={() => openWhatsAppQuotation(title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openWhatsAppQuotation(title);
                  }
                }}
                sx={{
                  flex: {
                    xs: "0 0 100%",
                    sm: "0 0 calc(50% - 16px)",
                    md: "0 0 calc(25% - 18px)",
                  },
                  maxWidth: {
                    xs: "100%",
                    sm: "calc(50% - 16px)",
                    md: "calc(25% - 18px)",
                  },
                  minWidth: { md: 260 },
                  bgcolor: isActive ? "#0d274d" : "#f7f8fa",
                  color: isActive ? "#ffffff" : "#1e293b",
                  py: { xs: 4, md: 4.75 },
                  px: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "2px",
                  border: "1px solid",
                  borderColor: isActive ? "#0d274d" : "#ebecee",
                  boxShadow: isActive
                    ? "0 12px 28px rgba(13, 39, 77, 0.22)"
                    : "0 2px 6px rgba(0,0,0,0.02)",
                  transform: isActive ? "translateY(-4px)" : "none",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  outline: "none",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Icon
                  sx={{
                    fontSize: 48,
                    color: isActive ? "#ffffff" : "#e52b2b",
                    mb: 2.5,
                    transition: "color 0.3s ease",
                  }}
                />
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 16.5, md: 17.5 },
                    color: isActive ? "#ffffff" : "#1e293b",
                    lineHeight: 1.35,
                    mb: 1.5,
                    minHeight: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.3s ease",
                  }}
                >
                  {title}
                </Typography>
                <Box
                  sx={{
                    width: 34,
                    height: 2.5,
                    bgcolor: isActive ? "#ffffff" : "#e52b2b",
                    borderRadius: "1px",
                    mb: 2.25,
                    transition: "background-color 0.3s ease",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: isActive ? "rgba(255, 255, 255, 0.9)" : "#64748b",
                    transition: "color 0.3s ease",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesInfo;
