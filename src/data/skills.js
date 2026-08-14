import {
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  {
    name: "Python",
    icon: FaPython,
    level: 90,
    color: "text-yellow-500",
  },
  {
    name: "Django",
    icon: SiDjango,
    level: 90,
    color: "text-green-700",
  },
  {
    name: "React",
    icon: FaReact,
    level: 85,
    color: "text-cyan-500",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: 80,
    color: "text-blue-700",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: 65,
    color: "text-yellow-400",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    level: 90,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: SiCss,
    level: 85,
    color: "text-blue-500",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    level: 70,
    color: "text-red-500",
  },

  // Technologies en cours d'apprentissage
  {
    name: "TypeScript (Learning)",
    icon: SiTypescript,
    level: 30,
    color: "text-blue-600",
  },
  {
    name: "Docker (Learning)",
    icon: FaDocker,
    level: 25,
    color: "text-blue-400",
  },
];