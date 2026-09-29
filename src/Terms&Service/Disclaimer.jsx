import Footer from "../Components/Footer";
import LegalLayout from "../Components/Legallayout";
import Navbar from "../Components/Navbar";
import { FIRM_NAME } from "../Terms&Service/Legalconfig";

const SECTIONS = [
  {
    heading: "About this Website",
    paragraphs: [
      `This Website is for informational purposes only and not for advertising or solicitation of work by ${FIRM_NAME} (the "Firm"). The Firm does not share any case details or news about its professional legal practice here.`,
      "The Website is an effort to create legal awareness amongst the public.",
    ],
  },
  {
    heading: "Use of this Website and Information is at Your Own Risk",
    paragraphs: [
      "In no way should any content on this Website be considered as legal advice on any matter by the User. A User may not act or rely on any of the materials or information available on the Website.",
      "The Firm makes no warranty or guarantee concerning the accuracy, reliability, completeness, availability, or timeliness of the contents of this Website or of the information or documents in it. Use of materials found on this Website for any purpose is strictly at the User's own risk.",
      "Under no circumstances shall the Firm be liable for any direct, indirect, legal, equitable, special, compensatory, incidental, or consequential damages of any kind arising from access to, use of, or reliance upon this Website or the information and documents contained in it.",
    ],
  },
  {
    heading:
      "Use of this Website Does Not Create an Advocate-Client Relationship",
    paragraphs: [
      "The use of, access to, or reliance on the contents of this Website does not create an advocate-client relationship between Users and any other party, including the Firm or its advocates.",
      "Neither transmission nor receipt of information from this Website creates an advocate-client relationship between Users and any other party, including the Firm or its advocates.",
    ],
  },
  {
    heading:
      "Emailing the Firm Does Not Create an Advocate-Client Relationship",
    paragraphs: [
      "Emailing or writing to the Firm through the email address or any contact link on this Website does not create an advocate-client relationship between Users and the Firm. The Firm will not be deemed to enter into an advocate-client relationship online, through this Website, by electronic mail, or through any other electronic medium.",
      "It is a legal requirement and the Firm's policy to enter into an advocate-client relationship only through a Vakalatnama or a written engagement or retainer agreement, either physically or electronically.",
    ],
  },
  {
    heading: "Do Not Email Confidential Information",
    paragraphs: [
      "Transmission of information online, over the Internet, or through electronic means can be unstable, unreliable, and insecure. There is a risk that information may be intercepted illegally. There may also be a risk of waiving advocate-client and/or work-product privileges that might attach to such communications, where a proper advocate-client relationship does not exist.",
      "You should not send information or facts by email relating to your legal problem or question that are confidential in nature. If you are not an existing client of the Firm, your email may not be privileged or confidential.",
    ],
  },
  {
    heading:
      "Replies to Comments Do Not Create an Advocate-Client Relationship",
    paragraphs: [
      "The Firm may sometimes reply to comments made by Users. Such replies do not create an advocate-client relationship and are not legal advice.",
      "A User who comments should not rely on the Firm's replies, as they are given on the abstract provision of law and not on the particular facts and circumstances of the User. A User should seek independent legal advice from a legal expert by disclosing all facts and circumstances, and must not rely on information and contents available on this Website.",
    ],
  },
  {
    heading: "This Website is Not a Solicitation or Legal Advice",
    paragraphs: [
      "This Website is not intended to be a source of solicitation or legal advice. The User should not consider the Website's information to be an invitation for an advocate-client relationship, should not rely on the information provided here, and should always seek the advice of competent legal counsel.",
      "The Website does not share case details where the Firm was representing any of the parties as counsel or advocate.",
    ],
  },
  {
    heading: "Deadlines are Fatal to Your Legal Rights and Remedies",
    paragraphs: [
      "Because deadlines are fatal to legal rights and remedies, anyone facing a legal problem or issue should speak to a competent advocate as soon as possible. The specific facts of any situation may give rise to rules and regulations of which you may or may not be aware.",
      "Never delay in contacting a competent advocate, and never rely on email as a method of contacting an advocate.",
    ],
  },
];

const Disclaimer = () => (
  <>
    <LegalLayout
      title="Disclaimer"
      intro="The Bar Council of India prohibits advocates from engaging in any form of advertisement or solicitation. Please read this disclaimer before using the website."
      sections={SECTIONS}
    />
    <Footer />
  </>
);

export default Disclaimer;
