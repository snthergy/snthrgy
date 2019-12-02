import * as React from "react";
import styled from "@emotion/styled";
import Dashboard from "./dashboard";
import moment from "moment";
import { USER_UPDATE_LASTSEEN } from "../client/queries/user_queries";

interface MainProps {
  auth: any;
  client: any;
}

class Main extends React.Component<MainProps> {
  state = {
    session: false
  }

  // componentDidMount(): void {
  //   console.log("AUTH: ", this.props.auth);
  //   this.renewSession();
  // }

  // componentDidUpdate(): void {
  //   this.renewSession();
  // }

  renewSession = (): void => {
    // const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      // eslint-disable-next-line
      // const lastSeenMutation = setInterval(
      //   this.updateLastSeen.bind(this),
      //   5000
      // );
      // renewSession()
    }
  }
  updateLastSeen = (): void => {
    const { auth, client } = this.props;
    const userId = auth.sub;
    const timestamp = moment().format();
    if (client) {
      this.props.client
        .mutate({
          mutation: USER_UPDATE_LASTSEEN,
          variables: {
            userId: userId,
            timestamp: timestamp
          }
        })
        .then(() => {
          // handle response if required
        })
        .catch((error: any) => {
          console.log("FETCH ERR");
          console.error(error);
        });
    }
  };

  render(): JSX.Element {
    const { props } = this;
    // const authenticated = props && props.auth.isAuthenticated();
    const authenticated = true;
    return (
      <AppContainer>
        <Dashboard {...props} authenticated={authenticated} />
        <button onClick={this.renewSession}>Manual renew</button>
      </AppContainer>
    );
  }
};

export default Main;

const AppContainer = styled.div`
  margin-top: 64px;
`;
