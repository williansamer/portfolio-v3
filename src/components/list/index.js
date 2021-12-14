import React, {useContext} from 'react'
import './index.css'

import {MyContext} from '../context/contextAPI'

export default function List() {

  const {data} = useContext(MyContext);

  return (
    <div className='container--list'>
      {data.map((d, index)=>
      <div className='container--list--item' key={index} >
        <img className='list--item--img' src={`../../images/cover/${d.cover}`} alt="projetos"></img>
      </div>)}
    </div>
  )
}
