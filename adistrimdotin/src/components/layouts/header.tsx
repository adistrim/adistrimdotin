"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/theme-toggle";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blogs" },
  ];

  const getLinkClassName = (path: string) => `
    text-lg
    font-medium
    transition-colors
    no-underline
    mr-4
    ${pathname === path 
      ? "text-foreground font-semibold" 
      : "text-muted-foreground hover:text-foreground"
    }
  `;

  return (
    <aside className="mb-10">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-center justify-between relative"
          id="nav"
          aria-label="Main navigation"
        >
          <div className="flex">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={getLinkClassName(path)}
                aria-current={pathname === path ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </div>
          <div>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
};


export default Header;
