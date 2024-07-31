import { getPerson } from "@/services/getPerson";
import { UpdatePerson } from "@/components/UpdatePerson";

export default async function UpdatePersonPage({ params: { id } }) {
  const person = await getPerson(id);

  if (!person) {
    return <div>Error</div>;
  }

  return <UpdatePerson person={person} />;
}
