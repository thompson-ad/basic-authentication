import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPassword({ forgotPassword, updateFormState }) {
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
      />
      <Button onClick={forgotPassword} title="Reset password" />
    </div>
  );
}

export default ForgotPassword;
