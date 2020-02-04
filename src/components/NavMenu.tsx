import * as React from "react";
import {Typography} from "@material-ui/core";
// import {QUERY_USERNAME} from "../client/queries/user_queries";

interface NavMenuProps {
  isLoggedIn: boolean;
}

const NavMenu = (): JSX.Element => {
  return (
    <div>
      <Typography>s_nthrgy</Typography>
      {/* <Typography>{authenticated && userName}</Typography> */}
    </div>
  );
};

export default NavMenu;
