import './App.css';
import React from 'react';
import Header from './components/header'
import Featured from './components/featured';
import List from './components/list';
import Modal from './components/modal';

function App() {

  return (
    <div className="App">
      <Modal />
      <Header />
      <main>
        <Featured />
        <List />
      </main>
      <footer>
        <div className='footer--title' id='contatos'>Contatos</div>
        <div className='footer--links'>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/willian-samer-oliveira-796ab3221/'><img src='./images/icons/linkedin.png' alt='linkedin'/>Linkedin</a>
          <a target="_blank" rel="noreferrer" href='https://web.whatsapp.com/'><img src='./images/icons/whatsapp.png' alt='whatsapp'/>17 981622464</a>
          <a target="_blank" rel="noreferrer" href='https://github.com/williansamer'><img src='./images/icons/github.png' alt='linkedin'/>GitHub</a>
        </div>
        <div className='footer--direitos'>© Todos os direitos reservados - 2021</div>
      </footer>
    </div>
  );
}

export default App;
