import React, {createContext, useState, useEffect} from 'react';

import data from '../data/index'

export const MyContext = createContext();

export default function ContextProvider({children}){
  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);
  const [modalIntroduce, setModalIntroduce] = React.useState(false);
  const [modalPortfolio, setModalPortfolio] = React.useState(false);
  const [item, setItem] = React.useState([]);

  useEffect(()=>{
    const loadFeaturedData = async () => {
      const randomNumber = await Math.floor(Math.random() * data.length);
      const sortedFeatured = data[randomNumber];
      setFeaturedData(sortedFeatured);
    }
    loadFeaturedData();

    const isBlackHeader = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', isBlackHeader);

    const showModalIntroduce = ()=>{
      if(!localStorage.getItem('modalIntroduce')){
        setModalIntroduce(true);
        localStorage.setItem('modalIntroduce', true);
      }
    }

    window.addEventListener('DOMContentLoaded', showModalIntroduce);
  }, []);

  return(
    <MyContext.Provider value={{data, featuredData, blackHeader, modalIntroduce, setModalIntroduce, modalPortfolio, setModalPortfolio, item, setItem}}>
      {children}
    </MyContext.Provider>
  )
}