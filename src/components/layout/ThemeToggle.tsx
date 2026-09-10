"use client";
import { Switch } from "@/components/ui/switch";
import { MoonIcon } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = (checked: boolean) => {
    setIsDark(checked);

    const root = window.document.documentElement;
    if (checked) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center justify-self-end gap-2 ml-8 md:ml-12 cursor-pointer">
      <Switch
        aria-label="Toggle dark mode"
        id="dark-mode"
        checked={isDark}
        onCheckedChange={handleThemeChange}
      />
    </div>
  );
}
