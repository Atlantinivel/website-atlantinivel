"use client";
import { useTina } from "tinacms/dist/react";
import type { ContactsQuery} from "../../tina/__generated__/types";
import { PageTop } from "@/components/own/page-top/pageTop";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input, Button } from "tinacms";
import { Checkbox } from "@/components/ui/checkbox";

interface ClientPageProps {
    data: ContactsQuery["contacts"];
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

  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
    <PageTop query={props.query} variables={props.variables} data={props.data}/>

    <div className="container mx-auto my-20 p-4 ">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-8">
          <Card className="p-6 border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-atlantiBlue">Sede</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Atlântinível – Engenharia e Construção</p>
              <p>Rua Alto da Ribeira, 570</p>
              <p>4440-104 Campo, Valongo</p>
              <p className="mt-4">
                <strong>Phone:</strong> +351 224 151 167
              </p>
              <p>
                <strong>Email:</strong> geral@atlantinivel.pt
              </p>
            </CardContent>
          </Card>

        <div className="flex flex-col gap-8 border-t-2 border-atlantiBlue"/>

          <Card className="p-6 border-0 shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl text-atlantiBlue">Departamento Comercial/ Orçamentação</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Phone:</strong> +351 224 151 167
              </p>
              <p>
                <strong>Email:</strong> orcamentos@atlantinivel.pt
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="md:w-2/3 p-6 border-0 shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl text-atlantiBlue">Contacte-nos</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Nome" required />
              <Input type="email" placeholder="Email" required />
              <Input placeholder="Assunto" />
              <Textarea placeholder="Mensagem" required />
              <div className="flex items-center space-x-2">
                
                <label htmlFor="privacy" className="text-sm">
                 <Checkbox></Checkbox> Li e aceito a <a href="#" className="text-atlantiBlue underline">Política de Privacidade</a>
                </label>
              </div>
              <Button type="submit" className="w-full bg-atlantiBlue text-white bg-opacity-70 hover:bg-opacity-100">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>

    </main>
  );
}
