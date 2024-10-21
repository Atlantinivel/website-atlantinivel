

"use client"

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export function Header() {
  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Empresa", href: "/company" },
    { title: "Serviços", href: "/services" },
    { title: "Portfólio", href: "/portfolio" },
    { title: "Notícias", href: "/posts" },
    { title: "Carreiras", href: "/careers" },
    { title: "Contactos", href: "/contacts" },
  ];

  const [isOpen, setOpen] = useState(false);
  const currentPath = usePathname()

  const getLinkClass = (path) => {
    return currentPath === path
      ? "text-atlantiBlue"
      : "text-gray-600 hover:text-atlantiBlue";
  };

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background shadow-md">
      <div className="container mx-auto px-4 min-h-20 flex items-center justify-between ">
        <div className="flex items-center">
          <Image
            className="h-11 w-auto"
            src="/logo/atlantinivel-logo-1.svg"
            alt="AtlantiNivel logo"
            width={40}
            height={44}
            priority
          />
        </div>

        <nav className="hidden lg:flex items-center justify-center flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center gap-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={getLinkClass(item.href)}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center">
          <Button variant="outline" className="hidden sm:inline-flex">PEDIR ORÇAMENTO</Button>
          <Button variant="ghost" className="lg:hidden ml-2" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-lg py-4 px-4">
          {navigationItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-2 px-4 text-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="mt-4 px-4  sm:hidden">
            <Button variant="outline" className="w-full">PEDIR ORÇAMENTO</Button>
          </div>
        </div>
      )}
    </header>
  );
}