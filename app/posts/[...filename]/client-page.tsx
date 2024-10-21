'use client'
import React from 'react';
import { useTina } from "tinacms/dist/react";
import { PostQuery } from "../../../tina/__generated__/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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

export default function Post(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  if (!data.post) {
    return <div>Loading...</div>;
  }
  console.log('data', data);

  const { title, date, bannerImage, secondTitle, content, images } = data.post;
  // const bannerImage = additionalImages && additionalImages.length > 0 ? additionalImages[0].image : '';

  const FormattedDate = (isoDate) => {
    const date = parseISO(isoDate);
    const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", { locale: pt });

    return <span>{formattedDate}</span>;
  };

  return (

    <div>
      <Banner image={bannerImage} title={title || ''} />
      <section className="w-full py-10 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6 border-b pt-14 pb-4 text-center text-atlantiBlue ">
            <h2 className="block max-w-4xl text-2xl font-medium lg:text-3xl">
              {secondTitle}
            </h2>
            <div className="flex flex-col items-center gap-2 sm:flex-row">

              <p className="font-medium">{FormattedDate(date)}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-4  md:col-span-2 w-2/3 p-20 pb-5 mx-auto">
        <Image className="bg-muted rounded-md aspect-video" src={bannerImage}
          alt={title}
          objectFit="cover"
          width={400} height={300} layout="responsive" />
      </div>
      <div className="container mx-auto p-6 max-w-5xl">
        <TinaMarkdown content={content} /></div>

      <div className='flex flex-col max-w-7xl mx-auto gap-12 px-16 py-5'>

        <Carousel opts={{

          loop: true,
        }}>
          <CarouselContent>
            {images?.map((item, index) => (
              <CarouselItem key={index}>

                <div className="relative rounded-md aspect-video overflow-hidden">
                  <Image
                    src={item?.imageList.image}
                    alt={item?.imageList.caption || `Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

    </div>
  );
}

