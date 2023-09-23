"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFormLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};
type Props = {
  children: JSX.Element;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(() => {
    return getFormLocalStorage();
  });
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
