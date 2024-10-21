import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { pt } from 'date-fns/locale';

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

export default function PostList(props) {
  const FormattedDate = (isoDate) => {
    const date = parseISO(isoDate);
    const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", { locale: pt });

    return <span>{formattedDate}</span>;
  };

  return (
    <>
      <Banner title="Últimas notícias" image={props.data.postConnection.edges[0].node.bannerImage} ></Banner>
      <div className="w-full py-20 lg:py-40">
        <div className="container mx-auto flex flex-col gap-14">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


            {props.data.postConnection.edges && props.data.postConnection.edges[0] &&
              <Link href={`/posts/${props.data.postConnection.edges[0].node._sys.filename}`} className="flex flex-col gap-4 hover:opacity-75 cursor-pointer md:col-span-2">

                <Image className="bg-muted rounded-md aspect-video" src={props.data.postConnection.edges[0].node.bannerImage}
                  alt={props.data.postConnection.edges[0].node.title}
                  objectFit="cover"
                  width={400} height={300} layout="responsive" />

                <div className="flex flex-row gap-4 items-center">
                  <Badge>Notícia</Badge>

                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="max-w-3xl text-4xl tracking-tight">
                    {props.data.postConnection.edges[0].node.title}
                  </h3>
                  <p className="max-w-3xl text-muted-foreground text-base">

                    {props.data.postConnection.edges[0].node.title}
                  </p>
                </div>
              </Link>}
            {props.data.postConnection.edges.map((post) => (
              <Link href={`/posts/${post.node._sys.filename}`}>
                <div key={post.node.id} className="flex flex-col gap-4 hover:opacity-75 cursor-pointer">
                  {/* <div className="bg-muted rounded-md aspect-video"></div> */}
                  <Image className="bg-muted rounded-md aspect-video"
                    src={post.node.bannerImage}
                    alt={post.node.title}
                    objectFit="cover"
                    width={400} height={300} layout="responsive" />
                  <div className="flex flex-row gap-4 items-center">
                    <Badge>Notícia</Badge>
                    <p className="flex flex-row gap-2 text-sm items-center">

                      <span>{FormattedDate(post.node.date)}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="max-w-3xl text-2xl tracking-tight">
                      {post.node._sys.filename}
                    </h3>
                    <p className="max-w-3xl text-muted-foreground text-base">
                      {post.node._sys.filename}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
