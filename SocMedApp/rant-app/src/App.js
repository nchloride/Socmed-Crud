import React, { useContext } from "react";
import LoginComponent from "./login-component/login-component";
import HomeComponent from "./home/home.component";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { IsAuthenticated } from "./AuthContext/UserAuthorization";

import PageNotFound from "./page-not-found/page-not-found";
function App(props) {
  const [loggedIn] = useContext(IsAuthenticated);
  return (
    <div>
        <Switch>
          <Route path="/" exact>
            {loggedIn ? <Redirect to="/home" /> : <LoginComponent />}
          </Route>
          <Route path="/home" component={HomeComponent}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
    </div>
  );
}

export default App;
