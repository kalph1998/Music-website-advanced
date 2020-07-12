import React from "react";
import "./scss/main.scss";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/card";
function App() {
  return (
    <div className="outerWrap ">
      <div className="App">
        <Navbar />
        <div className="homeOverview">
          <nav className="login">
            <button className="btn sign_up ">sign up</button>
            <button className="btn log_in">log in</button>
          </nav>
          <div className="mainContent ">
            <h1 className="unique">Uniquely yours</h1>
            <div className="cardWrap">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="musicControls">music control</div>
    </div>
  );
}

export default App;
