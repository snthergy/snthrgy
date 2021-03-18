import React, {ReactElement, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useAtom} from "jotai";
import {ProfileRowStyles} from "./styles";
import {Button} from "../../components/Button";
import {userAtom} from "../../store/index";

interface PropfileRowProps {}

export default function ProfileRow({}: PropfileRowProps): ReactElement {
  const {loginWithPopup, logout, isAuthenticated, user} = useAuth0();
  const [userName, setUserName] = useAtom(userAtom);
  const message = isAuthenticated ? "Log out" : "Log in";
  const handler = isAuthenticated ? logout : loginWithPopup;

  console.log("USER: ", user);
  useEffect(() => {
    if (user) {
      setUserName({...userName, full_name: user.given_name});
    }
  }, [user]);

  return (
    <ProfileRowStyles>
      {/* TODO: this will become a dropdown menu */}
      <Button onClick={handler}>{message}</Button>
      {Boolean(userName.full_name) && userName.full_name}
    </ProfileRowStyles>
  );
}
