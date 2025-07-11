import Card from "@/components/services/card";
import { getServices } from "@/lib/getPhotos";
import { ServiceType } from "@/types/types";
import React from "react";

export default async function Page () {
  const data : ServiceType[] = await getServices();

  return (
    <main className="my-20 container flex-col justify-center items-center">
      <div className="py-20">
        <h1 className="text-4xl md:text-5xl text-center uppercase font-extralight">
          Нашите услуги
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {data.map((item : ServiceType) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
    </main>
  );
};
