import React, { useContext } from "react";
import "./index.css";

import { MyContext } from "../context/contextAPI";

export default function List() {
  const { data, setModalPortfolio, setItem } = useContext(MyContext);

  function handlePortModal(item) {
    setModalPortfolio(true);
    setItem(item);
  }

  return (
    <div className="container--list">
      {data.map((item, index) => (
        <div
          onClick={() => handlePortModal(item)}
          className="container--list--item"
          key={index}
        >
          <img
            className="list--item--img"
            src={`/portfolio-v3/images/cover/${item.cover}`}
            alt={`${item.cover}`}
          ></img>
        </div>
      ))}
    </div>
  );
}
