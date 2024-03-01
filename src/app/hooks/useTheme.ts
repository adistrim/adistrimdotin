"use client";
import { useState, useEffect } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

const useTheme = () => {
    const [theme, setTheme] = useState(Theme.Light);

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme as Theme);
        } else {
            const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDarkMode ? Theme.Dark : Theme.Light);
        }
    }, []);

    useEffect(() => {
        document.documentElement.className = theme === Theme.Dark ? 'dark' : '';
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;
