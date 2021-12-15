import React, { useContext } from "react";
import "./index.css";

import { MyContext } from "../context/contextAPI";

export default function ModalPort() {
  const { item, modalPortfolio, setModalPortfolio } = useContext(MyContext);

  return (
    <div
      className="modal--port"
      style={modalPortfolio ? { display: "flex" } : { display: "none" }}
    >
      <div
        className="modal--port--close"
        onClick={() => modalPortfolio && setModalPortfolio(false)}
      >
        X
      </div>
      <div>
        <div
          className="container--port--modal"
          style={{
            backgroundImage: `url(../../images/featured/${item.featuredCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="modal--port--vertical">
            <div className="modal--port--horizontal">
              <div className="modal--port--title">{item.title}</div>
              <div className="modal--port--ratings">
                <div
                  className="modal--port--hardness"
                  style={{
                    marginRight: "20px",
                    color: "#46d369",
                    fontWeight: "bold",
                  }}
                >
                  Dificuldade: {item.hardness}
                </div>
                <div
                  className="modal--port--createdAt"
                  style={{ color: "#ccc" }}
                >
                  Criado em: {item.createdAt}
                </div>
              </div>
              <div className="modal--port--description">{item.description}</div>
              <div className="modal--port--tech">
                Tecnologias Utilizadas: {item.tech}
              </div>
              <div className="modal--port--buttons">
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/willian-samer-oliveira-796ab3221/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
                <a
                  className="repo"
                  href={item.gitRepo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositório
                </a>
                {item.gitPage !== "" && (
                  <a
                    className="page"
                    href={item.gitPage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Page
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
