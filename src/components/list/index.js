import React from 'react'
import Data from '../data/index'
import './index.css'

export default function List() {
  return (
    <div>
      {Data.map((d, index)=>
      <div className='container--list' key={index} >
        <img className='list--img' src={`../../images/cover/${d.cover}`}></img>
      </div>)}
    </div>
  )
}
