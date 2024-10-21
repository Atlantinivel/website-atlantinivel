"use client"

import React from 'react';
import { useTina } from "tinacms/dist/react";
import { CareerQuery } from "../../../tina/__generated__/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: CareerQuery;
}

const Banner: React.FC<{ image: string; title: string }> = ({ image, title }) => {
  return (
    <div className="relative w-full h-96 ">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <h1 className="text-white text-4xl font-bold p-8">{title}</h1>
      </div>
    </div>
  );
};

export default function Career(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (!data.career) {
    return <div>Loading...</div>;
  }

  const { title, description, profileDetails, requirements, conditions } = data.career;

  return (
    <div >
      <Banner title={''} image="/uploads/portfolioTop.jpg"></Banner>
      <div className=" container mx-auto py-10 ">
        <div className="flex gap-2 flex-col">
          {title && <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
            {title}
          </h2>}
          {description && <div className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
            <TinaMarkdown content={description} />
          </div>}
        </div>

        <div className="mx-auto mt-6 flex flex-col gap-16 md:mt-14">
          {profileDetails && profileDetails.length > 0 && (
            <div>
              <h2 className="border-b pb-4 text-xl font-bold">Profile Details</h2>

              {profileDetails.map((detail, index) => (
                // <li key={index}>{detail?.detail}</li>
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-4"
                >{detail?.detail}</div>
              ))}
            </div>
          )}

          {requirements && requirements.length > 0 && (
            <div>
              <h2 className="border-b pb-4 text-xl font-bold">Requirements</h2>

              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-4"
                >{req?.requirement}</div>
              ))}
            </div >
          )}

          {conditions && conditions.length > 0 && (
            <div>

              <h2 className="border-b pb-4 text-xl font-bold">
                Conditions
              </h2>
              {conditions.map((condition, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b py-4"
                >{condition?.condition}</div>
              ))}
            </div>
          )}
        </div>
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h3 className="mb-3 max-w-3xl text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6 pt-16">
              Envie seu currículo para:
            </h3>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
              <a href="mailto:geral@atlantinivel.pt" className=" text-2xl">geral@atlantinivel.pt</a>
            </p>
            <div className="w-full md:max-w-lg">
              <div className="flex flex-col justify-center gap-2 sm:flex-row">

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

