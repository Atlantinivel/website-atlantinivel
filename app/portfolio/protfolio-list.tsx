'use client';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";


const PortfolioFilter = ({ portfolios, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const categories = useMemo(() => {
    const uniqueCategories = new Set(portfolios.map(portfolio => portfolio.node.category));
    return ["todos", ...Array.from(uniqueCategories)];
  }, [portfolios]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-2 pb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => handleFilterClick(category)}
            className="whitespace-nowrap"
          >
            {category.toUpperCase()}
          </Button>
        ))}
      </div>
      <div className="h-px bg-gray-200 w-full" />
    </div>
  );
};

const PortfolioCard = ({ id, title, client, image, route }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/portfolio/${route}`}
      key={id}
      className="relative bg-muted rounded-md aspect-square overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      />
      <div
        className={`absolute inset-0 p-6 flex justify-end flex-col transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="flex flex-col text-white">
          <h3 className="text-xl tracking-tight font-semibold">{title}</h3>
          <p className="text-white text-opacity-80 max-w-xs text-base mt-2">
            {client}
          </p>
        </div>
      </div>
    </Link>
  );
};

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

export default function PortfolioList(props) {
  const portfolios = props.data.portfolioConnection.edges;
  const [filteredPortfolios, setFilteredPortfolios] = useState(portfolios);

  const handleFilterChange = (category) => {
    if (category === "todos") {
      setFilteredPortfolios(portfolios);
    } else {
      const filtered = portfolios.filter(
        (portfolio) => portfolio.node.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredPortfolios(filtered);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Banner title="Projectos" image={props.data.portfolioConnection.edges[0].node.mainImage}></Banner>
      <div className="w-full py-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4 flex-col items-start">
              <div>
              </div>
              <div className="flex gap-2 flex-col">

              </div>
            </div>
            <PortfolioFilter portfolios={portfolios} onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPortfolios.map((port) =>

                (<PortfolioCard image={port.node.mainImage} title={port.node.title} client={port.node.client} id={port.node.id} route={port.node._sys.filename}></PortfolioCard>)

              )}

            </div>
          </div>
        </div>
      </div>
    </main >
  );
}



