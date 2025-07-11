"use client";

import Image from "next/image";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Galeria( {photos }: any) {

  return (
    <section className="px-4 py-10">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="masonry-column"
      >
        {photos.map((photo: any) => (
          <div key={photo._id} className="mb-4 rounded-lg overflow-hidden">
            <Image
              src={photo.imageUrl}
              alt={photo.alt || "Foto"}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Masonry>

      <style jsx>{`
        .masonry-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </section>
  );
}
