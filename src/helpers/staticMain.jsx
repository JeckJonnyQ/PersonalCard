import EmailIcon from "../assets/icons/EmailIcon.png";
import LinkedInIcon from "../assets/icons/LinkedInIcon.png";

const personalData = {
  name: "Laura Smith",
  job: "Frontend Developer",
  website: "laurasmith.website",
  websiteLink: "#",
  email: {
    link: "https://www.google.com/intl/ru/gmail/about/",
    icon: EmailIcon,
    alt: "Email Icon",
    text: "Email",
  },
  linkedin: {
    link: "https://www.linkedin.com/",
    icon: LinkedInIcon,
    alt: "LinkedIn Icon",
    text: "LinkedIn",
  },
  about:
    "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.",
  interests:
    "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
};

export default personalData;
