import React, { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    Overview: useRef(null),
    Fundamentals: useRef(null),
    "News Insights": useRef(null),
    Sentiments: useRef(null),
    Team: useRef(null),
    "Technicals": useRef(null),
    Tokenomics: useRef(null),
  };

  const scrollToSection = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);