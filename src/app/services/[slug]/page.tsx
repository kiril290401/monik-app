import { getServiceBySlug } from "@/lib/getPhotos";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LiaArrowLeftSolid } from "react-icons/lia";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <section className="container min-h-screen flex justify-center items-center my-32 md:my-0">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-4">
          <Link
            href={"/services"}
            className="flex justify-start items-center gap-2"
          >
            <LiaArrowLeftSolid />
            <p>Към услуги</p>
          </Link>
          <div>
            <h1 className="text-5xl font-extralight mb-6">{service.title}</h1>
          </div>

          <p className="text-lg mb-6">{service.description.large}</p>
        </div>

        <Image
          src={service.imageUrl}
          alt={service.title}
          width={1000}
          height={1000}
          className="w-full max-w-xl rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
