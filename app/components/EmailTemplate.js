import React from "react";

export const EmailTemplate = ({ name, email, message }) => {
  return (
    <div>
      <h2>You just received a message!</h2>
      <p>
        <span>Name:</span>
        <strong>{name}</strong>
      </p>
      <p>
        <span>Email:</span>
        <strong>{email}</strong>
      </p>
      <p>
        <span>Message:</span>
        <strong>{message}</strong>
      </p>
    </div>
  );
};
