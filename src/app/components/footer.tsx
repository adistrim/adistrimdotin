"use client";
import React from "react";
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Changa } from "next/font/google";

const changa = Changa({ subsets: ["latin"] });

const Footer: React.FC = () => {
    const pathname = usePathname();

    return (
        <footer className={`my-[1rem] mx-1 sm:p-0 bg-gray-1000 text-white ${changa.className}`}>
            <div className="flex mb-[15rem] items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <a href="https://github.com/adistrim" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200" aria-label="GitHub"><FaGithub size={20} /></a>
                    <a href="https://linkedin.com/in/adistrim" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
                    <a href="https://twitter.com/_adistrim_" target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200" aria-label="Twitter"><FaTwitter size={20} /></a>
                    <a href="mailto:adistrim.dev@gmail.com" className="text-neutral-500 dark:text-gray-300 hover:text-neutral-400 dark:hover:text-gray-200" aria-label="Email"><FaEnvelope size={20} /></a>
                </div>
                <a href="/changelog" rel="noopener noreferrer" className="hover:text-gray-400 italic text-gray-500 text-base" tabIndex={0}>Changelog</a>
            </div>
            <div className="flex items-center justify-center mt-4">
                <p className="text-gray-500 dark:text-gray-300 italic text-base">
                    © 2024 Aditya Raj (adistrim)
                </p>
            </div>
        </footer>
    )
}

export default Footer;
