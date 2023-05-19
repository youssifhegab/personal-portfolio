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
import work1 from "./assets/work1.webp";
import work11 from "./assets/work11.webp";
import work12 from "./assets/work12.webp";
import work13 from "./assets/work13.webp";
import work2 from "./assets/work2.webp";
import work21 from "./assets/work21.webp";
import work22 from "./assets/work22.webp";
import work23 from "./assets/work23.webp";
import work3 from "./assets/work3.webp";
import work31 from "./assets/work31.webp";
import work32 from "./assets/work32.webp";

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
  { id: 6, icon: <SiGraphql />, text: "Graphql" },
  { id: 7, icon: <TbBrandTailwind />, text: "Tailwind" },
  { id: 8, icon: <SiReactquery />, text: "React query" },
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
    name: "dashboard",
    category: "web",
    githubLink: "",
    link: "",
    workImages: [
      { id: 1, image: work11 },
      { id: 2, image: work12 },
      { id: 3, image: work13 },
    ],
  },
  {
    id: 2,
    img: work2,
    name: "Storefront",
    category: "web",
    githubLink: "",
    workImages: [
      { id: 1, image: work21 },
      { id: 2, image: work22 },
      { id: 3, image: work23 },
    ],
    link: "https://www.orderfast.com/en/nolabakery",
  },
  {
    id: 3,
    img: work3,
    name: "Storefront app",
    category: "app",
    githubLink: "",
    workImages: [
      { id: 1, image: work31 },
      { id: 2, image: work32 },
    ],
    link: "https://apps.apple.com/us/app/id6444801817",
  },
];

export const workNavs = ["All", "Web", "App"];

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
