// "use client"


// import Image from "next/image";
// import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

// export function Footer(props: {

// }) {

//   return (
//     <footer className='w-full mt-10 bg-white text-black font-roboto border-t-2 border-atlantiBlue'>
//       <div className='container mx-auto px-12 pt-10 pb-16'>
//         <div className='flex flex-col md:flex-row text-gray-600 text-[14px]'>
//           <div className='md:w-1/4'>
//             <Image
//               className="relative place-content-center"
//               src={"/logo/atlantinivel-logo-1.svg"}
//               alt={""}
//               width={1920}
//               height={1080}
//               priority
//             />
//           </div>
//           <div className='flex-grow place-content-center '>
//             <div className='flex flex-row-reverse'>
//               <BsLinkedin className='w-8 h-8 mx-2 place-content-end' />
//               <BsInstagram className='w-8 h-8 mx-2 place-content-end' />
//               <BsFacebook className='w-8 h-8 mx-2 place-content-end' />
//             </div>
//           </div>
//         </div>
//       </div>



//       <div className='w-1/2   container mx-auto px-14 pb-6 '>
//         <div className='flex flex-col content-start md:flex-row justify-between text-atlantiBlue text-[16px] underline font-bold'>
//           <div className='leading-relaxed '>
//             <a href="https://atlantinivel.pt/wp-content/uploads/2018/11/Apresenta%C3%A7%C3%A3o.pdf">Apresentação</a>
//           </div>
//           <div className='leading-relaxed'>
//             <a href="https://atlantinivel.pt/wp-content/uploads/2018/11/PortefolioAtlantinivel.pdf">Portfolio</a>
//           </div>


//           <div className='leading-relaxed'>
//             <a href="https://atlantinivel.pt/contactos">Pedido de Orçamento</a>
//           </div>

//           <div className='leading-relaxed'>
//             <a href="https://atlantinivel.pt/wp-content/uploads/2018/11/PortefolioAtlantinivel.pdf">Carreiras</a>
//           </div>

//         </div>

//       </div>


//       <div className='container mx-auto px-14'>
//         <div className='flex flex-col md:flex-row gap-6 text-atlantiBlue text-[14px]'>
//           <div className='leading-relaxed'>
//             <p>Copyright © 2024 Atlântinível. All Rights Reserved.</p>
//           </div>
//           <div className='leading-relaxed'>
//             <a className='mr-6 underline' href="https://atlantinivel.pt/privacidade">Politica de Privacidade</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Empresa", href: "/company" },
    { title: "Serviços", href: "/services" },
    { title: "Portfólio", href: "/portfolio" },
    { title: "Notícias", href: "/posts" },
    { title: "Carreiras", href: "/careers" },
    { title: "Contactos", href: "/contacts" },
  ];

  return (
    <footer className="w-full py-10 bg-atlantiBlue text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col items-baseline ">
              <Image
                className="h-11 w-auto"
                src="/logo/atlantinivel-logo-white-1.svg"
                alt="AtlantiNivel logo"
                width={40}
                height={44}
              />

              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Soluções de engenharia e construção de excelência.
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Rua Alto da Ribeira, 570</p>
                <p>Campo, Valongo</p>
                <p>4440-104</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="https://www.google.com/maps/place/Atl%C3%A2ntinivel+-+Engenharia+e+Constru%C3%A7%C3%A3o,+Lda./@41.1780676,-8.4505668,17z/data=!4m6!3m5!1s0xd2489e6a122f20d:0xa560c5d8a62886ac!8m2!3d41.1780134!4d-8.450508!16s%2Fg%2F11l5r014wn?entry=tts" target="_blank">VER MAPA</Link>

              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="flex text-base gap-1 flex-col items-start">
            </div>
            <div className="flex text-base gap-1 flex-col items-start">
              <h3 className="text-xl font-semibold mb-4">Navegação</h3>
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-background/75 hover:text-background"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex text-base gap-1 flex-col items-start">
              <h3 className="text-xl font-semibold mb-4">Contactos</h3>
              <a href="tel:+351224151167" className="text-background/75 hover:text-background">+351 224 151 167</a>
              <a href="mailto:geral@atlantinivel.pt" className="text-background/75 hover:text-background">geral@atlantinivel.pt</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-background/20 text-center text-background/75">
          <p>&copy; {new Date().getFullYear()} Atlântinível. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};