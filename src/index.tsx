import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {StylesProvider} from "@material-ui/styles";

import Main from "./pages/Main";
import Auth0ProviderWithHistory from "./auth/AuthProviderWithHistory";
import "./styles.css";

const App = () => (
  <StylesProvider injectFirst>
    <Router>
      <Auth0ProviderWithHistory>
        <Main />
      </Auth0ProviderWithHistory>
    </Router>
  </StylesProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
