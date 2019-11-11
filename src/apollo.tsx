import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";

import { GRAPHQL_URL, REALTIME_GRAPHQL_URL } from "./utils/constants";
import auth from "./client/Auth";
import { OperationTypeNode } from "graphql";

interface Headers {
  authorization?: string;
}

const getHeaders = (): Headers => {
  const headers: Headers = {};
  const token = auth.getIdToken();
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

const makeApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  // Create an http link:
  // const httpLink = new HttpLink({
  //   uri: GRAPHQL_URL,
  //   fetch,
  //   headers: getHeaders()
  // });

  // Create a WebSocket link:
  // const wsLink = new WebSocketLink(
  //   new SubscriptionClient(REALTIME_GRAPHQL_URL, {
  //     reconnect: true,
  //     timeout: 30000,
  //     connectionParams: (): { headers: Headers } => {
  //       return { headers: getHeaders() };
  //     },
  //     connectionCallback: (err): void => {
  //       if (err) {
  //         // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //         // @ts-ignore
  //         wsLink.subscriptionClient.close(false, false);
  //       }
  //     }
  //   })
  // );

  // chose the link to use based on operation
  // const link = split(
  //   // split based on operation type
  //   ({ query }) => {
  //     const {
  //       kind,
  //       operation
  //     }: { kind: string; operation?: OperationTypeNode } = getMainDefinition(
  //       query
  //     );
  //     return kind === "OperationDefinition" && operation === "subscription";
  //   },
  //   httpLink
  // );

  const client = new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_URL,
      fetch,
      headers: getHeaders()
    }),
    cache: new InMemoryCache({
      addTypename: true
    })
  });

  return client;
};

export default makeApolloClient;
