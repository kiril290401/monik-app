import React from "react";

import Link from "next/link";
import Image from "next/image";
import { socialMediaMenu, tel } from "@/types/data";
import Slider from "./slider";

const Hero = () => {
  return (
    <header className="min-h-screen w-full bg-gris-oscuro text-white font-extralight flex">
      {/* Lateal bar menu */}
      <div className="min-h-screen w-18 py-5 px-2 bg-gris-normal hidden lg:flex flex-col items-center justify-center">
        <div className="flex flex-col gap-12 font-light justify-between items-center text-[18px]">
          {socialMediaMenu.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              className="p-4 rounded-full hover:bg-gris-oscuro transition-all duration-300"
            >
              <item.icon />
            </Link>
          ))}
        </div>
      </div>
      {/* Hero section */}
      <div className="w-full min-h-screen relative flex sm:justify-center sm:items-center">
        {/* Fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-hero.png"
            alt="bg hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* CONTENIDO */}
        <div className="z-40 container md:w-4/6 text-center md:text-left flex flex-col justify-center items-center md:items-start gap-10 md:ml-16 mb-[300px] md:mb-0">
          <div className="uppercase">
            <h1 className="text-5xl md:text-6xl  lg:text-7xl xl:text-8xl relative">
              <div className="absolute bg-color-principal/50 rounded-full -z-10 p-10 left-7  lg:p-20 lg:left-0 ">

              </div>
              Фризьорски<br/> салон <span className="text-color-principal font-normal normal-case">МониК</span>
            </h1> 
          </div>
          <div>
            <p className="text-sm ">Открий своето ново Аз с нашите професионални услуги по подстригване, боядисване и терапии за коса. Запази час още днес!</p>
          </div>
          <div>
            <Link className="flex justify-center items-center bg-white hover:bg-white/90 transition-colors duration-200 text-black w-40 h-10" href={tel}>
              Запази час
            </Link>
          </div>
        </div>

        <div className="absolute right-0 -bottom-10 w-5/6 md:w-4/6 lg:w-1/2 flex justify-end z-30">
          <Slider />
        </div>
        <div className="absolute bottom-0 md:right-0 w-full flex justify-center md:justify-end">
          <div className="w-[400px] md:w-[490px] lg:w-[500px]  xl:w-[600px]">
            <Image
              src={"/girl-hero.png"}
              className=""
              width={700}
              height={700}
              alt="girl hero image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
