import * as React from "react";
import { Typography } from "@material-ui/core";
import { QUERY_USERNAME } from "../client/queries/user_queries";

interface NavMenuProps {
  client: any;
  authenticated: boolean;
  authId: string;
  isLoggedIn: boolean;
}

const NavMenu = ({
  authenticated,
  client,
  authId
}: NavMenuProps): JSX.Element => {
  const [userName, setUsername] = React.useState("");

  React.useEffect(() => {
    client
      .query({
        query: QUERY_USERNAME,
        // eslint-disable-next-line @typescript-eslint/camelcase
        variables: { auth0_id: authId }
      })
      .then((data: any) => setUsername(data.data.users[0].name))
      .catch((err: any) => console.log("ERROR: ", err));
  }, [authenticated, client, authId]);

  return (
    <>
      <Typography>Menu</Typography>
      <Typography>{authenticated && userName}</Typography>
    </>
  );
};

export default NavMenu;
