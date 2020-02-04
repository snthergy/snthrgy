import React from "react";
import {Route, Router} from "react-router-dom";

import Main from "./pages/Main";
import history from "./utils/history";

export const makeMainRoutes = (): JSX.Element => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" componentt={Main} />
      </div>
    </Router>
  );
};
