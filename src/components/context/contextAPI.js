import React, {createContext, useState, useEffect} from 'react';

import Data from '../data/index'

export const MyContext = createContext();

export default function ContextProvider({children}){
  
  const data = Data;
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(()=>{

    const loadFeaturedData = async () => {
      
      const randomNumber = await Math.floor(Math.random() * data.length);
      const sortedFeatured = data[randomNumber];

      setFeaturedData(sortedFeatured);
    }

    loadFeaturedData();

  }, []);

  return(
    <MyContext.Provider value={{data, featuredData}}>
      {children}
    </MyContext.Provider>
  )
}