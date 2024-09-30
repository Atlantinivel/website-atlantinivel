import client from "../../tina/__generated__/client";


export default async function Contacts() {
  const res = await client.queries.contacts({ relativePath: "default.md" });
  console.log('res', res);

  return (
    <h1 className="text-3xl font-bold underline">
      Contacts
    </h1>
  );
}