
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";


const Services = () => {
  return (
    <section className="mt-[100px] flex flex-col gap-20 relative">
      {/* BACKGROUND */}
      <div className="h-full w-3/5 bg-[#fdf6f0] absolute -z-20"></div>
      <div className="absolute h-full w-full -z-10 max-w-[1500px] right-0">
        <Image
          src={"/hoja-services-bg.png"}
          alt="hoja background"
          fill
          className="object-cover"
        />
      </div>
      <div className="my-20 container">
        <h2 className="uppercase text-center  font-extralight text-4xl  md:5xl lg:text-6xl">
          Нашите услуги
        </h2>
        <div className="flex gap-5 lg:gap-10 my-20">
          {/* LEFT */}
          <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 w-1/2">
            <Link href={"/services"} className="hidden md:flex flex-col justify-center items-center gap-2 w-full max-w-[300px] aspect-square border border-gray-400 hover:border-color-principal hover:border-4 rounded-full  text-color-principal/90 font-extralight transition-all duration-300">
              <p className="text-sm text-center px-4">
                Качествени услуги на ваше разположение
              </p>
              <p className="text-5xl md:text-6xl lg:text-7xl">12</p>
              <div className="flex justify-center items-center gap-2 hover:gap-4 transition-all duration-200">
                <p>Към услуги</p>
                <LiaArrowRightSolid />
              </div>
            </Link>
            <Link
              href={"/services"}
              className="block md:hidden border border-black rounded-full py-2 px-4 cursor-pointer"
            >
              <div className="flex justify-center items-center gap-2 hover:gap-4 transition-all duration-200">
                <p className="text-sm">Към услуги</p>
                <LiaArrowRightSolid />
              </div>
            </Link>
            <div className="">
              <Image
                src={"/services/secado-pelo.jpg"}
                alt="hoja background"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col justify-center items-center gap-5 lg:gap-10 w-1/2">
            <div className="relative flex">
              <Image
                src={"/services/corte-pelo.jpg"}
                alt="hoja background"
                width={1000}
                height={1000}
                className="object-cover"
              />
            </div>
            <div className="">
              <Image
                src={"/services/pintando-pelo.jpg"}
                alt="hoja background"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
