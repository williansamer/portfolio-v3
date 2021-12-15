import React, {useContext} from 'react'
import './index.css'

import { MyContext } from '../context/contextAPI';

export default function Header() {
  const {blackHeader, modal, setModal} = useContext(MyContext);

  return (
    <header className={!blackHeader ? "header" : "header header--black"}>
      <div className='header--logo'>Willian Samer</div>
      <div className='header--menu'>
        <div onClick={()=>modal ?  setModal(false) : setModal(true)} style={{fontSize: '1.4em'}}>Apresentação</div>
        <a href='#contatos'>Contato</a>
      </div>
    </header>
  )
}
