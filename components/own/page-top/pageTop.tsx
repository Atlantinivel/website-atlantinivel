
import { useState, useEffect } from "react";
import Image from "next/image";
import { ContactsQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";



export function PageTop(props: {
    data
    variables: object;
    query: string;
}) {
    const { data } = useTina(props);


    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            setWindowHeight(window.innerHeight);
        };

        // Set initial height
        updateHeight();

        // Add event listener
        window.addEventListener('resize', updateHeight);

        // Clean up
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (

        <div className="relative h-[70vh] w-full " style={{ position: 'relative', width: '100%' }}>

            <div className={`absolute w-full h-[70vh] bg-cover bg-center z-[-1] `}>
                <Image className="w-full h-full object-cover"
                    src={props.data.bannerImage}
                    data-tina-field={tinaField(data, 'bannerImage')}
                    alt={""}
                    width={1920}
                    height={0}
                    priority />
            </div>
            <div className={`absolute inset-0 bg-atlantiBlue opacity-50 w-[100vw] md:w-[45vw]  z-10 `}>
            </div>


            <div className="w-[100vw] md:w-[45vw] absolute inset-0 flex items-center justify-start font-roboto text-white z-20">
                <div className="p-8 m-2  ">
                    <h1 className="text-6xl font-bold text-white mb-4" data-tina-field={tinaField(data, 'bannerTitle')}>
                        {props.data.bannerTitle}
                    </h1>
                    <p className="text-white" data-tina-field={tinaField(data, 'bannerDesc')}>
                        {props.data.bannerDesc}
                    </p>
                </div>
            </div>

        </div>


    );
}