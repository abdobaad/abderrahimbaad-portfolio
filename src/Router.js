import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

const Router= ()=> {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Router;
