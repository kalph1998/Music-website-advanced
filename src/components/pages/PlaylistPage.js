import React from "react";
import { useParams } from "react-router-dom";
import "../../scss/PlayListPage.scss";

import { ReactComponent as PlayIcon } from "../../svg/play.svg";
import { ReactComponent as Heart } from "../../svg/heart.svg";
import { ReactComponent as More } from "../../svg/more.svg";
import { ReactComponent as Music } from "../../svg/music.svg";

export const PlaylistPage = ({ match }) => {
  let { name } = useParams();
  let { subtext } = useParams();
  let { color } = useParams();
  let { id } = useParams();
  const Subtext = () => {
    if (subtext === "undefined") return null;

    return subtext;
  };
  const Image = () => {
    if (id == 102)
      return "https://images.unsplash.com/photo-1516827096346-bfb65d850f70?ixlib=rb-1.2.1&auto=format&fit=crop&w=348&q=80";
    if (id == 101)
      return "https://images.unsplash.com/photo-1536420113339-670e1666cbdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
    if (id == 103)
      return "https://images.unsplash.com/photo-1565193298442-a26d2ea42b1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80";
    if (id == 104)
      return "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    if (id == 105)
      return "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80";
    if (id == 106)
      return "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    if (id == 107)
      return "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80";
    if (id == 108)
      return "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
    if (id == 109)
      return "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    if (id == 110)
      return "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
  };

  return (
    <div className="playlistPage">
      <div className="playlistPageInfo">
        <div className="background" style={{ backgroundColor: color }}></div>
        <div className="overlay"></div>
        <div className="playlistPageImage">
          <img src={Image()} alt="pic" />
        </div>
        <div className="playlistPageTitle">
          <p
            className="text-xs uppercase"
            style={{ marginBottom: 4, fontWeight: 700 }}
          >
            playlist
          </p>
          <h1 className="title">{name}</h1>
          <p className="titleSubtext">{Subtext()}</p>
          <div className="Info">
            <a href="#">SoundWave</a>
            <span>40000 likes</span>
            <span>3 hr 35 min </span>
          </div>
        </div>
      </div>
      <div
        className="background-playlist"
        style={{ backgroundColor: color }}
      ></div>
      <div className="playlistpageButtonContainer">
        <div className="playListPageButtons">
          <span className="playIcon-Playlist">
            <PlayIcon />
          </span>
          <span className="spoticon-heart">
            <Heart />
          </span>
          <span className="spoticon-more">
            <More />
          </span>
        </div>
      </div>
      <div className="playlistPageSongs">
        <ul className="songList">
          <li>
            <div className="music-Icon">
              <Music />
            </div>
            <div className="Tracklist-details">
              <h3>Dil bechara</h3>
              <div className="Song-details">
                <a href="#">A.R. Rahman</a>
                <a href="#">Dil Bechara</a>
              </div>
            </div>
            <div className="song-time">
              <span>2:43</span>
            </div>
          </li>
          <li>
            <div className="music-Icon">
              <Music />
            </div>
            <div className="Tracklist-details">
              <h3>Dil bechara</h3>
              <div className="Song-details">
                <a href="#">A.R. Rahman</a>
                <div className="dot"></div>
                <a href="#">Dil Bechara</a>
              </div>
            </div>
            <div className="song-time">
              <span>2:43</span>
            </div>
          </li>
          <li>
            <div className="music-Icon">
              <Music />
            </div>
            <div className="Tracklist-details">
              <h3>Dil bechara</h3>
              <div className="Song-details">
                <a href="#">A.R. Rahman</a>
                <a href="#">Dil Bechara</a>
              </div>
            </div>
            <div className="song-time">
              <span>2:43</span>
            </div>
          </li>
          <li>
            <div className="music-Icon">
              <Music />
            </div>
            <div className="Tracklist-details">
              <h3>Dil bechara</h3>
              <div className="Song-details">
                <a href="#">A.R. Rahman</a>
                <a href="#">Dil Bechara</a>
              </div>
            </div>
            <div className="song-time">
              <span>2:43</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
