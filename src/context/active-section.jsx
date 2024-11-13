"use client";

import React, { useState, createContext, useContext } from "react";

export const ActiveSectionContext = createContext(null);

export default function ActiveSectionProvider({ children }) {
  const [activeTab, setActiveTab] = useState("#home");
  const [lastClickedTime, setLastClickedTime] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeTab,
        setActiveTab,
        lastClickedTime,
        setLastClickedTime
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
