"use client";
import { useTina } from "tinacms/dist/react";
import type { CompanyQuery } from "../../tina/__generated__/types";
import { PageTop } from "@/components/own/page-top/pageTop";

import { CircleArrowRight, Files, Settings } from 'lucide-react';
import { TinaMarkdown } from "tinacms/dist/rich-text";
// 
interface ClientPageProps {
  data: CompanyQuery["company"];
  query: string;
  variables: { relativePath: string };
}

export default function ClientPage(props: ClientPageProps) {

  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const { title, description, mission, vision, values, image } = data;


  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageTop query={props.query} variables={props.variables} data={props.data} />
      <div className="container flex flex-col gap-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse gap-12 md:flex-row items-center">
            <img
              src={image}
              alt={title}
              className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
            />
            <div className="lg:p-10">
              <h2 className="text-balance text-3xl font-medium md:text-5xl pb-10 text-atlantiBlue">
                {title}
              </h2>
              <p>{description}</p>

            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl text-atlantiBlue">
              Missão e Visão
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
              <p className="text-sm text-muted-foreground">Missão</p>
              <p className="text-lg font-medium">{mission.description}</p>
            </div>
            <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
              <p className="text-sm text-muted-foreground">Visão</p>
              <p className="text-lg font-medium">{vision.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl text-atlantiBlue">
              Os nossos Valores e Princípios
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="mb-3 mt-2 text-2xl font-semibold text-atlantiBlue">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>

    // <main className="flex min-h-screen flex-col items-center justify-between">

    //   <div className="container flex flex-col gap-20 ">
    //     <div className="container mx-auto  max-w-6xl">
    //       <div className="flex flex-col-reverse gap-12 md:flex-row items-center">
    //         <img
    //           src="/uploads/contactTop.jpeg"
    //           alt="placeholder"
    //           className="max-h-96 w-full rounded-lg object-cover md:max-h-[500px] md:w-1/2"
    //         />
    //         <div className="lg:p-10">
    //           <h2 className="text-balance text-3xl font-medium md:text-5xl pb-10 text-atlantiBlue">
    //             Especialistas em Construção e Engenharia
    //           </h2>
    //           <p className=" text-sm pb-6">
    //             A actuar no mercado da construção civil e obras públicas, com o alvará n.º 58193, a empresa Atlântinível apresenta-se em grande expansão no mercado, sendo já uma referência na sua área de domínio, revelando elevados valores como a qualidade e profissionalismo que coloca ao seu dispor.
    //           </p>
    //           <p className=" text-sm pb-6">
    //             A Atlântinível tem hoje em dia diversas competências, que lhe permitem actuar nas diferentes áreas da construção civil. O seu percurso evolutivo e consistente, caracterizados pelas diferentes experiências e aprendizagens permitem hoje uma elevada habilitação para o ramo. </p>
    //           <p className=" text-sm pb-6">
    //             Estando inseridos num mercado em constante evolução, procuramos ter uma dinâmica que nos permita um crescimento continuado das nossas competências e um desenvolvimento sustentado para alcançar o nosso primeiro objectivo, a sua satisfação, isto é, a satisfação do nosso cliente.</p>


    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-6 md:gap-20">
    //       <div className="max-w-xl">
    //         <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl text-atlantiBlue">
    //           Missão e Visão
    //         </h2>
    //       </div>
    //       <div className="grid gap-6 md:grid-cols-2">

    //         <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
    //           <p className="text-sm text-muted-foreground">Missão</p>
    //           <p className="text-lg font-medium">
    //             Tem como Missão, criar valor e ser melhor, satisfazendo os nossos clientes e partes interessadas, assegurando um desempenho ambiental adequado e o cumprimento das normas de segurança e saúde em vigor.
    //           </p>
    //         </div>
    //         <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
    //           <p className="text-sm text-muted-foreground">Visão</p>
    //           <p className="text-lg font-medium">
    //             Ser uma empresa de referência a nível nacional no nosso mercado de atuação, com produtos e serviços de elevada Qualidade orientada para a plena satisfação dos nossos clientes, colaboradores e partes interessadas, tendo em vista a conquista de novos mercados nacionais associado ao setor público e privado.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-6 md:gap-20">
    //       <div className="max-w-xl">
    //         <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl text-atlantiBlue">
    //           Os nossos Valores e Princípios
    //         </h2>

    //       </div>

    //       <div className="grid gap-10 md:grid-cols-2">
    //         <div className="flex flex-col">

    //           <h3 className="mb-3 mt-2 text-2xl font-semibold  text-atlantiBlue">
    //             Qualidade
    //           </h3>
    //           <p className="text-muted-foreground">
    //             Construir com Qualidade, no respeito pelo Ambiente e pela Segurança e Saúde no Trabalho, cumprindo os requisitos normativos, legais e regulamentos aplicáveis e outros requisitos que a empresa subscreva;
    //           </p>
    //         </div>
    //         <div className="flex flex-col">

    //           <h3 className="mb-3 mt-2 text-2xl font-semibold text-atlantiBlue">
    //             Clientes
    //           </h3>
    //           <p className="text-muted-foreground">
    //             Assegurar a satisfação dos clientes, fornecedores e partes interessadas, fomentando um elevado sentido de responsabilidade social, no domínio ambiental e na obtenção de padrões de excelência na segurança e a saúde do trabalho;
    //           </p>
    //         </div>
    //         <div className="flex flex-col">

    //           <h3 className="mb-3 mt-2 text-2xl font-semibold text-atlantiBlue">
    //             Sensibilização
    //           </h3>
    //           <p className="text-muted-foreground">
    //             Promover programas de sensibilização e fomentar a contínua formação e atualização profissional de todos os atuais e potenciais colaboradores, de modo a que todos estejam conscientes das suas responsabilidades individuais e coletivas;
    //           </p>
    //         </div>
    //         <div className="flex flex-col">

    //           <h3 className="mb-3 mt-2 text-2xl font-semibold text-atlantiBlue">
    //             Melhoria Contínua
    //           </h3>
    //           <p className="text-muted-foreground">
    //             Promover a Melhoria Contínua, avaliando o desempenho do Sistema de Gestão, na definição da estratégia e dos objetivos estabelecidos pela empresa.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </main>
  );
}






