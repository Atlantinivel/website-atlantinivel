"use client"


import Image from "next/image";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

export function Footer(props: {
  
}) {

  return (
    <footer className='w-full mt-10 bg-white text-black font-roboto border-t-2 border-atlantiBlue'>
      <div className='container mx-auto px-12 pt-10 pb-16'>
        <div className='flex flex-col md:flex-row text-gray-600 text-[14px]'>
          <div className='md:w-1/4'>
            <Image
              className="relative place-content-center"
              src={"/logo/atlantinivel-logo-1.svg"}
              alt={""}
              width={1920}
              height={1080}
              priority
            />
          </div>
          <div className='flex-grow place-content-center '>
            <div className='flex flex-row-reverse'>
              <BsLinkedin className='w-8 h-8 mx-2 place-content-end' />
              <BsInstagram className='w-8 h-8 mx-2 place-content-end' />
              <BsFacebook className='w-8 h-8 mx-2 place-content-end' />
            </div>
          </div>
        </div>
      </div>



      <div className='w-1/2   container mx-auto px-14 pb-6 '>
        <div className='flex flex-col content-start md:flex-row justify-between text-atlantiBlue text-[16px] underline font-bold'>
          <div className='leading-relaxed '>
            <a href="https://atlantinivel.pt/wp-content/uploads/2018/11/Apresenta%C3%A7%C3%A3o.pdf">Apresentação</a>
          </div>
          <div className='leading-relaxed'>
            <a href="https://atlantinivel.pt/wp-content/uploads/2018/11/PortefolioAtlantinivel.pdf">Portfolio</a>
          </div>


          <div className='leading-relaxed'>
            <a href="https://atlantinivel.pt/contactos">Pedido de Orçamento</a>
          </div>

          <div className='leading-relaxed'>
            <a href="https://atlantinivel.pt/wp-content/uploads/2018/11/PortefolioAtlantinivel.pdf">Carreiras</a>
          </div>

        </div>
        
      </div>


      <div className='container mx-auto px-14'>
        <div className='flex flex-col md:flex-row gap-6 text-atlantiBlue text-[14px]'>
          <div className='leading-relaxed'>
            <p>Copyright © 2024 Atlântinível. All Rights Reserved.</p>
          </div>
          <div className='leading-relaxed'>
            <a className='mr-6 underline' href="https://atlantinivel.pt/privacidade">Politica de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}