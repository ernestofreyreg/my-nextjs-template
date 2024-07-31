"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PersonSchema } from "@/services/PersonSchema";
import { Input } from "./Input";
import { Loading } from "./Loading";

export function PersonForm({ onSave, isSaving, data, buttonLabel }) {
  const form = useForm({
    resolver: zodResolver(PersonSchema),
    defaultValues: data,
  });

  return (
    <form onSubmit={form.handleSubmit(onSave)}>
      <div className="flex flex-col gap-3 w-6/12 mx-auto p-4 shadow mt-5 rounded">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            {...form.register("name")}
            isError={form.formState.errors.name?.message}
          />
          <div className="text-xs text-red-600">
            {form.formState.errors.name?.message}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="last">Last</label>
          <Input
            type="text"
            id="last"
            {...form.register("last")}
            isError={form.formState.errors.last?.message}
          />
          <div className="text-xs text-red-600">
            {form.formState.errors.last?.message}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="dob">DOB</label>
          <Input
            type="date"
            id="dob"
            {...form.register("dob", { valueAsDate: true })}
            isError={form.formState.errors.dob?.message}
          />
          <div className="text-xs text-red-600">
            {form.formState.errors.dob?.message}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="address">Address</label>
          <Input
            type="text"
            id="address"
            {...form.register("address")}
            isError={form.formState.errors.address?.message}
          />
          <div className="text-xs text-red-600">
            {form.formState.errors.address?.message}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            {...form.register("email")}
            isError={form.formState.errors.email?.message}
          />
          <div className="text-xs text-red-600">
            {form.formState.errors.email?.message}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="role">Role</label>
          <Input
            type="text"
            id="role"
            {...form.register("role")}
            isError={form.formState.errors.role?.message}
          />
          <div className="text-xs text-red-600">
            {form.formState.errors.role?.message}
          </div>
        </div>

        <div>
          <button
            disabled={isSaving}
            type="submit"
            className="flex justify-center w-full bg-sky-500 hover:bg-sky-600 text-white px-2 py-3 rounded"
          >
            {isSaving ? <Loading /> : buttonLabel}
          </button>
        </div>
      </div>
    </form>
  );
}
