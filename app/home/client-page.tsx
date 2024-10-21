"use client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import type { MainQuery } from "../../tina/__generated__/types";
import { CarouselHome } from "@/components/own/carousel/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight, DollarSign, KeyRound, Timer, ArrowRight, MessageCircleMore, Lightbulb, ListChecks } from "lucide-react";
import Link from "next/link";
import { MiniCarousel } from "@/components/own/mini-carousel/miniCarousel";

import { PersonStanding, Zap, ZoomIn } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ClientPageProps {
  data: MainQuery;
  query: string;
  variables: { relativePath: string };
  news: any,
  projects: any
}

export default function ClientPage(props: ClientPageProps) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const calculateYearsSince = (year: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - year;
  };

  const { title, banner, contentWithImage, stats, services } = data.main;
  console.log('data', data);


  return (
    <div>
      {/* <div className="relative h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={banner.videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

        <div className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
              <p className="text-white">{banner.subtitle}</p>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-white">
                {banner.title}
              </h1>
            </div>
          </div>
        </div>
      </div> */}
      {banner && <div className="relative h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src="/uploads/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

        <div className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
              <p className="text-white">{banner.subtitle}</p>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-white">
                {banner.title}
              </h1>
            </div>
            <div className="relative aspect-[3/4]">

            </div>
          </div>
        </div>
      </div>}
      <div className="container mx-auto flex-col gap-10">
        {contentWithImage &&
          <div className="relative flex justify-between flex-col lg:flex-row gap-16 pt-36">
            <img className="pointer-events-none absolute inset-0 top-20 left-5 -z-10 size-[500px]" src="/logo/atlantinivel-background2.png" alt="Background" />

            <div className="w-full max-w-96 shrink-0 justify-between">
              <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-4xl text-atlantiBlue">
                {contentWithImage.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {contentWithImage.content}
              </p>
            </div>
            <div className="w-full max-w-3xl shrink-0 lg:block">
              <Image
                src={contentWithImage.image}
                alt={contentWithImage.title}
                width={450}
                height={450}
                className="max-h-[450px] w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
              />
            </div>
          </div>}

        {stats && <section className="container mx-auto">
          <div className="container mt-20 border-y">
            <div className="grid gap-10 p-9 md:grid-cols-3 lg:gap-0 lg:p-20">
              <div className="text-center">
                <p className="text-2xl font-medium text-muted-foreground">Equipa</p>
                <p className="pt-4 text-7xl font-semibold lg:pt-10 text-atlantiBlue">+{stats.teamCount}</p>
                <p className="text-2xl font-semibold text-muted-foreground">Colaboradores</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium text-muted-foreground">Currículo</p>
                <p className="pt-4 text-7xl font-semibold lg:pt-10 text-atlantiBlue">+{stats.projectCount}</p>
                <p className="text-2xl font-semibold text-muted-foreground">Obras</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-medium text-muted-foreground">Experiencia</p>
                <p className="pt-4 text-7xl font-semibold lg:pt-10 text-atlantiBlue">{calculateYearsSince(stats.foundingYear)}</p>
                <p className="text-2xl font-semibold text-muted-foreground">anos</p>
              </div>
            </div>
          </div>
        </section>}
        {services &&
          <div className="container mx-auto py-16">
            <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8 pb-5">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-atlantiBlue">
                {services.title}
              </h4>
              <Link href={`/services`}>
                <Button className="gap-4 bg-atlantiBlue hover:bg-atlantiBlue hover:opacity-80">
                  Ver Serviços <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <Tabs className="flex flex-col gap-10 lg:flex-row-reverse" defaultValue="feature-1">
              <TabsList className="flex h-auto w-full lg:w-1/2 flex-col gap-2 bg-background">
                {services.serviceList.map((service, index) => (
                  <TabsTrigger
                    key={index}
                    value={`feature-${index + 1}`}
                    className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md min-h-14 border border-gray-200 p-4 text-left text-atlantiBlue hover:border-gray-300 data-[state=active]:shadow-md data-[state=active]:border-transparent"
                  >
                    <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                      <h3 className="font-medium md:mb-2 md:text-2xl text-atlantiBlue">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              <div>
                {services.serviceList.map((service, index) => (
                  <TabsContent key={index} value={`feature-${index + 1}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={450}
                      className="aspect-video rounded-md object-cover m-auto"
                    />
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>}
      </div>
      <div className="w-full   py-16">
        <div className="container mx-auto flex flex-col gap-14">
          <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
            <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-atlantiBlue">
              Últimas notícias
            </h4>
            <Link href={`/posts`}>
              <Button className="gap-4 bg-atlantiBlue hover:bg-atlantiBlue hover:opacity-80" >
                Ver todas <MoveRight className="w-4 h-4" />
              </Button></Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {props.news.data.postConnection.edges.map((post) => (
              <Link href={`/posts/${post.node._sys.filename}`}>

                <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
                  <Image className="bg-muted rounded-md aspect-video mb-4" src={post.node.bannerImage}
                    alt={post.node.title}
                    objectFit="cover"
                    width={400} height={300} layout="responsive" />
                  <h3 className="text-xl tracking-tight">{post.node.title}</h3>
                  <p className="text-muted-foreground text-base">
                    {post.node.title}
                  </p>
                </div>

              </Link>
            ))}
          </div>



        </div>
      </div>
      <MiniCarousel list={props.projects.data.portfolioConnection.edges.map((item) => ({ mainImage: item.node.mainImage, title: item.node.title }))}></MiniCarousel>
    </div>
  );
}
//   const calculateYearsSince = (year) => {
//     const givenYear = parseInt(year, 10);
//     const currentYear = new Date().getFullYear();

//     return currentYear - givenYear;
//   }
//   const { title, banner, cardsSection, contentWithImage } = data.main;


//   return (
//     <div>

{/* <div className="relative h-[80vh] w-full overflow-hidden">
<video
  autoPlay
  loop
  muted
  className="absolute top-0 left-0 w-full h-full object-cover "
>
  <source src="/uploads/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

<div className="relative z-10">
  <div className="grid items-center gap-8 lg:grid-cols-2">
    <div className="flex flex-col items-center py-32 text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left">
      <p className="text-white">Engenharia e Construção</p>
      <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl text-white">
        Atlântinível
      </h1>
    </div>
    <div className="relative aspect-[3/4]">

    </div>
  </div>
</div>
</div> */}

//       <div className="container mx-auto flex-col gap-10">


//         <div className="relative flex justify-between flex-col  lg:flex-row gap-16 pt-36">
//           <img className="pointer-events-none absolute inset-0 top-20 left-5 -z-10   size-[500px] " src="/logo/atlantinivel-background2.png"></img>

//           <div className="pointer-events-none absolute inset-0 hidden  lg:block"></div>

//           <div className="w-full max-w-96 shrink-0 justify-between">

//             <h2 className="mb-3 mt-6 text-3xl font-medium lg:text-4xl text-atlantiBlue">
//               {contentWithImage.title}
//             </h2>
//             <p className="text-sm text-muted-foreground">
//               {contentWithImage.content}
//             </p>
//           </div>
//           <div className=" w-full max-w-3xl shrink-0 lg:block">
//             <img
//               src={contentWithImage.image}
//               alt={contentWithImage.title}
//               className="max-h-[450px] w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
//             />
//           </div>
//         </div>


//         <section className="container mx-auto">
//           <div className="container mt-20 border-y">

//             <div className="grid gap-10 p-9 md:grid-cols-3 lg:gap-0 lg:p-20">
//               <div className="text-center">
//                 <p className="text-2xl font-medium text-muted-foreground">
//                   Equipa
//                 </p>
//                 <p className="pt-4 text-7xl font-semibold lg:pt-10 text-atlantiBlue">+200</p>
//                 <p className="text-2xl font-semibold text-muted-foreground">
//                   Colaboradores
//                 </p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-medium text-muted-foreground">
//                   Currículo
//                 </p>
//                 <p className="pt-4 text-7xl font-semibold lg:pt-10 text-atlantiBlue">+100</p>
//                 <p className="text-2xl font-semibold text-muted-foreground">
//                   Obras
//                 </p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-medium text-muted-foreground">
//                   Experiencia
//                 </p>
//                 <p className="pt-4 text-7xl font-semibold lg:pt-10 text-atlantiBlue">{calculateYearsSince(2006)}</p>
//                 <p className="text-2xl font-semibold text-muted-foreground">
//                   anos
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//         <div className="container mx-auto py-16">
//           <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8 pb-5">
//             <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-atlantiBlue">
//               Serviços
//             </h4>
//             <Link href={`/services`}>
//               <Button className="gap-4 bg-atlantiBlue hover:bg-atlantiBlue hover:opacity-80" >
//                 Ver Serviços <MoveRight className="w-4 h-4" />
//               </Button></Link>
//           </div>
//           <Tabs className="flex flex-col gap-10 lg:flex-row-reverse" defaultValue="feature-1">
//             <TabsList className="flex h-auto w-full lg:w-1/2 flex-col gap-2 bg-background">
//               <TabsTrigger
//                 value="feature-1"
//                 className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md min-h-14 border border-gray-200 p-4 text-left text-atlantiBlue hover:border-gray-300 data-[state=active]:shadow-md data-[state=active]:border-transparent"
//               >
//                 <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
//                   <h3 className="font-medium md:mb-2 md:text-2xl text-atlantiBlue">
//                     Construção & Reabilitação
//                   </h3>
//                   <p className="text-sm text-muted-foreground md:text-base">
//                     Criar de raiz ou dar uma nova vida a um espaço existente: é esta a essência da construção e reabilitação.
//                   </p>
//                 </div>
//               </TabsTrigger>
//               <TabsTrigger
//                 value="feature-2"
//                 className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border border-gray-200 p-4 text-left text-atlantiBlue hover:border-gray-300 data-[state=active]:shadow-md data-[state=active]:border-transparent"
//               >
//                 <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
//                   <h3 className="font-medium md:mb-2 md:text-2xl text-atlantiBlue">
//                     Infra-estruturas
//                   </h3>
//                   <p className="text-sm text-muted-foreground md:text-base">
//                     As infraestruturas são cruciais para o funcionamento pleno de qualquer espaço.
//                   </p>
//                 </div>
//               </TabsTrigger>
//               <TabsTrigger
//                 value="feature-3"
//                 className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border border-gray-200 p-4 text-left text-atlantiBlue hover:border-gray-300 data-[state=active]:shadow-md data-[state=active]:border-transparent"
//               >
//                 <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
//                   <h3 className="font-medium md:mb-2 md:text-2xl text-atlantiBlue">
//                     Projetos
//                   </h3>
//                   <p className="text-sm text-muted-foreground md:text-base">
//                     Quando colocamos as mãos numa obra, o ponto de partida é sempre o projeto.
//                   </p>
//                 </div>
//               </TabsTrigger>
//               <TabsTrigger
//                 value="feature-4"
//                 className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border border-gray-200 p-4 text-left text-atlantiBlue hover:border-gray-300 data-[state=active]:shadow-md data-[state=active]:border-transparent"
//               >
//                 <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
//                   <h3 className="font-medium md:mb-2 md:text-2xl text-atlantiBlue">
//                     Demolições
//                   </h3>
//                   <p className="text-sm text-muted-foreground md:text-base">
//                     Por vezes, para se poder construir é necessário primeiro demolir.
//                   </p>
//                 </div>
//               </TabsTrigger>
//             </TabsList>
//             <div>
//               <TabsContent value="feature-1">
//                 <img
//                   src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
//                   alt=""
//                   className="aspect-video rounded-md object-cover m-auto"
//                 />
//               </TabsContent>
//               <TabsContent value="feature-2">
//                 <img
//                   src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
//                   alt=""
//                   className="aspect-video rounded-md object-cover"
//                 />
//               </TabsContent>
//               <TabsContent value="feature-3">
//                 <img
//                   src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
//                   alt=""
//                   className="aspect-video  rounded-md object-cover"
//                 />
//               </TabsContent>
//               <TabsContent value="feature-4">
//                 <img
//                   src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
//                   alt=""
//                   className="aspect-video rounded-md object-cover"
//                 />
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>





//   <div className="w-full   py-16">
//     <div className="container mx-auto flex flex-col gap-14">
//       <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
//         <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-atlantiBlue">
//           Últimas notícias
//         </h4>
//         <Link href={`/posts`}>
//           <Button className="gap-4 bg-atlantiBlue hover:bg-atlantiBlue hover:opacity-80" >
//             Ver todas <MoveRight className="w-4 h-4" />
//           </Button></Link>
//       </div>
//       {props.news.data.postConnection.edges.map((post) => (
//         <Link href={`/posts/${post.node._sys.filename}`}>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
//               <Image className="bg-muted rounded-md aspect-video mb-4" src={post.node.bannerImage}
//                 alt={post.node.title}
//                 objectFit="cover"
//                 width={400} height={300} layout="responsive" />
//               <h3 className="text-xl tracking-tight">{post.node.title}</h3>
//               <p className="text-muted-foreground text-base">
//                 {post.node.title}
//               </p>
//             </div>

//           </div>
//         </Link>
//       ))}



//     </div>
//   </div>
// </div >
// </div>

//   );
// }
// {/* <MiniCarousel list={props.projects.data.portfolioConnection.edges.map((item) => ({ mainImage: item.node.mainImage, title: item.node.title }))}></MiniCarousel> */}



