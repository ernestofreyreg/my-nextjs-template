import { MyLink } from "@/components/MyLink";
import { getPerson } from "@/services/getPerson";
import { SendEmail } from "@/components/SendEmail";

export default async function PersonPage({ params: { id } }) {
  const person = await getPerson(id);

  if (!person) {
    return <div>Error querying data</div>;
  }

  return (
    <div className="w-6/12 mx-auto flex flex-col gap-4">
      <h1>Person Info</h1>
      <div className="grid grid-cols-2 p-4 shadow rounded">
        <div>Name</div>
        <div>
          {person.name} {person.last}
        </div>

        <div>DOB</div>
        <div>{person.dob}</div>

        <div>Address</div>
        <div>{person.address}</div>

        <div>Email</div>
        <div>{person.email}</div>

        <div>Role</div>
        <div>{person.role}</div>
      </div>
      <div className="grid grid-cols-2 p-4 shadow rounded">
        <div>Branches</div>
        <ul>
          {person.person_branches.map((pb) => (
            <li>{pb.branches.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-row gap-2">
        <MyLink href={`/persons/${id}/update`}>Update Info</MyLink>

        <SendEmail person={person} />
      </div>
    </div>
  );
}
