"use client";
import { ThemeContext } from "@/components/context/ThemeContext";
import React, { useContext ,useEffect,useState} from "react";
type Props = {
  children: JSX.Element;
};

const ThemeProvider = ({ children }:Props) => {
  const { theme } = useContext(ThemeContext);
  const [mounted,setMounted] = useState(false);

  useEffect(()=> {
    setMounted(true);
  },[]);
  if(mounted){
    return <div className={theme}>{children}</div>;

  }
 
};

export default ThemeProvider;
