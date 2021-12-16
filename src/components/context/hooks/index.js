import React, {useState, useEffect} from 'react'

import loadFeaturedData from './loadFeaturedData';

export default function useItems() {

  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const [modalIntroduce, setModalIntroduce] = React.useState(false);
  const [modalPortfolio, setModalPortfolio] = React.useState(false);
  const [item, setItem] = React.useState([]);

  useEffect(()=>{

    loadFeaturedData(setFeaturedData);

    const isBlackHeader = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", isBlackHeader);

    const showModalIntroduce = () => {
      if (!localStorage.getItem("modalIntroduce")) {
        setModalIntroduce(true);
        localStorage.setItem("modalIntroduce", true);
      }
    };
    window.addEventListener("DOMContentLoaded", showModalIntroduce);

  }, []);

  return {featuredData, blackHeader, modalIntroduce, setModalIntroduce, modalPortfolio, setModalPortfolio, item, setItem};
}
