import React, { useState, useEffect } from "react";

import saveModalIntroduce from "./showModalIntroduce";
import isBlackHeader from "./isBlackHeader";
import loadFeaturedData from "./loadFeaturedData";

export default function useItems() {
  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const [modalIntroduce, setModalIntroduce] = React.useState(false);
  const [modalPortfolio, setModalPortfolio] = React.useState(false);
  const [item, setItem] = React.useState([]);

  useEffect(() => {
    loadFeaturedData(setFeaturedData);
    isBlackHeader(setBlackHeader);
    saveModalIntroduce(setModalIntroduce);
  }, []);

  return {
    featuredData,
    blackHeader,
    modalIntroduce,
    setModalIntroduce,
    modalPortfolio,
    setModalPortfolio,
    item,
    setItem,
  };
}
