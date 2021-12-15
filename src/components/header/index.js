import React, {useContext} from 'react'
import './index.css'

import { MyContext } from '../context/contextAPI';

export default function Header() {
  const {blackHeader} = useContext(MyContext);

  return (
    <header className={!blackHeader ? "header" : "header header--black"}>
      <div className='header--logo'>Willian Samer</div>
      <div className='header--menu'>
        <a href='apresentacao' style={{fontSize: '1.4em'}}>Apresentação</a>
        <a href='#contatos'>Contato</a>
      </div>
    </header>
  )
}
