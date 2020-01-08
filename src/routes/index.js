import React from "react";
//import external libraries
import { Router, Switch, Route } from "react-router-dom";
import { history } from "../utils/history";
//import containers
import UserList from "../containers/UserList";
//import constants
import { configuration, Path } from "../constants";

function Routes() {
  const { APP_URL } = configuration;
  return (
    <Router basename={APP_URL} history={history}>
      <div>
        <Switch>
          <Route exact path={Path.ROOT} component={UserList} />
          <Route path={Path.USERS} component={UserList} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
