import { web, mobile, backend, creator } from "../assets";

const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "team",
    title: "Team",
  },
  {
    id: "blog",
    title: "Blog",
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
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export { navLinks, services };
