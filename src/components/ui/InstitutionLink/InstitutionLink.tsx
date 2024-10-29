import Image from "next/image";
import Link from "next/link";
import { InstitutionLinkProps } from "./types";

export const InstitutionLink = ({
    href,
    logo,
    name,
    className = ""
}: InstitutionLinkProps) => (
    <Link
        className={`border border-neutral-200 dark:border-neutral-700 bg-neutral-200 
    dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 
    text-neutral-900 dark:text-neutral-100 no-underline hover:bg-neutral-300 
    dark:hover:bg-neutral-700 transition-colors ${className}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${name} website`}
    >
        <Image
            src={logo}
            alt={`${name} Logo`}
            width={14}
            height={14}
            className="h-3.5 w-auto mr-1"
        />
        {name}
    </Link>
);
