import React, { useEffect, useState } from 'react';

const DarkLiteMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <button 
            className="bg-black dark:bg-white dark:text-black text-white cursor-pointer py-1 px-3 rounded-2xl"
            onClick={toggleTheme}
        >
            {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
    );
};

export default DarkLiteMode;