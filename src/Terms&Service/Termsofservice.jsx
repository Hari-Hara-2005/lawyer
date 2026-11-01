import { Link } from "@mui/material";
import {
  FIRM_NAME,
  SITE_DOMAIN,
  CONTACT_EMAIL,
} from "../Terms&Service/Legalconfig";
import LegalLayout from "../Components/Legallayout";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SECTIONS = [
  {
    heading: "Definitions",
    items: [
      { term: "'Firm'", text: `means ${FIRM_NAME}.` },
      {
        term: "'Website'",
        text: `means all pages, posts, material, or information included within the website available at ${SITE_DOMAIN}.`,
      },
      {
        term: "'User'",
        text: "means any person using, reading, listening to, watching, or accessing any content available on the Website, through any medium, directly or indirectly.",
      },
      {
        term: "'Use' or 'access'",
        text: "means accessing the Website or its contents.",
      },
    ],
  },
  {
    heading: "Acceptance of Terms",
    paragraphs: [
      "By using this Website, you agree to these Terms of Service, the Disclaimer, and the Privacy Policy.",
    ],
  },
  {
    heading: "Intellectual Property and Protection",
    paragraphs: [
      "The User acknowledges that the contents of this Website, including the Firm's logo, pictures, and text, except where courtesy is expressly credited, are the intellectual property of the Firm.",
      "All contents of the Website are protected by applicable laws. The Firm reserves the right to take suitable legal action against any violation of its legal rights.",
    ],
  },
  {
    heading: "Engaging the Firm",
    paragraphs: [
      "It is a legal requirement and the Firm's policy to enter into an advocate-client relationship only through a Vakalatnama or a written engagement or retainer agreement, either physically or electronically. Use of this Website, email, or any other electronic medium does not create such a relationship.",
    ],
  },
  {
    heading: "Comments and Conduct",
    paragraphs: [
      "Comments containing personal information such as addresses, website links, email IDs, or phone numbers will not be approved and will not be visible to the public. Comments containing abusive, hateful, or swear words will not be approved either.",
      "The Firm reserves its legal rights against Users who use abusive, hateful, or swear words in their comments.",
    ],
  },
  {
    heading: "Changes to These Terms",
    paragraphs: [
      "These terms and disclaimers may be changed without notice. It is each User's responsibility to check and review these terms and conditions, and the Firm is not required to inform Users of any changes.",
    ],
  },
  {
    heading: "Applicable Law",
    paragraphs: [
      "These terms are subject to the applicable laws at the relevant time.",
    ],
  },
  {
    heading: "Complaints",
    paragraphs: [
      <>
        In case of any complaint or conflict regarding professional ethics in
        relation to this Website, please write to us at{" "}
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          sx={{ color: "primary.main", fontWeight: 600 }}
        >
          {CONTACT_EMAIL}
        </Link>
        .
      </>,
    ],
  },
];

const TermsOfService = () => (
  <>
    <LegalLayout
      title="Terms of Service"
      intro="These terms apply to everyone who uses this website."
      sections={SECTIONS}
    />
    <Footer />
  </>
);

export default TermsOfService;
