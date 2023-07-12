"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function parseTheme(theme: string | undefined): number {
  switch (theme) {
    case "dark":
      return 1;
    case "light":
      return 2;
    case "purple":
      return 3;
    default:
      return 1;
  }
}

export default function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggleValue, setToggleValue] = useState(parseTheme(resolvedTheme));
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value = parseInt(event.target.value);
    setToggleValue(parseInt(event.target.value));
    switch (value) {
      case 1:
        setTheme("dark");
        break;
      case 2:
        setTheme("light");
        break;
      case 3:
        setTheme("purple");
        break;
      default:
        setTheme("system");
        break;
    }
  };

  return (
    <div className="relative mr-2 inline-block w-10 select-none align-middle">
      <input
        type="range"
        name="toggle"
        id="toggle"
        min="1"
        max="3"
        value={toggleValue}
        onChange={handleToggleChange}
      />
    </div>
  );
}
