import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "../paginas/Login";
import menu from "../paginas/menu";
import PrivateRoute from "./PrivateRoute";

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/menu" component={menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;