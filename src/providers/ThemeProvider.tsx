"use client";
import { ThemeContext } from "@/components/context/ThemeContext";
import React, { useContext } from "react";
type Props = {
  children: JSX.Element;
};
const ThemeProvider = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
