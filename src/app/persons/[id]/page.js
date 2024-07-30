import { createClient } from "@/utils/supabase/server";
import { MyLink } from "@/components/MyLink";

export default async function PersonPage({ params: { id } }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("persons")
    .select("*, person_branches(branches(*))")
    .eq("id", id)
    .single();

  if (error) {
    return <div>Error querying data</div>;
  }

  return (
    <div className="w-6/12 mx-auto flex flex-col gap-4">
      <h1>Person Info</h1>
      <div className="grid grid-cols-2 p-4 shadow rounded">
        <div>Name</div>
        <div>
          {data.name} {data.last}
        </div>

        <div>DOB</div>
        <div>{data.dob}</div>

        <div>Address</div>
        <div>{data.address}</div>

        <div>Email</div>
        <div>{data.email}</div>

        <div>Role</div>
        <div>{data.role}</div>
      </div>
      <div className="grid grid-cols-2 p-4 shadow rounded">
        <div>Branches</div>
        <ul>
          {data.person_branches.map((pb) => (
            <li>{pb.branches.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <MyLink href={`/persons/${id}/update`}>Update Info</MyLink>
      </div>
    </div>
  );
}
