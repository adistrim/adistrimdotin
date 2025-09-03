import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const InstitutionLink = ({
  href,
  logo,
  name,
}: {
  href: string;
  logo: string;
  name: string;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${name} website`}
    className="no-underline"
  >
    <Badge variant="outline">
      <Image
        src={logo}
        alt={`${name} Logo`}
        width={16}
        height={16}
        className="h-3.5 w-auto mr-1"
      />
      {name}
    </Badge>
  </Link>
);
