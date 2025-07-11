import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  data: {
    title: string;
    description: {
      small: string;
      large: string;
    };
    slug: string;
    imageUrl: string;
  };
};

const Card = ({ data }: CardProps) => {
  const { title, description, slug, imageUrl } = data;
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white">
      {/* Image */}
      <div className="h-56 w-full relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 min-h-48 text-center flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description.small}</p>
        <Link href={`/services/${slug}`} className="text-blue-600 font-medium hover:underline">
          Научи повече
        </Link>
      </div>
    </div>
  );
};

export default Card;
