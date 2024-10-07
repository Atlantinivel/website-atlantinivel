import client from "../../tina/__generated__/client";



export default async function Home() {
  const res = await client.queries.main({ relativePath: "default.md" });
  console.log('res', res);

  return (
    <h1>a</h1>
  );
}