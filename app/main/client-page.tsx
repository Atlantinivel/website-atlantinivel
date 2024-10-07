"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import type { MainQuery } from "../../tina/__generated__/types";
import { CarouselHome } from "@/components/own/carousel/carousel";

interface ClientPageProps {
    data: MainQuery;
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

  console.log(data.main.carouselData);
  return (
    <h1></h1>
    //<CarouselHome projects={data.main.carouselData}></CarouselHome>
  );
}
