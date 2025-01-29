import "./imgCard.scss";
import React from "react";
import google from "./icon/googlePlay-removebg-preview.png";
import appStore from "./icon/appStore-removebg-preview.png";
import { imgCards } from "./imgCards";
import saveIcon from "./icon/save.png";

export const ImgCard = () => {
  return (
    <div className="imgCard-box">
      <div className="imgCard-box-text-box">
        <div className="text-box">
          <h1>Smart Water Ilovasini Yuklab Oling</h1>
          <p>
            Smart Water ilovasini yuklab olib, suv sathini aniq o'lchash va
            resurslarni samarali boshqarish imkoniyatiga ega bo'ling. Ilova
            yordamida siz suv manbalaridagi o'zgarishlarni real vaqtda
            kuzatishingiz mumkin. Ilovani hozir yuklab oling va suvni
            boshqarishda yangi yondashuvni sinab ko'ring!
          </p>
        </div>
        <div className="text-box-button-box">
          <a
            href="https://api.sss.uz/uploads/1730656477955-918173788.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="saveLink"
          >
            <button className="save-button">
              <svg
                className="saveImg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="rgb(47, 112, 148)"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"></path>
              </svg>
              Qurilma qo'llanmasi
            </button>
          </a>
          <a
            href="https://play.google.com/store/search?q=smart+water&c=apps&hl=ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="google-play-button">
              <img className="icon-google-svg" src={google} alt="img" />
            </button>
          </a>
          <a
            href="https://apps.apple.com/uz/app/smart-water/id6738855636"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="app-store-button">
              <img className="icon-google-svg" src={appStore} alt="img" />
            </button>
          </a>
        </div>
      </div>
      <div className="imgCard-box-card">
        {imgCards.map((img, index) => {
          return (
            <div className="imgCard-box-card-img-box" key={index}>
              <img src={img} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
