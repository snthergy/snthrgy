import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

const DEFAULT_REDIRECT_CALLBACK = (): void =>
  window.history.replaceState({}, document.title, window.location.pathname);

interface Auth0Context {
  isAuthenticated: boolean;
  loginWithRedirect: Function;
  logout: Function;
  user: {};
  popupOpen: boolean;
  loginWithPopup: (params?: {}) => Promise<void>;
  handleRedirectCallback: Function;
  getIdTokenClaims: Function;
  getTokenSilently: Function;
  getTokenWithPopup: Function;
}

const DefaultAuth0Context = {
  isAuthenticated: false,
  loginWithRedirect: (): any => null,
  logout: (): any => null,
  user: {},
  loading: false,
  popupOpen: false,
  loginWithPopup: (): any => null,
  handleRedirectCallback: (): any => null,
  getTokenSilently: (): any => null,
  getIdTokenClaims: (): any => null,
  getTokenWithPopup: (): any => null
}

export const Auth0Context = React.createContext(DefaultAuth0Context);
export const useAuth0 = (): Auth0Context => useContext(Auth0Context);

export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}: { children: React.ReactChildren; onRedirectCallback: Function; initOptions?: any }): React.ReactNode => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async (): Promise<void> => {
      const auth0FromHook = await createAuth0Client(initOptions as Auth0ClientOptions);
      setAuth0(auth0FromHook);

      // if (window.location.search.includes("code=")) {
      //   const { appState } = await auth0FromHook.handleRedirectCallback();
      //   onRedirectCallback(appState);
      // }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    };
    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async (): Promise<void> => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p: any): Function => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p: any) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p: any) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p: any) => auth0Client.getTokenWithPopup(...p),
        logout: (...p: any) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};