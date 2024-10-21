
"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

export const MiniCarousel = ({ list }) => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 1500);
    }, [api, current]);

    return (
        <div className="w-full py-16">
            <div className="container mx-auto">
                <div className="flex flex-col  gap-10">
                    <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
                        <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-atlantiBlue">
                            Projectos recentes
                        </h2>
                        <Link href={`/portfolio`}>
                            <Button className="gap-4 bg-atlantiBlue hover:bg-atlantiBlue hover:opacity-80" >
                                Ver todos <MoveRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {list.map((item, index) => (
                                // <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                                //     <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                                //         <span className="text-sm">Logo {index + 1}</span>
                                //     </div>
                                // </CarouselItem>
                                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4" key={index}>
                                    <div className="relative rounded-md aspect-square overflow-hidden">
                                        <Image
                                            src={item.mainImage}
                                            alt={item.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-md"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};