import React, { createContext, useState } from "react";

export const DropContext = createContext();

export const DropProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState("cssLabel");

  return (
    <DropContext.Provider value={[activeMenu, setActiveMenu]}>
      {props.children}
    </DropContext.Provider>
  );
};
