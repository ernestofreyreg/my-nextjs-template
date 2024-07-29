"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async () => {
    const { email, password } = form.getValues();

    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      router.push("/");
    }
  };

  const handleSignup = async (formData) => {
    const { email, password } = form.getValues();

    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error) {
      router.push("/");
    }
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
