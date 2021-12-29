import "./App.css";
import React from "react";

import Header from "./components/header";
import Featured from "./components/featured";
import List from "./components/list";
import ModalInt from "./components/modalInt";
import ModalPort from "./components/modalPort";

function App() {
  return (
    <div className="App">
      <ModalInt />
      <ModalPort />
      <Header />
      <main>
        <Featured />
        <List />
      </main>
      <footer>
        <div className="footer--title" id="contatos">
          Contatos
        </div>
        <div className="footer--links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/williansamerdeoliveira/"
          >
            <img src="/portfolio-v3/images/icons/linkedin.png" alt="linkedin" />
            Linkedin
          </a>
          <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/">
            <img src="/portfolio-v3/images/icons/whatsapp.png" alt="whatsapp" />
            17 981622464
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/williansamer"
          >
            <img src="/portfolio-v3/images/icons/github.png" alt="github" />
            GitHub
          </a>
          <a
            rel="noreferrer"
            href="mailto:willian.samer@gmail.com"
          >
            <img src="/portfolio-v3/images/icons/email.png" alt="email" />
            willian.samer@gmail.com
          </a>
        </div>
        <div className="footer--direitos">
          © Todos os direitos reservados - 2021
        </div>
      </footer>
    </div>
  );
}

export default App;
