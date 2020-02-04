import * as React from "react";
import styled from "@emotion/styled";
import Dashboard from "./dashboard";

const Main = (props: {}): JSX.Element => {
  // const [session, setSession] = React.useState(false);

  // componentDidMount(): void {
  //   console.log("AUTH: ", this.props.auth);
  //   this.renewSession();
  // }

  // componentDidUpdate(): void {
  //   this.renewSession();
  // }

  const renewSession = (): void => {
    // const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      // eslint-disable-next-line
      // const lastSeenMutation = setInterval(
      //   this.updateLastSeen.bind(this),
      //   5000
      // );
      // renewSession()
    }
  };
  // const updateLastSeen = (): void => {
  //   const { auth, client } = props;
  //   const userId = auth.sub;
  //   const timestamp = moment().format();
  //   if (client) {
  //     props.client
  //       .mutate({
  //         mutation: USER_UPDATE_LASTSEEN,
  //         variables: {
  //           userId: userId,
  //           timestamp: timestamp
  //         }
  //       })
  //       .then(() => {
  //         // handle response if required
  //       })
  //       .catch((error: any) => {
  //         console.log("FETCH ERR");
  //         console.error(error);
  //       });
  //   }
  // };

  // const authenticated = props && props.auth.isAuthenticated();
  const authenticated = true;
  return (
    <AppContainer>
      <Dashboard {...props} authenticated={authenticated} />
      <button onClick={renewSession}>Manual renew</button>
    </AppContainer>
  );
};

export default Main;

const AppContainer = styled.div`
  margin-top: 64px;
`;
