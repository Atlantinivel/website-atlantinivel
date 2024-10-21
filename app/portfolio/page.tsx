

import PortfolioList from "./protfolio-list";
import { client } from "../../tina/__generated__/client";

export default async function Page() {
  const result = await client.queries.portfolioConnection();

  return <PortfolioList {...result} />;
}