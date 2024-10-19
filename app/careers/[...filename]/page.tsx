
import Career from "./client-page";
import client from "../../../tina/__generated__/client";

export async function generateStaticParams() {
  const careersListData = await client.queries.careerConnection();
  return careersListData.data.careerConnection.edges.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));
}

export default async function CareerPage({
  params,
}: {
  params: { filename: string[] };
}) {
  const relativePath = `${params.filename.join("/")}.md`;
  const result = await client.queries.career({ relativePath });
  return <Career {...result} />;
}