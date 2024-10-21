


import client from "@/tina/__generated__/client";

import Portfolio from "./client-page";

export async function generateStaticParams() {
  const pages = await client.queries.portfolioConnection();
  const paths = pages.data?.portfolioConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}


export default async function PortfolioPage({
  params,
}: {
  params: { filename: string[] };
}) {

  const data = await client.queries.portfolio({
    relativePath: `${params.filename}.md`,
  });

  return (
    <Portfolio {...data}></Portfolio>
  );
}
