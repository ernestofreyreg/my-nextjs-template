"use client";

import { login, signup } from "@/services/auth";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async () => {
    const credentials = form.getValues();
    await login(credentials);
  };

  const handleSignup = async (data) => {
    const credentials = form.getValues();
    await signup(credentials);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <form>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              {...form.register("email")}
              className="border rounded"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              {...form.register("password")}
              className="border rounded"
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="bg-sky-500 text-white rounded p-2 w-full"
            >
              Log in
            </button>
          </div>

          <div>
            <button
              type="button"
              onClick={handleSignup}
              className="bg-sky-600 text-white rounded p-2 w-full"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
