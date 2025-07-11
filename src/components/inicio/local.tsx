import React from "react";
import Image from "next/image";

const Local = () => {
  return (
    <section className="container mt-[200px] text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between gap-20">
        <div className="relative md:w-1/2">
          <div className="absolute bg-color-principal/50 rounded-full -z-10 p-10 left-7  lg:p-20 lg:-left-4 -top-5 "></div>
          <h2 className="uppercase  font-extralight text-4xl  md:5xl lg:text-6xl">
            Атмосфера в салона
          </h2>
        </div>
        <div className="text-sm md:w-1/2">
          В нашия салон създаваме топла и приветлива атмосфера, в която всеки
          клиент се чувства специален и комфортен. Комбинацията от модерен
          дизайн, приятна музика и внимателно отношение прави престоя ви при нас
          истинско удоволствие. Нашият екип се грижи не само за вашата визия, но
          и за спокойствието и доброто ви настроение.
        </div>
      </div>
      {/* GALERY STORE PHOTOS PC */}
      <div></div>
      {/* GALERY STORE PHOTOS MOBILE */}
      <div className="grid grid-cols-10 grid-rows-10 gap-10  mt-20 w-full h-[500px] lg:h-[700px] xl:h-[1000px]">
        <div className="relative  col-span-4 row-span-4">
          <Image
            src="/local-image/img2.jpg"
            alt="gallery img 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative col-span-6 row-span-4">
          <Image
            src="/local-image/img1.jpg"
            alt="gallery img 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative  col-span-6 row-span-4">
          <Image
            src="/local-image/img3.jpg"
            alt="gallery img 3"
            fill
            className="object-cover"
          />
        </div>
        <div className=" relative  col-span-4 row-span-4">
          <Image
            src="/local-image/img4.jpg"
            alt="gallery img 4"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Local;
