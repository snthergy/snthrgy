import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import Auth0ProviderWithHistory from "./auth/AuthProviderWithHistory";
import "./styles.css";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <StylesProvider injectFirst>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Auth0ProviderWithHistory>
          <Dashboard />
        </Auth0ProviderWithHistory>
      </Router>
    </QueryClientProvider>
  </StylesProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
