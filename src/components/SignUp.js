import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function SignUp({ signUp, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="username"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="password"
      />
      <input
        type="email"
        name="email"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="email"
      />
      <Button onClick={signUp} title="Sign Up" />
    </div>
  );
}

export default SignUp;
