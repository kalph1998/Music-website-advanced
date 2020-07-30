import React from "react";
import { Playlist } from "../components/Playlist";
import { Unique } from "./Unique";

export const Categories = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Charts",
      subText: "Your daily update of the most played tracks right now",
    },
    {
      id: 2,
      name: "Focus",
      subText: "Music to help you concentrate",
    },
    {
      id: 3,
      name: "Mood",
      subText: "Playlists to match your mood ",
    },
    {
      id: 4,
      name: "Popular new releases",
    },
  ];

  return (
    <div className="mainContent">
      <Unique />
      {dataCategories.map((cat, id) => (
        <div className="cardWrap" key={id}>
          <div className="charts flex justify-between items-center">
            <div>
              <h1 className=" hover:underline unique focus inline-block cursor-pointer">
                {cat.name}
              </h1>
            </div>
            <h1 className=" hover:underline inline-block cursor-pointer">
              see all
            </h1>
          </div>
          <p className="subText mb-4">{cat.subText}</p>
          <Playlist categoryId={cat.id} />
        </div>
      ))}
    </div>
  );
};
