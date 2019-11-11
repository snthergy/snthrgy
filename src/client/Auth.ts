/* eslint-disable @typescript-eslint/ban-ts-ignore */
import history from "../utils/history";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";

class Auth {
  accessToken: string | null;
  idToken: string | null;
  expiresAt: number | null;
  sub: string | null;
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: "token id_token",
    scope: "openid profile"
  });
  constructor() {
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = null;
    this.sub = null;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login(): void {
    this.auth0.authorize();
  }

  handleAuthentication = (): void => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        // store in db
        this.auth0.client.userInfo(authResult.accessToken, function(
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          err,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          user
        ) {
          // Now you have the user's information
          // The code to insert this user info to db has been handled at Auth0 Rule.
        });
      } else if (err) {
        history.replace("/");
        // window.location.href="/home";
        console.error(err);
        console.log("Auth result: ", authResult);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  };

  setSession(authResult: auth0.Auth0DecodedHash): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");

    // Set the time that the access token will expire at
    // @ts-ignore
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    // @ts-ignore
    this.accessToken = authResult.accessToken;
    // @ts-ignore
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    this.sub = authResult.idTokenPayload.sub;

    // navigate to the home route
    history.replace("/");
    // window.location.href="/home";
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getIdToken(): string | null {
    return this.idToken;
  }

  getSub(): string | null {
    return this.sub;
  }

  renewSession = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve(authResult);
        } else if (err) {
          this.logout();
          reject(err);
        }
      });
    });
  };

  logout(): void {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    // navigate to the home route
    history.replace("/");
    // window.location.href="/home";
  }

  isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = this.expiresAt;
    // @ts-ignore
    return new Date().getTime() < expiresAt;
  }
}

const auth = new Auth();

export default auth;
