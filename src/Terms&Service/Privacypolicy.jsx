import Footer from "../Components/Footer";
import LegalLayout from "../Components/Legallayout";
import Navbar from "../Components/Navbar";
import { FIRM_NAME } from "../Terms&Service/Legalconfig";

const SECTIONS = [
  {
    heading: "No Collection of Personal Data",
    paragraphs: [
      "This Website does not collect any personal data from the User on its own, except anonymous geographical location through Google.",
      "However, to make comments, a User may reveal their email ID and name. The Firm assures that email IDs shared here are not traded for any commercial benefit. The Firm will not email you anything unless you subscribe to the Website to receive automatic updates on pages and posts.",
    ],
  },
  {
    heading: "Limited Use of Cookies",
    paragraphs: [
      "This Website uses cookies for its appearance in the browser. Most web browsers automatically accept cookies, but allow you to modify security settings so that you can approve or reject cookies on a case-by-case basis.",
    ],
  },
  {
    heading: "Anonymous Website Data Collection",
    paragraphs: [
      "By using this Website, the User gives permission to collect information about the pages served to the User as an anonymous user, for the purpose of calculating aggregate site statistics.",
      "If you visit this Website, you authorize it to use information you provide to personalize the information it delivers to you, and to use the User's demographic information when calculating aggregate customer data.",
    ],
  },
  {
    heading: "Personal Data in Comments",
    paragraphs: [
      "If a User leaves personal information in the comments section, such as addresses, website links, email ID, or phone number, the comment will not be approved and will not be visible to the public.",
      "Similarly, comments containing abusive, hateful, or swear words will not be approved. The Firm also reserves its legal rights against Users who use abusive, hateful, or swear words in their comments.",
    ],
  },
  {
    heading: "Applicable Law",
    paragraphs: [
      "This Privacy Policy is subject to the applicable laws at the relevant time.",
    ],
  },
];

const PrivacyPolicy = () => (
  <>
    <LegalLayout
      title="Privacy Policy"
      intro={`This policy explains what information the ${FIRM_NAME} website collects, and what it does not.`}
      sections={SECTIONS}
    />
    <Footer />
  </>
);

export default PrivacyPolicy;
