import React from "react";
import "./cards.scss";

export const Cards = ({ img, title, text, index, idName, stil }) => {
  {
    if (index % 2 === 0) {
      return (
        <div className={`cards-box ${stil}`} id={idName}>
          <div className="cards-box-card">
            <div className="cards-box-card-img-box">
              <img src={img} />
            </div>
            <div className="cards-box-card-text-box">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div>
        </div>
      );
    } else if (index % 2 !== 0) {
      return (
        <div className={`cards-box-card2 ${stil}`} id={idName}>
          <div className="cards-box-card-text-box2">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <div className="cards-box-card-img-box2">
            <img src={img} />
          </div>
        </div>
      );
    }
  }
};
