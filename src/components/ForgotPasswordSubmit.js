import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPasswordSubmit({ forgotPasswordSubmit, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        name="confirmationCode"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Confirmation code"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="New password"
      />
      <Button onClick={forgotPasswordSubmit} title="Save new password" />
    </div>
  );
}

export default ForgotPasswordSubmit;
