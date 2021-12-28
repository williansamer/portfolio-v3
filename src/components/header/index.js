import React, { useContext } from "react";
import "./index.css";

import { MyContext } from "../context/contextAPI";

export default function Header() {
  const { blackHeader, modalIntroduce, setModalIntroduce } =
    useContext(MyContext);

  return (
    <header className={!blackHeader ? "header" : "header header--black"}>
      <div className="header--logo">Willian Samer</div>
      <div className="header--menu">
        <div
          onClick={() =>
            modalIntroduce ? setModalIntroduce(false) : setModalIntroduce(true)
          }
        >
          Apresentação
        </div>
        <a href="#contatos">Contato</a>
      </div>
    </header>
  );
}
