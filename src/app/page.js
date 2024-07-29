import { Signout } from "@/components/Signout";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return <div>Home page {data?.user && <Signout user={data.user} />}</div>;
}
