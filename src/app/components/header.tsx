"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
    const pathname = usePathname();

    return (
        <aside className='-ml-[8px] mb-16 tracking-tight'>
          <div className="lg:sticky lg:top-20">
            <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
              <div className="flex flex-row space-x-0 pr-10">
                <a className={`transition-all mx-1 hover:bg-gray-800 hover:text-neutral-200 hover:text-neutral-200 flex align-middle relative py-1 px-2 rounded-lg ${pathname === '/' ? 'bg-gray-800 text-neutral-200' : ''}`} href="/">home</a>
                <a className={`transition-all mx-1 hover:bg-gray-800 hover:text-neutral-200 hover:text-neutral-200 flex align-middle relative py-1 px-2 rounded-lg ${pathname === '/work' ? 'bg-gray-800 text-neutral-200' : ''}`} href="/work">work</a>
                <a className={`transition-all mx-1 hover:bg-gray-800 hover:text-neutral-200 hover:text-neutral-200 flex align-middle relative py-1 px-2 rounded-lg ${pathname === '/blog' ? 'bg-gray-800 text-neutral-200' : ''}`} href="/blog">blog</a>
              </div>
            </nav>
          </div>
        </aside>
    );
};

export default Header;
