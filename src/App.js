import React from "react";
import "./scss/main.scss";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
function App() {
  return (
    <div className="outerWrap ">
      <div className="App">
        <Navbar />
        <Main />
      </div>
      <div className="musicControls">music control</div>
    </div>
  );
}

export default App;
