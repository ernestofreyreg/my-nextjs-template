import { PersonForm } from "@/components/PersonForm";
import { createClient } from "@/utils/supabase/server";

export default function AddPerson() {
  const handleCreatePerson = async (data) => {
    "use server";
    const supabase = createClient();
    await supabase.from("persons").insert([data]);
    redirect("/persons");
  };
  return <PersonForm onSave={handleCreatePerson} />;
}
