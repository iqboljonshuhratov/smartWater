import React from "react";
import iconTell from "../imgCard/icon/tellIcon.png";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header-box">
      <div className="logo-box">
        {/* <img src={logo} alt="img" /> */}
        <h1 style={{ color: "rgb(71, 137, 173)" }}>Smart Water</h1>
      </div>
      <ul className="header-box-ul">
        <a className="header-box-ul-a" href="#SuvNazorat">
          <li className="ul-a-li">Suv Nazorat</li>
        </a>
        <a className="header-box-ul-a" href="#SmartNazorat">
          <li className="ul-a-li">Smart Nazorat</li>
        </a>
        <a className="header-box-ul-a" href="#Xususiyatlar">
          <li className="ul-a-li">Xususiyatlar</li>
        </a>
        <a className="header-box-ul-a" href="#Qollanma">
          <li className="ul-a-li">Qo‘llanma</li>
        </a>
      </ul>
      <div className="header-box-button-box">
        <a
          className="header-box-ul-a"
          href="https://sss.uz/products/6720aaa735d81d53754f8eca"
          target="_blank"
        >
          <button className="button-box-button1">Tizimga kirish</button>
        </a>
        <a className="header-box-ul-a" href="tel:+998999999999">
          <button className="button-box-button">
            <img src={iconTell} alt="img" />
            Bog'lanish
          </button>
        </a>
      </div>
    </header>
  );
};
