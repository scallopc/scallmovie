import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages";

export function Routes() {
  return (
    <div>
      {" "}
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={Favorite} /> */}
      </Switch>
    </div>
  );
}
