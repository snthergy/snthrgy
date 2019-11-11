import gql from "graphql-tag";

export const QUERY_USERNAME = gql`
  query fetchUser($auth0_id: String!) {
    users(where: { auth0_id: { _eq: $auth0_id } }) {
      name
    }
  }
`;
