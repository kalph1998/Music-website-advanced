import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginNav } from "./loginNav";
import { PlaylistPage } from "../components/pages/PlaylistPage";
import { Categories } from "./Categories";

export const Main = () => {
  return (
    <Switch>
      <div className="homeOverview">
        <LoginNav />
        <div>
          <Route path="/" exact component={Categories} />
          <Route path="/search">search</Route>
          <Route path="/yourLibrary">Librery</Route>
          <Route
            path="/playlist/:name/:subtext/:id/:color"
            component={PlaylistPage}
          ></Route>
        </div>
      </div>
    </Switch>
  );
};
