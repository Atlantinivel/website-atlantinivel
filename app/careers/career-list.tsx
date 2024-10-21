
import { BarChartHorizontal, BatteryCharging, ChevronRight, CircleHelp, Layers, WandSparkles, ZoomIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function CareerList(props) {


  return (
    <div className=" ">
      <Banner title={''} image="/uploads/portfolioTop.jpg"></Banner>
      <div className=" mx-auto container">
        <section className="relative py-32 before:absolute before:inset-0 before:bg-primary/10 before:[mask-image:url(/images/block/waves.svg)] before:[mask-repeat:repeat] before:[mask-size:_64px_32px]">
          <div className="container relative">
            <h2 className="mb-8 max-w-screen-sm text-balance text-2xl font-semibold lg:text-4xl">
              Vagas disponíveis
            </h2>
            <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {props.data.careerConnection.edges.map((career) => (
                <Link href={`/careers/${career.node._sys.filename}`} key={career.node.id}>
                  <div

                    className="flex flex-col gap-10 rounded-lg border bg-background p-8"
                  >
                    <div>

                      <h3 className="mb-2 mt-6 font-medium">{career.node.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {career.node.title}
                      </p>
                    </div>
                    <a
                      href={`/careers/${career.node._sys.filename}`}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      Ver detalhes
                      <ChevronRight className="w-4" />
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section></div>
    </div>
  );
}








