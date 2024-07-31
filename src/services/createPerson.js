"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const createPerson = async (personData) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("persons")
    .insert([personData])
    .select();

  revalidatePath("/");

  if (data.length > 0) {
    return data[0];
  }

  return null;
};
