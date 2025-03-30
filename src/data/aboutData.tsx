// data/aboutData.tsx
import { DiGoogleCloudPlatform } from "react-icons/di";
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaAws,
  FaSwift,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiTailwindcss,
  SiAdobe,
  SiSwagger,
  SiMongodb,
  SiWarp,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

export const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, link: "https://reactjs.org/" },
      { name: "Vue.js", icon: <FaVuejs />, link: "https://vuejs.org/" },
      { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/" },
      { name: "Nuxt.js", icon: <SiNuxtdotjs />, link: "https://nuxt.com/" },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/" },
      {
        name: "Express.js",
        icon: <SiExpress />,
        link: "https://expressjs.com/",
      },
      { name: "Swagger", icon: <SiSwagger />, link: "https://swagger.io/" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, link: "https://git-scm.com/" },
      { name: "Github", icon: <FaGithub />, link: "https://github.com/" },
      {
        name: "VSCODE",
        icon: <VscVscodeInsiders />,
        link: "https://code.visualstudio.com/",
      },
      { name: "Warp", icon: <SiWarp />, link: "https://www.warp.dev/" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "Docker", icon: <FaDocker />, link: "https://www.docker.com/" },
      { name: "AWS", icon: <FaAws />, link: "https://aws.amazon.com/" },
      {
        name: "GCP",
        icon: <DiGoogleCloudPlatform />,
        link: "https://console.cloud.google.com/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
      },
    ],
  },
  {
    title: "Design and Editing",
    skills: [
      { name: "Figma", icon: <FaFigma />, link: "https://www.figma.com/" },
      { name: "Adobe", icon: <SiAdobe />, link: "https://www.adobe.com/" },
    ],
  },
  {
    title: "Software Development",
    skills: [
      {
        name: "Swift",
        icon: <FaSwift />,
        link: "https://developer.apple.com/swift/",
      },
    ],
  },
];
