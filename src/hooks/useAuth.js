import { Auth } from "aws-amplify";
import React from "react";

function useAuth() {
  const [isAuth, setIsAuth] = React.useState(Auth.user ? true : false);

  if (!isAuth) {
    window.location.reload();
  }

  async function signOut() {
    try {
      await Auth.signOut();
      setIsAuth(false);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  return { isAuth, signOut };
}

export default useAuth;
