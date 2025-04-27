import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHashnode,
  FaXTwitter,
  FaFileLines,
} from "react-icons/fa6";

import type { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center p-2 rounded-lg transition-all duration-300 ease-in-out"
  >
    <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300" />
    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 hidden sm:inline transition-colors duration-300">
      {label}
    </span>
  </Link>
);

const SocialLinksSection: React.FC = () => {
  const links: SocialLinkProps[] = [
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
    { href: "https://github.com/adistrim", icon: FaGithub, label: "GitHub" },
    {
      href: "https://linkedin.com/in/adistrim",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/_adistrim_",
      icon: FaXTwitter,
      label: "Twitter",
    },
    {
      href: "https://adistrim.hashnode.dev/",
      icon: FaHashnode,
      label: "Hashnode",
    },
  ];

  return (
    <section className="mt-10">
      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </section>
  );
};

export default SocialLinksSection;
