import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHashnode,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-[1rem] mx-1 sm:p-0 bg-gray-1000 text-white">
      <div className="flex mb-[15rem] items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link
            href="https://blog.adistrim.in/"
            className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200"
            aria-label="Email"
          >
            <FaHashnode size={20} />
          </Link>
          <Link
            href="https://github.com/adistrim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/adistrim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://twitter.com/_adistrim_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200"
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
          </Link>
          <Link
            href="mailto:araj@adistrim.in"
            className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>
        <Link
          href="/changelog"
          rel="noopener noreferrer"
          className="hover:text-gray-400 italic text-gray-500 text-base"
          tabIndex={0}
        >
          Changelog
        </Link>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-gray-500 dark:text-gray-300 italic text-base">
          © 2024 Aditya Raj (adistrim)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
