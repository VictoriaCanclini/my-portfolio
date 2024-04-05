"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "../common/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      style={{
        cursor: "pointer",
        // backgroundColor: resolvedTheme === "dark" ? "#333" : "#f0f0f0",
      }}
    >
      {resolvedTheme === "dark" ? (
        <Sun color="#c9a4e8" />
      ) : (
        <Moon color="#c9a4e8" />
      )}
    </div>
  );
}
