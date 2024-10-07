import { Card, CardContent } from "@/components/ui/card";
import {Carousel,CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { Button } from "tinacms";

const projects = [
    { id: 1, image: '/portfolio/caxinas.jpg', title: "Centro Comunitário das Caxinas", desc: "Industria" },
    { id: 2, image: '/portfolio/oficina.jpg', title: "Associacao Homens do Mar", desc: "Associacao" },
    { id: 3, image: '/portfolio/caxinas.jpg', title: "Project 3", desc: 'Algo' },
  ]

export function CarouselHome(props: {
    projects: { image: string; title: string; desc: string }[];
}) {

    const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-screen mx-auto my-16 px-4 sm:px-6 md:px-8">
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-4">
          {props.projects.map((project, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="w-full">
                <CardContent className="w-full p-0">
                  <img
                    className="w-full h-[300px] sm:h-[400px] md:h-[460px] object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="ml-8 sm:ml-14 h-full">
                    <h1 className="absolute top-6 sm:top-11 text-white text-base sm:text-xl md:text-2xl">
                      {project.desc}
                    </h1>
                    <h1 className="absolute top-16 sm:top-24 w-3/4 sm:w-1/2 gap-32 text-white text-4xl sm:text-7xl font-roboto font-extrabold">
                      {project.title}
                    </h1>
                    <Button className="absolute bottom-6 sm:bottom-10 bg-white text-black hover:bg-atlantiBlue hover:text-white">
                      Ver Projeto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 sm:bottom-10 right-20 sm:right-36 flex items-center ">
          <CarouselPrevious className="border-0 hover:bg-atlantiBlue hover:text-white mr-2 sm:mr-4">
            Anterior
          </CarouselPrevious>

          {projects.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 mx-1 sm:mx-2 rounded-full ${
                i === current ? 'bg-white' : 'bg-gray-500 opacity-50'
              }`}
            ></button>
          ))}

          <CarouselNext className="border-0 hover:bg-atlantiBlue hover:text-white ml-2 sm:ml-4">
            Próximo
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}