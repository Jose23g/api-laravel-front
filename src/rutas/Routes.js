import React from "react";
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Login from "../paginas/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;