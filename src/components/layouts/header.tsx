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
    px-2 
    rounded-lg
    ${pathname === path ? "bg-neutral-200 dark:bg-gray-800 dark:text-white dark:hover:text-neutral-200" : ""}
  `;

  return (
    <aside className="mb-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          aria-label="Main navigation"
        >
          <div className="flex flex-row space-x-1 pr-10">
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
});

export default Header;
