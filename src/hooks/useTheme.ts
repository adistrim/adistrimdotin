"use client";
import { useState, useEffect } from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

const useTheme = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as Theme;
            if (storedTheme) return storedTheme;
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? Theme.Dark : Theme.Light;
        }
        return Theme.Light;
    });

    const toggleTheme = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.className = theme === Theme.Dark ? 'dark' : '';
    }, [theme]);

    return { theme, toggleTheme };
};

export default useTheme;
