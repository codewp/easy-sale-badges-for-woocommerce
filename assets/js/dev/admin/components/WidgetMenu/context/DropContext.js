import React, { createContext, useState } from "react";

export const DropContext = createContext();

export const DropProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState("cssBadges");

  return (
    <DropContext.Provider value={[activeMenu, setActiveMenu]}>
      {props.children}
    </DropContext.Provider>
  );
};
