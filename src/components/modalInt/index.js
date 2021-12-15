import React, { useContext } from "react";
import "./index.css";

import { MyContext } from "../context/contextAPI";

export default function ModalInt() {
  const { modalIntroduce, setModalIntroduce } = useContext(MyContext);

  return (
    <div
      className="modal--int"
      style={modalIntroduce ? { display: "flex" } : { display: "none" }}
    >
      <div
        className="modal--int--close"
        onClick={() => {
          setModalIntroduce(false);
        }}
      >
        X
      </div>
      <iframe
        className="modal--int--video"
        width="728"
        height="409"
        src="https://www.youtube.com/embed/uk2hhEw59HA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="modal--int--goals">
        <div className="modal--int--container">
          <div className="modal--int--title">Missão</div>
          <div className="modal--int--desc">
            Crescer pessoal e profissionalmente. Nunca parar de aprender. Ser um
            solucionador de problemas e dar o meu melhor para a empresa em que
            eu for atuar.{" "}
          </div>
        </div>

        <div className="modal--int--container">
          <div className="modal--int--title">Por que ser um Dev?</div>
          <div className="modal--int--desc">
            Porque tecnologia é a área que eu amo. Amo solucionar problemas e me
            desafiar a cada dia.
          </div>
        </div>

        <div className="modal--int--container">
          <div className="modal--int--title">Objetivo</div>
          <div className="modal--int--desc">
            Trabalhar na área da programação. Buscar o crescimento profissional.
            Ajudar meu time. Dar estabilidade para minha família.
          </div>
        </div>
      </div>
    </div>
  );
}
