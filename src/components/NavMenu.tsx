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
  authId,
  isLoggedIn
}: NavMenuProps): JSX.Element => {
  const [userName, setUsername] = React.useState("");

  const tester = () => {
    client
      .query({
        query: QUERY_USERNAME,
        variables: { authId: authId }
      })
      .then((data: any) => console.log("DATA: ", data))
      .catch((err: any) => console.log("ERROR: ", err));
  };

  return (
    <>
      <Typography>Menu</Typography>
      <Typography>{authenticated && userName}</Typography>
      <button onClick={tester}>CLICK</button>
    </>
  );
};

export default NavMenu;
