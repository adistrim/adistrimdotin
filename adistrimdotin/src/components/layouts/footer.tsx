import { SOCIAL_LINKS } from "@/lib/socialLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-4 mx-1 sm:p-0">
      <div className="flex mb-[15rem] items-center justify-between">
        <div className="flex items-center space-x-4">
          {SOCIAL_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </Link>
          ))}
        </div>
        <Link
          href="/changelog"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors italic text-base no-underline"
          tabIndex={0}
        >
          Changelog
        </Link>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-muted-foreground italic text-base">
          © {new Date().getFullYear()} Aditya Raj (adistrim)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
