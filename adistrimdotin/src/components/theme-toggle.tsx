import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <FiSun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaRegMoon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
