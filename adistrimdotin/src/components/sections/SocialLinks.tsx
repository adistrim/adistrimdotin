import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/socialLinks";

const SocialLinksSection = () => {
  return (
    <section className="mt-10">
      <div className="flex flex-wrap justify-center gap-8 ml-0.5">
        {SOCIAL_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center transition-all duration-300 ease-in-out no-underline"
          >
            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            <span className="ml-2 text-sm text-muted-foreground group-hover:text-foreground hidden sm:inline transition-colors duration-300">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialLinksSection;
