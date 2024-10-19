

import CareerList from "./career-list";
import { client } from "../../tina/__generated__/client";

export default async function Page() {
  const result = await client.queries.careerConnection();
  return <CareerList {...result} />;
}