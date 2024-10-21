import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";



export default async function Home() {
  const res = await client.queries.main({ relativePath: "homepage.md" });

  const news = await client.queries.postConnection();

  const projects = await client.queries.portfolioConnection();
  return (
    <ClientPage {...res} news={news} projects={projects} />
  );
}