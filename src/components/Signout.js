"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function Signout({ user }) {
  const router = useRouter();
  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex flex-row gap-2">
      {user.email}
      <button className="text-sky-500 hover:underline" onClick={handleSignOut}>
        Sign out
      </button>
    </div>
  );
}
