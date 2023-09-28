"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{ theme: string; toggle: any }>({
  theme: "light",
  toggle: null,
});

const getFormLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};
type Props = {
  children: JSX.Element;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFormLocalStorage() as string;
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme as string);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
