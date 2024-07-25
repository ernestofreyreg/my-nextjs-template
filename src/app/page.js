import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return <div>Hello MDC 27 - {data?.user.email} </div>;
}
