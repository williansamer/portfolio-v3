import React, {useContext} from 'react'
import './index.css'

import { MyContext } from '../context/contextAPI';

export default function Featured() {

  const {featuredData} = useContext(MyContext);

  return (
    <div>
      <div className='container--featured' style={{
        backgroundImage: `url(../../images/featured/${featuredData.featuredCover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className='featured--vertical'>
        <div className='featured--horizontal'>
          <div className='featured--title'>{featuredData.title}</div>
          <div className="featured--ratings">
            <div className='featured--hardness' style={
              {marginRight: '20px',
                color: '#46d369',
              fontWeight: 'bold'}
            }>Dificuldade: {featuredData.hardness}</div>
            <div className='featured--createdAt' style={{color: '#ccc'}}>Criado em: {featuredData.createdAt}</div>
          </div>
          <div className='featured--description'>
            {featuredData.description}
          </div>
          <div className='featured--tech'>
            Tecnologias Utilizadas: {featuredData.tech}
          </div>
          <div className='featured--buttons'>
            <a className='linkedin' href='https://www.linkedin.com/in/willian-samer-oliveira-796ab3221/' target="_blank" rel="noreferrer">Linkedin</a>
            <a className='repo' href={featuredData.gitRepo} target="_blank" rel="noreferrer">Repositório</a>
            {featuredData.gitPage !== "" && 
            <a className='page' href={featuredData.gitPage} target="_blank" rel="noreferrer">GitHub Page</a>}
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}
