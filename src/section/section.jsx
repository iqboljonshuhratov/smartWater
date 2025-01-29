import React from "react";
import video01 from "../imgCard/img/login-video.mp4";
import { Header } from "../header/header";
import "./section.scss";

const Section = () => {
  return (
    <div className="section-box">
      <Header />
      <video
        className="section-box-video"
        src={video01}
        width={"100%"}
        autoPlay
        muted
        loop
      >
        {/* <source src={video01} type="video/mp4" />
        Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi. */}
      </video>
      <h1 className="section-box-h1">Smart water</h1>
    </div>
  );
};

export default Section;
