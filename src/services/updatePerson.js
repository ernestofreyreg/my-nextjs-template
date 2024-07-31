"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const updatePerson = async (id, personData) => {
  const supabase = createClient();

  const { data } = await supabase
    .from("persons")
    .update(personData)
    .eq("id", id)
    .select();

  revalidatePath(`/persons/${id}`);

  return data || null;
};
