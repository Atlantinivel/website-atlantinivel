'use client'
import React from 'react';
import { useTina } from "tinacms/dist/react";
import { PostQuery } from "../../../tina/__generated__/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from 'next/image';

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

interface Section {
  sectionTitle?: string;
  content: any;
}

interface AdditionalImage {
  image: string;
  caption?: string;
}

const SectionCard: React.FC<{ section: Section }> = ({ section }) => {
  return (
    <Card className="mb-6">
      {section.sectionTitle && (
        <CardHeader>
          <CardTitle>{section.sectionTitle}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <TinaMarkdown content={section.content} />
      </CardContent>
    </Card>
  );
};

const Banner: React.FC<{ image: string; title: string }> = ({ image, title }) => {
  return (
    <div className="relative w-full h-64 mb-8">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
        <h1 className="text-white text-4xl font-bold p-8">{title}</h1>
      </div>
    </div>
  );
};

export default function Post(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (!data.post) {
    return <div>Loading...</div>;
  }

  const { title, date, sections, additionalImages } = data.post;
  const bannerImage = additionalImages && additionalImages.length > 0 ? additionalImages[0].image : '';

  return (
    <div>
      <Banner image={bannerImage} title={title || ''} />
      <div className="container mx-auto p-4 max-w-3xl">
        {date && <p className="text-gray-600 mb-4">{new Date(date).toLocaleDateString()}</p>}

        {sections && sections.map((section, index) => (
          <SectionCard key={index} section={section as Section} />
        ))}

        {additionalImages && additionalImages.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {additionalImages.slice(1).map((img: AdditionalImage, index: number) => (
              <div key={index} className="relative">
                <Image src={img.image} alt={img.caption || `Additional image ${index + 2}`} width={400} height={300} layout="responsive" />
                {img.caption && (
                  <p className="text-sm text-gray-600 mt-2">{img.caption}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}