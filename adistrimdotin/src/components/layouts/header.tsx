"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/theme-toggle";

const Header = React.memo(() => {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blogs" },
  ];

  const getLinkClassName = (path: string) => `
    py-1 
    px-3 
    rounded-lg
    text-base
    font-medium
    transition-colors
    no-underline
    ${pathname === path ? "bg-neutral-200 dark:bg-zinc-800 dark:text-white" : ""}
  `;

  return (
    <aside className="mb-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          aria-label="Main navigation"
        >
          <div className="flex flex-row space-x-2 pr-10">
            <div className="flex space-x-1">
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
          </div>
          <div>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
});

Header.displayName = "Header";

export default Header;