import React, {useContext} from "react";
import "./index.css";

import { MyContext } from "../context/contextAPI";

export default function Modal() {
  const {modal, setModal} = useContext(MyContext);

  return (
    <div className="modal" style={
      modal ? {display: "flex"} : {display: "none"}
    }>
      <div className="modal--close" onClick={()=>{setModal(false)}}>X</div>
      <iframe
        className="modal--video"
        width="728"
        height="409"
        src="https://www.youtube.com/embed/uk2hhEw59HA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="modal--goals">
        <div className="modal--container">
          <div className="modal--title">Missão</div>
          <div className="modal--desc">Crescer pessoal e profissionalmente. Nunca parar de aprender. Ser um solucionador de problemas e dar o meu melhor para a empresa em que eu for atuar. </div>
        </div>

        <div className="modal--container">
          <div className="modal--title">Por que ser um Dev?</div>
          <div className="modal--desc">Porque tecnologia é a área que eu amo. Amo solucionar problemas e me desafiar a cada dia.</div>
        </div>

        <div className="modal--container">
          <div className="modal--title">Objetivo</div>
          <div className="modal--desc">Trabalhar na área da programação. Buscar o crescimento profissional. Ajudar meu time. Dar estabilidade para minha família.</div>
        </div>
      </div>
    </div>
  );
}
