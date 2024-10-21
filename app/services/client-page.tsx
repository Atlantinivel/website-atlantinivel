"use client";
import { useTina } from "tinacms/dist/react";
import type { ServicesQuery } from "../../tina/__generated__/types";
import { PageTop } from "@/components/own/page-top/pageTop";
import { Check, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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

  const { title, servicesList } = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageTop query={props.query} variables={props.variables} data={props.data} />
      <div className="w-full py-10 lg:py-20">
        <div className="container mx-auto flex flex-col gap-16">
          <h1 className="text-3xl md:text-5xl font-bold text-center text-atlantiBlue mb-10">
            {title}
          </h1>
          {servicesList.map((service, index) => (
            <div
              key={service.name}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:items-center`}
            >
              <div className="flex gap-4 flex-col flex-1">
                <div className="flex gap-6 flex-col">
                  <h2 className="text-xl md:text-4xl tracking-tighter lg:max-w-xl font-regular text-left text-atlantiBlue">
                    {service.name}
                  </h2>
                  <p className=" text-base leading-relaxed tracking-tight text-muted-foreground text-left">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="relative w-full aspect-video flex-1">
                <Image
                  src={service.image || "/uploads/contactTop.jpeg"}
                  alt={`${service.name} Image`}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between">
    //   <div className="w-full py-20 lg:py-40">
    //     <div className="container mx-auto flex flex-col gap-16">
    //       <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
    //         <div className="flex gap-4 flex-col flex-1">

    //           <div className="flex gap-6 flex-col">
    //             <h2 className="  text-xl md:text-4xl  tracking-tighter lg:max-w-xl font-regular text-left  text-atlantiBlue">
    //               Construção & Reabilitação
    //             </h2>
    //             <p className="text-lg  leading-relaxed tracking-tight text-muted-foreground text-left">
    //               Criar de raiz ou dar uma nova vida a um espaço existente: é esta a essência da construção e reabilitação, duas áreas chave em que a Atlântinível tem construído um caminho sólido e especializado. Independentemente da escala, nenhum projeto é impossível, nenhuma obra demasiada complexa. Qualquer que seja o passo inicial, o resultado final é sempre o mesmo: uma obra à sua medida, pensada e construída exclusivamente para si.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="relative w-full aspect-video flex-1">
    //           <Image
    //             src="/uploads/contactTop.jpeg"
    //             alt="Project Image"
    //             fill
    //             className="object-cover rounded-md"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-col lg:flex-row-reverse gap-10 lg:items-center">
    //         <div className="flex gap-4 flex-col flex-1">

    //           <div className="flex gap-6 flex-col">
    //             <h2 className="  text-xl md:text-4xl  tracking-tighter lg:max-w-xl font-regular text-left text-atlantiBlue">
    //               Infra-Estruturas
    //             </h2>
    //             <p className="text-lg  leading-relaxed tracking-tight text-muted-foreground text-left">
    //               As infraestruturas são cruciais para o funcionamento pleno de qualquer espaço. Neste domínio, asseguramos as mais diversas instalações – elétricas, mecânicas, telecomunicações, elevação, sistemas de extinção de incêndios, de segurança e de deteção; aquecimento, ventilação, ar condicionado e refrigeração – sempre profissionais, sempre fiáveis, serão os alicerces do seu futuro espaço. </p>
    //           </div>
    //         </div>
    //         <div className="relative w-full aspect-video flex-1">
    //           <Image
    //             src="/uploads/contactTop.jpeg"
    //             alt="Project Image"
    //             fill
    //             className="object-cover rounded-md"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
    //         <div className="flex gap-4 flex-col flex-1">

    //           <div className="flex gap-6 flex-col">
    //             <h2 className="  text-xl md:text-4xl  tracking-tighter lg:max-w-xl font-regular text-left text-atlantiBlue">
    //               Projetos
    //             </h2>
    //             <p className="text-lg  leading-relaxed tracking-tight text-muted-foreground text-left">
    //               Quando colocamos as mãos numa obra, o ponto de partida é sempre o projeto: é aqui que se começam a consolidar as fundações daquela que virá a ser uma grande obra, a sua. Do primeiro esboço ao último desenho, nenhum detalhe é deixado ao acaso, tudo é projetado tendo em conta o espaço, a estética, a funcionalidade. Com princípio, meio e fim, asseguramos a gestão total do seu projeto. </p>
    //           </div>
    //         </div>
    //         <div className="relative w-full aspect-video flex-1">
    //           <Image
    //             src="/uploads/contactTop.jpeg"
    //             alt="Project Image"
    //             fill
    //             className="object-cover rounded-md"
    //           />
    //         </div>
    //       </div>
    //       <div className="flex flex-col lg:flex-row-reverse gap-10 lg:items-center">
    //         <div className="flex gap-4 flex-col flex-1">

    //           <div className="flex gap-6 flex-col">
    //             <h2 className="  text-xl md:text-4xl  tracking-tighter lg:max-w-xl font-regular text-left text-atlantiBlue">
    //               Demolições
    //             </h2>
    //             <p className="text-lg  leading-relaxed tracking-tight text-muted-foreground text-left">
    //               Por vezes, para se poder construir é necessário primeiro demolir: só assim é possível dar uma nova vida a algo antigo, abrindo espaço para solidificar tudo o que vai ser edificado a partir daí. Os conhecimentos profundos e as capacidades específicas da Atlântinível garantem que qualquer demolição, integral ou parcial, será sempre preparada com rigor e segurança, utilizando os melhores equipamentos e antecipando eventuais dificuldades com as soluções mais adequadas. Demolir para reerguer, como sempre imaginou.

    //             </p>
    //           </div>
    //         </div>
    //         <div className="relative w-full aspect-video flex-1">
    //           <Image
    //             src="/uploads/contactTop.jpeg"
    //             alt="Project Image"
    //             fill
    //             className="object-cover rounded-md"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </main>
  );
}
