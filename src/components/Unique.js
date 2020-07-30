import React from "react";
import image1 from "../images/pic1.jpg";

import { ReactComponent as PlayIcon } from "../svg/play.svg";

export const Unique = () => {
  return (
    <div>
      <div className="cardWrap">
        <h1 className="unique pb">Uniquely yours</h1>
        <div className="card">
          <div className="cardImage">
            <img src={image1} alt="albumArt" />
          </div>
          <div className="cardContent">Liked Songs</div>
          <span className="playIcon">
            <PlayIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
