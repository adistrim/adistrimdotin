"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Changa } from "next/font/google";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

const changa = Changa({ subsets: ["latin"] });

const Header: React.FC = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <aside className={`mb-10 tracking-tight ${changa.className}`}>
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
          aria-label="Main navigation"
        >
          <div className="flex flex-row space-x-1 pr-10">
            <a
              className={`transition-all hover:bg-neutral-200 dark:hover:bg-gray-800 hover:text-gray-700 dark:text-gray-200 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 rounded-lg ${pathname === "/" ? "bg-neutral-200 dark:bg-gray-800 dark:text-white dark:hover:text-neutral-200" : ""}`}
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
            >
              home
            </a>
            <a
              className={`transition-all hover:bg-neutral-200 dark:hover:bg-gray-800 hover:text-gray-700 dark:text-gray-200 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 rounded-lg ${pathname === "/blog" ? "bg-neutral-200 dark:bg-gray-800 dark:text-white dark:hover:text-neutral-200" : ""}`}
              href="/blog"
              aria-current={pathname === "/blog" ? "page" : undefined}
            >
              blog
            </a>
          </div>
          <div>
            {isMounted && (
              <button
                className="rounded-full p-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
              >
                {theme === "dark" ? (
                  <FiMoon size={20} aria-hidden="true" />
                ) : (
                  <FiSun size={20} aria-hidden="true" />
                )}
              </button>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Header;
