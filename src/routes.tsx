import React from "react";
import { Route, Router } from "react-router-dom";

import Main from "./pages/Main";
import Callback from "./components/Callback";
import auth from "./client/Auth";
import history from "./utils/history";

import { ApolloProvider } from "react-apollo";
import makeApolloClient from "./apollo";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

let client: ApolloClient<NormalizedCacheObject>;

const provideClient = (
  Component: () => JSX.Element,
  renderProps: any
): JSX.Element | undefined => {
  // check if logged in
  if (localStorage.getItem("isLoggedIn") === "true") {
    // check if client exists
    if (!client) {
      client = makeApolloClient();
    }
    return (
      <ApolloProvider client={client}>
        <Component {...renderProps} auth={auth} client={client} />
      </ApolloProvider>
    );
  } else {
    // not logged in already, hence redirect to login page
    if (renderProps.match.path !== "/") {
      window.location.href = "/";
    } else {
      return <Component auth={auth} {...renderProps} />;
    }
  }
};

const handleAuthentication = ({
  location
}: {
  location: { hash: string };
}): void => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = (): JSX.Element => {
  return (
    <Router history={history}>
      <div>
        <Route
          exact
          path="/"
          render={(props): JSX.Element | undefined =>
            provideClient(Main, props)
          }
        />
        <Route
          path="/callback"
          render={(props): JSX.Element => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
