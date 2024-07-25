"use client";

import { createClient } from "@/utils/supabase/client";

export default function LoginPage() {
  const handleLogin = (formData) => {
    const email = formData.get("email");

    const supabase = createClient();
    supabase.auth.signInWithOtp({
      email,
    });

    alert(`Auth Email sent to ${email}`);
  };

  return (
    <form action={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <button type="submit">Log in</button>
    </form>
  );
}
