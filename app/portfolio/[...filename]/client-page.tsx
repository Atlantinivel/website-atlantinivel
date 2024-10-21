"use client"

import React from 'react';
import { useTina } from "tinacms/dist/react";
import { PortfolioQuery } from "../../../tina/__generated__/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Calendar, Check, MapPin, UserRound } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Image from "next/image";
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PortfolioQuery;
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


export default function Portfolio(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });


  const FormattedDate = (isoDate) => {
    if (!isoDate) {
      return "Em construção";
    } else {
      const date = parseISO(isoDate);
      const formattedDate = format(date, "yyyy", { locale: pt });

      return <span>{formattedDate}</span>;
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const { title,
    description,
    mainImage,
    client,
    location,
    startDate,
    endDate,
    category,
    gallery } = data.portfolio;

  console.log('gallery', gallery);


  return (
    <>
      <Banner image={mainImage} ></Banner>
      <div className="w-full py-10 ">
        <div className="container mx-auto px-5">
          <div className="grid  container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-10 flex-col">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge className='uppercase bg-atlantiBlue'>{category}</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular text-atlantiBlue">
                    {title}
                  </h2>
                  <div className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                    <TinaMarkdown content={description} />
                  </div>
                </div>
              </div>
              <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                <div className="flex flex-row gap-6 items-center">
                  <UserRound className="w-5 h-5 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{client}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{location}</p>
                  </div>

                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{FormattedDate(startDate)} -  {FormattedDate(endDate)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square relative overflow-hidden">
              <Image
                src={mainImage}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          </div>
          <div className='flex flex-col gap-12 p-10'>
            <h2 className="text-2xl lg:text-3xl tracking-tighter max-w-xl text-left font-regular text-atlantiBlue">
              Galeria
            </h2>
            <Carousel opts={{

              loop: true,
            }}>
              <CarouselContent>
                {gallery?.map((item, index) => (
                  <CarouselItem key={index}>

                    <div className="relative rounded-md aspect-video overflow-hidden">
                      <Image
                        src={item?.image}
                        alt={item?.caption || `Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {
                gallery?.length > 1 &&
                <><CarouselPrevious />
                  <CarouselNext /></>}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}

