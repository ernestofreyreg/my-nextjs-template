import { createClient } from "@/utils/supabase/server";
import { Td } from "@/components/Td";
import { MyLink } from "@/components/MyLink";

export default async function PersonsList() {
  const supabase = createClient();
  const { data, error } = await supabase.from("persons").select("*");

  if (error) {
    return <div>Error querying data</div>;
  }

  return (
    <div>
      <h1>Person list</h1>
      <MyLink href="/persons/add">Add Person</MyLink>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((person, index) => (
            <tr>
              <Td>{index + 1}</Td>
              <Td>
                <MyLink href={`/persons/${person.id}`}>
                  {person.name} {person.last}
                </MyLink>
              </Td>
              <Td>{person.dob}</Td>
              <Td>{person.address}</Td>
              <Td>{person.email}</Td>
              <Td>{person.role}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
