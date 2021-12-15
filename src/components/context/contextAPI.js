import React, {createContext, useState, useEffect} from 'react';

import Data from '../data/index'

export const MyContext = createContext();

export default function ContextProvider({children}){
  
  const data = Data;
  const [featuredData, setFeaturedData] = useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadFeaturedData = async () => {
      const randomNumber = await Math.floor(Math.random() * data.length);
      const sortedFeatured = data[randomNumber];
      setFeaturedData(sortedFeatured);
    }
    loadFeaturedData();
  }, []);

  useEffect(()=>{
    const isBlackHeader = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      } else{
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', isBlackHeader);
  }, []);

  return(
    <MyContext.Provider value={{data, featuredData, blackHeader}}>
      {children}
    </MyContext.Provider>
  )
}