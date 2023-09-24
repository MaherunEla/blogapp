"use client";
import { createContext, useEffect, useState } from "react";

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
  
  const toggle =()=> {
    setTheme(theme === "light" ? "dark" : "light");
  }
  useEffect(()=>{
    localStorage.setItem("theme",theme);
  },[theme]);
  
  return (
    <ThemeContext.Provider value={{ theme ,toggle}}>{children}</ThemeContext.Provider>
  );

};


