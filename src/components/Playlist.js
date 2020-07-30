import React from "react";
import piano from "../images/piano.jpg";

import { ReactComponent as PlayIcon } from "../svg/play.svg";
import { Link } from "react-router-dom";
export const Playlist = (props) => {
  const dataPlaylist = [
    {
      id: 101,
      category_id: 3,
      name: "Mood Booster",
      img:
        "https://images.unsplash.com/photo-1536420113339-670e1666cbdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      subText: "get happy with this pick-me-up playlist",
      color: "rgb(236, 130, 58)",
    },
    {
      id: 102,
      category_id: 3,
      name: "Feeling Good",
      img:
        "https://images.unsplash.com/photo-1516827096346-bfb65d850f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80",
      subText: "feel good with this positively timeless playlist",
      color: "yellow",
    },
    {
      id: 103,
      category_id: 3,
      name: "Dark and Stormy",
      img:
        "https://images.unsplash.com/photo-1565193298442-a26d2ea42b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      subText: "Beautifully dark ,dramatic tracks",
      color: "rgb(124, 60, 33)",
    },
    {
      id: 104,
      category_id: 2,
      name: "Peaceful Piano",
      img:
        "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      subText: "Relax and indulge with beautiful piano pieces",
      color: "rgb(89, 110, 121)",
    },
    {
      id: 105,
      category_id: 2,
      name: "Deep focus",
      img:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
      subText: "For focus and efficiency",
      color: "rgb(250, 125, 9)",
    },
    {
      id: 106,
      category_id: 4,
      name: "Top Rock Music",
      img:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      color: "rgb(255, 87, 34)",
    },
    {
      id: 107,
      category_id: 4,
      name: "Hits of billiboard",
      subText: "top 50 hits ",
      img:
        "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80",
      color: "pink",
    },
    {
      id: 108,
      category_id: 1,
      name: "Top music Charts",
      subText: "music world loves",
      img:
        "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      color: "red",
    },
    {
      id: 109,
      category_id: 1,
      name: "Listen to great music",
      subText: "best music from the world",
      img:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      color: "rgb(199, 0, 57)",
    },
    {
      id: 110,
      category_id: 1,
      name: "Top music Charts",
      subText: props.subText,
      img:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      color: "purple",
    },
  ];

  const matchedPlaylist = dataPlaylist.filter(
    (playlist) => playlist.category_id === props.categoryId
  );

  return (
    <div className="cardWrapInner">
      {matchedPlaylist.map((playlist, id) => (
        <Link
          to={`/playlist/${playlist.name}/${playlist.subText}/${playlist.id}/${playlist.color}`}
        >
          <div key={id}>
            <div className="card">
              <div className="cardImage">
                <img src={playlist.img} alt="albumArt" />
              </div>
              <div className="cardContent capitalize">
                {playlist.name}
                <span className="capitalize">{playlist.subText}</span>
              </div>

              <span className="playIcon">
                <PlayIcon />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
