"use client";

import { MyLink } from "./MyLink";

export function SendEmail({ person }) {
  const handleSendEmail = () => {
    alert("Sending email to " + person.name);
  };

  return <MyLink onClick={handleSendEmail}>Send Email</MyLink>;
}
