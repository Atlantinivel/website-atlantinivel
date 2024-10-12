
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";


export default async function Contacts() {
    const res = await client.queries.company({ relativePath: "default.md" });
    console.log(res)

  return (

    <ClientPage query={res.query} variables={res.variables}  data={res.data.company} />
  );
}