import React from "react";
import Container from "./components/Container";
import protectedRoute from "./lib/protectedRoute";

function Protected() {
  return (
    <Container>
      <h1>Protected Route</h1>
    </Container>
  );
}

export default protectedRoute(Protected);
