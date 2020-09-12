import React, { useEffect } from "react";
import { Auth } from "aws-amplify";

const protectedRoute = (Comp, route = "/profile") => (props) => {
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (err) {
      props.history.push(route);
    }
  }

  useEffect(() => {
    checkAuthState();
  }, []);
  return <Comp {...props} />;
};

export default protectedRoute;

// this can be used to protect any component like

// export default protectedRoute(App) <-- default redirect
// export default protectedRoute(App, '/about-us) <-- custom redirect
