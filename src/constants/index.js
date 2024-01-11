import { web, mobile, creator } from "../assets";

const navLinks = [
  {
    name: "Services",
    type: "link",
    href: "/services"
  },
  
  {
    name: "Contact",
    type: "link",
    href: "/contact"
  },
  
  {
    name: "About",
    type: "link",
    href: "/about"
  },
  
  {
    name: "Team",
    type: "link",
    href: "/team"
  },
  
  {
    name: "Blog",
    type: "link",
    href: "/blog"
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "CMS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: "ICON",
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export { navLinks, services };
