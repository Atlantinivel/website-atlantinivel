
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";


export default async function getServerSideProps() {
    const res = await client.queries.services({ relativePath: "default.md" });


  return (

    <ClientPage query={res.query} variables={res.variables}  data={res.data.services} />
  );
}