
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    // <div className="min-w-screen min-h-screen bg-gradient-to-tr from-[#f7c17a7c] via-[#ffffff] to-[#0000009d]">
    <div className="min-h-screen container mx-auto px-4  my-20 xl:my-0 flex ">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="relative md:w-1/2 my-10">
            <div className="absolute bg-color-principal/50 rounded-full -z-10 p-10 left-1/3 md:left-7 lg:p-20 lg:-left-4 -top-5 md:-top-10 "></div>
            <h2 className="uppercase  font-extralight text-4xl  md:5xl lg:text-6xl">
              За нас
            </h2>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-700">
            Салон <strong>МониК</strong> е мястото, където стилът среща
            професионализма. С дългогодишен опит и индивидуален подход към всеки
            клиент, ние създаваме прически, които подчертават вашата красота и
            самочувствие. Работим с висококачествени продукти и следим
            последните тенденции, за да ви предложим най-доброто. Добре дошли в
            свят на елегантност и уют!
          </p>
        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/about-us/bg-about-us.jpg"
            width={1000}
            height={1000}
            alt="bg about us"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Page;
