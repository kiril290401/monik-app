import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navbarMenu, tel } from "@/types/data";

const Footer = () => {
  return (
    <footer className="bg-gris-normal text-white/50 px-6 md:px-20 py-10 pt-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LOGO + COPYRIGHT */}
        <Link href={"/"} className="m-auto">
          <Image src={"/logo-monic.png"} width={110} height={114} alt="logo" />
        </Link>

        {/* MENÚ */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-white font-semibold mb-2">Меню</p>
          {navbarMenu.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="hover:text-color-principal transition"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* CONTACTO */}
        <div className="flex flex-col gap-2 text-sm">
          <p className="text-white font-semibold mb-2">Контакти</p>
          <p>
            Телефон:{" "}
            <a
              href={tel}
              className="hover:text-color-principal transition"
            >
              +359 878505988
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:monikapeeva01@gmail.com"
              className="hover:text-color-principal transition"
            >
              monikapeeva01@gmail.com
            </a>
          </p>
          <p>
            Адрес:{" "}
            <Link
              className="hover:text-color-principal transition"
              href={
                "https://www.google.com/maps/place//data=!4m2!3m1!1s0x40a5b99547064a8f:0x148a470734512f6b?hl=bg"
              }
            >
              ул. „Свети Свети Кирил и Методий“ 73, 9200 Провадия, България
            </Link>
          </p>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-xs text-center">
        Създадено с ❤️ от Кирил Кръстев
      </div>
    </footer>
  );
};

export default Footer;
