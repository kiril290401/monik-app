import React from "react";

import Galeria from "../ui/galeria";
import { getHomePhotos } from "@/lib/getPhotos";

export default async function Galery () {
    const data = await getHomePhotos();
  return (
    <section className="container mt-[200px] text-center md:text-left">
      <div className="">
        <div className="relative">
          <div className="absolute bg-color-principal/50 rounded-full -z-10 p-10 left-40  lg:p-20 lg:-left-4 -top-5 "></div>
          <h2 className="uppercase  font-extralight text-4xl  md:5xl lg:text-6xl">
            Галерия
          </h2>
        </div>
      </div>
      <div className="mt-20">
        <Galeria photos = {data}/>
      </div>
    
    </section>
  );
};
