import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import Container from "./Container";

function Protected({ history }) {
  useEffect(() => {
    // check to see if the current user us already signed into the app
    // if not redirect to profile
    Auth.currentAuthenticatedUser().catch(() => {
      history.push("/profile");
    });
  }, [history]);

  return (
    <Container>
      <h1>Protected Route</h1>
    </Container>
  );
}

export default Protected;
