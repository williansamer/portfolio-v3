import React, { createContext } from "react";

import data from "../data/index";
import useItems from "./hooks/index";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const {
    featuredData,
    blackHeader,
    modalIntroduce,
    setModalIntroduce,
    modalPortfolio,
    setModalPortfolio,
    item,
    setItem,
  } = useItems();

  return (
    <MyContext.Provider
      value={{
        data,
        featuredData,
        blackHeader,
        modalIntroduce,
        setModalIntroduce,
        modalPortfolio,
        setModalPortfolio,
        item,
        setItem,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
