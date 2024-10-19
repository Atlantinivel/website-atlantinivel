"use client"

import React from 'react';
import { useTina } from "tinacms/dist/react";
import { CareerQuery } from "../../../tina/__generated__/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: CareerQuery;
}

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
    <div className="container mx-auto p-4">
      {title && <h1 className="text-3xl font-bold mb-6">{title}</h1>}

      {description && <TinaMarkdown content={description} />}

      {profileDetails && profileDetails.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Profile Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {profileDetails.map((detail, index) => (
                <li key={index}>{detail?.detail}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {requirements && requirements.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {requirements.map((req, index) => (
                <li key={index}>{req?.requirement}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {conditions && conditions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {conditions.map((condition, index) => (
                <li key={index}>{condition?.condition}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}