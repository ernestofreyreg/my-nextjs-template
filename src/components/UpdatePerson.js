"use client";

import { updatePerson } from "@/services/updatePerson";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PersonForm } from "./PersonForm";

export function UpdatePerson({ person }) {
  const [isSaving, setIsSaving] = useState(false);

  const router = useRouter();
  const handleSave = async (data) => {
    const safeData = { dob: data.dob.toString(), ...data };
    setIsSaving(true);
    await updatePerson(person.id, safeData);
    setIsSaving(false);
    router.back();
  };

  return (
    <div>
      <h1 className="text-center text-xl font-semibold mt-5">Update person</h1>
      <PersonForm
        onSave={handleSave}
        isSaving={isSaving}
        data={person}
        buttonLabel="Update Person"
      />
    </div>
  );
}
