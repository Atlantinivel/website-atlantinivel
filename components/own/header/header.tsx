"use client"

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from "react-icons/rx";



export function Header(props: {
  
}) {

  const currentPath = usePathname()

  const getLinkClass = (path) => {
    return currentPath === path
      ? "pb-3 text-atlantiBlue decoration-2 underline decoration-atlantiBlue underline-offset-4"
      : "pb-3 text-gray-600 hover:text-atlantiBlue";
  };



  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 w-full">
      <div className="h-20 sm:h-24 mx-4 md:mx-6 lg:mx-8 px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between font-roboto">
        <div className="max-h-full w-48 sm:w-56 md:w-64 flex items-center">
          <Image
            className="pr-2 w-full h-auto"
            src="/logo/atlantinivel-logo-1.svg"
            alt="AtlantiNivel logo"
            width={240}
            height={0}
            priority
          />
        </div>

        <div className="hidden md:flex space-x-8 lg:space-x-10">
          <a href="/" className={`${getLinkClass('/')}`}><strong>Home</strong></a>
          <a href="/company" className={`${getLinkClass('/company')}`}><strong>Empresa</strong></a>
          <a href="/services" className={`${getLinkClass('/services')}`}><strong>Serviços</strong></a>
          <a href="/portfolio" className={`${getLinkClass('/portfolio')}`}><strong>Portfólio</strong></a>
          <a href="/news" className={`${getLinkClass('/news')}`}><strong>Notícias</strong></a>
          <a href="/contacts" className={`${getLinkClass('/contacts')}`}><strong>Contactos</strong></a>
          <a href="/careers" className={`${getLinkClass('/careers')}`}><strong>Carreiras</strong></a>
        </div>

        <Button variant="outline" className="hidden lg:block border-2 border-atlantiBlue text-atlantiBlue hover:bg-atlantiBlue hover:text-white">
          Pedir Orçamento
        </Button>

        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button className="p-2 bg-atlantiBlue bg-opacity-100 text-white">
                <RxHamburgerMenu className="h-6 sm:h-8 w-6 sm:w-8" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white w-screen h-[30vh] mt-4 pb-10 pl-6 rounded-md">
              <NavigationMenu>
                <NavigationMenuList className="font-bold">
                  <NavigationMenuItem className={`${getLinkClass('/')}`}>
                    <a href="/">Home</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={`${getLinkClass('/company')}`}>
                    <a href="/company">Empresa</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={`${getLinkClass('/services')}`}>
                    <a href="/services">Serviços</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={`${getLinkClass('/portfolio')}`}>
                    <a href="/portfolio">Portfólio</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={`${getLinkClass('/news')}`}>
                    <a href="/news">Notícias</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={`${getLinkClass('/contacts')}`}>
                    <a href="/contacts">Contactos</a>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={`${getLinkClass('/careers')}`}>
                    <a href="/careers">Carreiras</a>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}