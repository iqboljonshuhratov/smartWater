import React from "react";
import "./info.scss";

export const Info = () => {
  return (
    <div className="info-box" id="Qollanma">
      <div className="info-box-card">
        <div className="info-box-card-text-box">
          <h1>
            Smart Water SW20 Ilovasidan Foydalanish: Qadam-baqadam Qo'llanma
          </h1>
          <p>
            Ushbu video orqali Smart Water SW20 ilovasidan qanday foydalanishni,
            suv sathini kuzatishni va onlayn ma'lumotlarni boshqarishni
            o'rganing. Qulay interfeys va oddiy sozlamalar bilan maksimal
            samaradorlikka erishing!
          </p>
        </div>
        <div className="info-box-card-img-box">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/Uc5T4tOPCGg"
            title="Smart Water dasturdan foydalanish"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
