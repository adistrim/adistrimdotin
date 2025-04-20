import React from "react";
import Link from "next/link";
import {
  Mail,
  FileText,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  Hash,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
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
    { href: "mailto:adistrim.dev@gmail.com", icon: Mail, label: "Email" },
    {
      href: "/resume",
      icon: FileText,
      label: "Resume",
    },
    { href: "https://github.com/adistrim", icon: GithubIcon, label: "GitHub" },
    {
      href: "https://linkedin.com/in/adistrim",
      icon: LinkedinIcon,
      label: "LinkedIn",
    },
    {
      href: "https://twitter.com/_adistrim_",
      icon: TwitterIcon,
      label: "Twitter",
    },
    { href: "https://adistrim.hashnode.dev/", icon: Hash, label: "Hashnode" },
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
