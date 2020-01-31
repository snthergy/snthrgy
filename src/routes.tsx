import React from "react";
import { Route, Router } from "react-router-dom";

import Main from "./pages/Main";
import history from "./utils/history";
import { useAuth0, Auth0Provider } from "./client/spaAuth";

import { ApolloProvider } from "react-apollo";
import makeApolloClient from "./apollo";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

let client: ApolloClient<NormalizedCacheObject>;

const AuthProvider = (props: any): JSX.Element => {
  const auth = useAuth0();
  if (localStorage.getItem("isLoggedIn") === "true" || auth.isAuthenticated) {
    // check if client exists
    if (!client) {
      client = makeApolloClient();
    }
    return (
      <ApolloProvider client={client}>
        <Auth0Provider>
          <Main {...props} client={client} auth={auth} />
        </Auth0Provider>
      </ApolloProvider>
    );
  }

  return <Main {...props} />;
};

export const makeMainRoutes = (): JSX.Element => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/">
          <AuthProvider />
        </Route>
      </div>
    </Router>
  );
};
