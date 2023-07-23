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

export default function ToggleTheme() {
  const { resolvedTheme, setTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleToggleChange = (value: number): void => {
    switch (value) {
      case 1:
        document.documentElement.classList.remove("purple");
        setTheme("dark");
        break;
      case 2:
        document.documentElement.classList.remove("purple");
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
    <div className="flex h-5 w-12 items-center justify-evenly rounded-2xl bg-lightKeyPadBG text-darkYellow purple:bg-purpleDarkViolet purple:text-lightYellow dark:bg-desterBlue dark:text-prjWhite">
      <div
        onClick={() => handleToggleChange(1)}
        className="h-3 w-3 cursor-pointer rounded-full text-center dark:bg-hoverRed"
      >
        <p className="relative bottom-5 text-[10px]">1</p>
      </div>
      <div
        onClick={() => handleToggleChange(2)}
        className="h-3 w-3 cursor-pointer rounded-full bg-lightOrangeHover purple:bg-purpleDarkViolet dark:bg-desterBlue"
      >
        <p className="relative bottom-5 text-center text-[10px]">2</p>
      </div>
      <div
        onClick={() => handleToggleChange(3)}
        className="h-3 w-3 cursor-pointer rounded-full purple:bg-pureCyan"
      >
        <p className="relative bottom-5 text-center text-[10px]">3</p>
      </div>
    </div>
  );
}
