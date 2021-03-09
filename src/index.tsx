import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";

import Main from "./pages/Main";
import Auth0ProviderWithHistory from "./auth/AuthProviderWithHistory";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => (
  <StylesProvider injectFirst>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Auth0ProviderWithHistory>
          <Main />
        </Auth0ProviderWithHistory>
      </Router>
    </QueryClientProvider>
  </StylesProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
