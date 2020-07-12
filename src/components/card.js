import React from "react";
import image1 from "../images/pic1.jpg";

export const Card = () => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={image1} alt="albumArt" />
      </div>
      <div className="cardContent">Liked Songs</div>
    </div>
  );
};
