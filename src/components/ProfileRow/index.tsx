import React, {ReactElement} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {ProfileRowStyles} from "./styles";
import {Button} from "../../components/Button";

interface PropfileRowProps {}

export default function ProfileRow({}: PropfileRowProps): ReactElement {
  const {loginWithPopup, logout, isAuthenticated} = useAuth0();
  const message = isAuthenticated ? "Log out" : "Log in";
  const handler = isAuthenticated ? logout : loginWithPopup;

  return (
    <ProfileRowStyles>
      {/* TODO: this will become a dropdown menu */}
      <Button onClick={handler}>{message}</Button>
    </ProfileRowStyles>
  );
}
