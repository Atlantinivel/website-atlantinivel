"use client";
import { useTina } from "tinacms/dist/react";
import type { ServicesQuery} from "../../tina/__generated__/types";
import { PageTop } from "@/components/own/page-top/pageTop";

interface ClientPageProps {
    data: ServicesQuery["services"];
    query: string;
    variables: { relativePath: string };
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
    <PageTop query={props.query} variables={props.variables} data={props.data}/>

    </main>
  );
}
