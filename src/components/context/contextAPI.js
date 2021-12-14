import React, {createContext} from 'react';

const MyContext = createContext();

export default function ContextProvider({children}){

  

  return(
    <MyContext.Provider>
      {children}
    </MyContext.Provider>
  )
}