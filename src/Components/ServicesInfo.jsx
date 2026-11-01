import { Box, Container, Typography } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArticleIcon from "@mui/icons-material/Article";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import GroupsIcon from "@mui/icons-material/Groups";
import LinkIcon from "@mui/icons-material/Link";
import { ACCENT } from "../Theme.js";

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
              color: ACCENT,
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
              color: "#1a1412",
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
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: { xs: 2.5, sm: 3, md: 3 },
          }}
        >
          {SERVICES.map(({ title, Icon, description }, i) => (
            <Box
              key={title}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 80 + 60}
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
                display: "flex",
              }}
            >
              <Box
                onClick={() => openWhatsAppQuotation(title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    openWhatsAppQuotation(title);
                  }
                }}
                sx={{
                  width: "100%",
                  bgcolor: "#fcfaf9",
                  color: "#1a1412",
                  py: { xs: 4, md: 4.75 },
                  px: { xs: 2.5, md: 3 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: "1px solid #ebe5e1",
                  boxShadow: "0 3px 12px rgba(0,0,0,0.03)",
                  outline: "none",
                  transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.28s ease, background-color 0.28s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: ACCENT,
                    bgcolor: "#ffffff",
                    boxShadow: "0 16px 36px rgba(185, 89, 47, 0.16)",
                    "& .service-card-icon": {
                      transform: "scale(1.12)",
                    },
                    "& .service-card-title": {
                      color: ACCENT,
                    },
                    "& .service-card-bar": {
                      width: 48,
                    },
                  },
                }}
              >
                <Icon
                  className="service-card-icon"
                  sx={{
                    fontSize: 48,
                    color: ACCENT,
                    mb: 2.5,
                    transition: "transform 0.28s ease, color 0.28s ease",
                  }}
                />
                <Typography
                  component="h3"
                  className="service-card-title"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: 16.5, md: 17.5 },
                    color: "#1a1412",
                    lineHeight: 1.35,
                    mb: 1.5,
                    minHeight: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.28s ease",
                  }}
                >
                  {title}
                </Typography>
                <Box
                  className="service-card-bar"
                  sx={{
                    width: 32,
                    height: 2.5,
                    bgcolor: ACCENT,
                    borderRadius: "1px",
                    mb: 2.25,
                    transition: "width 0.28s ease",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 13.5,
                    lineHeight: 1.65,
                    color: "#64748b",
                  }}
                >
                  {description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesInfo;
