import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";



export default async function Home() {
  const res = await client.queries.main({ relativePath: "default.md" });

  return (
    <ClientPage {...res} />
  );
}