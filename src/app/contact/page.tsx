
import { socialMediaMenu, tel } from "@/types/data";
import Link from "next/link";

import React from "react";

export default async function Page() {
  return (
    <main className="my-20 container flex-col justify-center items-center">
      <div className="py-20">
        <h1 className="text-4xl md:text-5xl text-center uppercase font-extralight">
          Контакти
        </h1>
      </div>
      <div className="mt-0">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 text-center lg:text-left">
          {/* CONTACTOS */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
           <div className="flex flex-col gap-8 ">
            <div>
              <p className="font-semibold">
                Работно време:{" "}
                <span className="font-normal">
                  Понеделнин - Петър, 9:00 - 17:30
                </span>
              </p>
            </div>
            <p className="font-semibold">
              Телефон:{" "}
              <a
                href={tel}
                className="hover:text-color-principal transition font-normal"
              >
                +359 878505988
              </a>
            </p>
            <p className="font-semibold">
              Email:{" "}
              <a
                href="mailto:monikapeeva01@gmail.com"
                className="hover:text-color-principal transition font-normal"
              >
                monikapeeva01@gmail.com
              </a>
            </p>
            <p className="font-semibold">
              Адрес:{" "}
              <Link
                className="hover:text-color-principal transition font-normal"
                href={
                  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40a5b99547064a8f:0x148a470734512f6b?hl=bg"
                }
              >
                ул. „Свети Свети Кирил и Методий“ 73, 9200 Провадия, България
              </Link>
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-3 ">
              <p className="font-semibold">Социални мрежи: </p>
              <div className="flex justify-normal items-center gap-3">
                <Link
                  href={socialMediaMenu[0].href}
                  className="text-2xl hover:text-color-principal transition-all duration-150"
                >
                  {(() => {
                    const Icon = socialMediaMenu[0].icon;
                    return <Icon />;
                  })()}
                </Link>
                <Link
                  href={socialMediaMenu[1].href}
                  className="text-2xl hover:text-color-principal transition-all duration-150"
                >
                  {(() => {
                    const Icon = socialMediaMenu[1].icon;
                    return <Icon />;
                  })()}
                </Link>
              </div>
            </div>
          </div>
          </div>

          {/* MAPA */}
          <div className="w-full lg:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.012959082854!2d27.443387700000002!3d43.1736072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a5b99547064a8f%3A0x148a470734512f6b!2z0KTRgNC40LfRjNC-0YDRgdC60Lgg0YHQsNC70L7QvSAi0JzQvtC90LjQmiI!5e1!3m2!1sbg!2ses!4v1752230761685!5m2!1sbg!2ses"
              style={{ border: 0 }}
              className="w-full h-full rounded-3xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
