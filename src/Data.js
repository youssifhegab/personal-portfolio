import {
  FaNodeJs,
  FaReact,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTypescript, SiGraphql, SiReactquery } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandReactNative,
} from "react-icons/tb";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.jpeg";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
  <FaGithub
    onClick={() => window.open("https://github.com/youssifhegab", "_blank")}
  />,
  <FaLinkedin
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/youssif-hegab-036b63189/",
        "_blank"
      )
    }
  />,
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Youssif Hegab",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+201153613622",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "youssif.hegab123@gmail.com",
  },
];

export const icons = [
  { id: 1, icon: <FaNodeJs />, text: "Javascript" },
  { id: 2, icon: <SiTypescript />, text: "Typescript" },
  { id: 3, icon: <FaReact />, text: "React" },
  { id: 4, icon: <TbBrandNextjs />, text: "Nextjs" },
  { id: 5, icon: <TbBrandReactNative />, text: "React Native" },
  { id: 4, icon: <SiGraphql />, text: "Graphql" },
  { id: 6, icon: <TbBrandTailwind />, text: "Tailwind" },
  { id: 7, icon: <SiReactquery />, text: "React query" },
];

export const experiences = [
  {
    id: 1,
    year: "2022",
    position: "Web Developer - freelance",
    company: "MakhzanX",
  },
  {
    id: 2,
    year: "2021",
    position: "Junior Web Developer",
    company: "Zyda",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2+",
    itemName: "Years Of Experience",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    hasGit: true,
    hasView: true,
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    hasGit: true,
    hasView: true,
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "app",
    hasGit: true,
    hasView: true,
  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Haram, Giza/Egypt",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "youssif.hegab123@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+201153613622",
  },
];
