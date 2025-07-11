import Galeria from "@/components/ui/galeria";
import { getGalleryPhotos } from "@/lib/getPhotos";
import React from "react";

export default async function Page() {
  const data = await getGalleryPhotos();

  return (
    <main className="my-20 container flex-col justify-center items-center">
      <div className="py-20">
        <h1 className="text-4xl md:text-5xl text-center uppercase font-extralight">
          Галерия
        </h1>
      </div>
      <div className="mt-0">
        <Galeria photos={data} />
      </div>
    </main>
  );
}
