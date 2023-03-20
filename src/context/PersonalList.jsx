import React, { createContext, useContext, useEffect, useState } from "react";
const PersonalContext = createContext();
export const usePersonalContext = () => useContext(PersonalContext);
const PersonalList = ({ children }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = "http://universities.hipolabs.com/search?country=United+States";

    fetch(url)
      .then((r) => r.json())
      .then((a) => setList(a.slice(0, 50)));
  }, []);

  const contextValue = {
    list,
  };

  return (
    <PersonalContext.Provider value={contextValue}>
      {children}
    </PersonalContext.Provider>
  );
};
export default PersonalList;
