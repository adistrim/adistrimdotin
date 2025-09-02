import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileLines,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "mailto:araj@adistrim.in",
    icon: FaEnvelope,
    label: "Email",
  },
  {
    href: "/resume",
    icon: FaFileLines,
    label: "Resume",
  },
  {
    href: "https://github.com/adistrim",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/adistrim",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
];
