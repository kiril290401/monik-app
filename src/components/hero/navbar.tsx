"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { navbarMenu, socialMediaMenu, tel } from "@/types/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div
      className={`fixed w-full top-0 left-0 z-50 text-white/50 transition-shadow duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-black/50 backdrop-blur-md border-b border-white/20 shadow-xl"
          : "bg-transparent"
      }`}
    >
        {/* Navbar */}
        <div className="container lg:flex items-center justify-between p-5">
          {/* LOGO AND VERTICAL MENU */}
          <div className="flex justify-between items-center">
            <Link href={"/"} className="">
              <Image
                src={"/logo-monic.png"}
                width={110}
                height={114}
                alt="logo"
              />
            </Link>

            <div className="flex lg:hidden">
              <button
                onClick={() => {
                  setMenuOpen(true);
                }}
              >
                <HiOutlineBars3BottomLeft className="text-[32px]" />
              </button>
            </div>
          </div>

          {/* ME HORIZONTAL MENU*/}
          <div className="hidden lg:flex ">
            <ul className="flex gap-7">
              {navbarMenu.map((item) => (
                <li key={item.url}>
                  <div className="relative">
                    <Link
                      href={item.url}
                      className="hover:text-principal-hover transition-all duration-300"
                    >
                      {item.title}
                    </Link>
                    <div
                      className={`absolute transition-all duration-500 ${
                        item.url !== pathname
                          ? "w-0 opacity-0"
                          : "w-7 opacity-100"
                      } h-1 bg-color-principal/60 mt-3`}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="hidden lg:flex">
            <a href={tel} type="tel">
              +359 878505988
            </a>
          </div>
        </div>
      </div>
      {menuOpen && (
        <motion.div
          className="fixed h-screen inset-0 bg-black/50 backdrop-blur-md z-[100]"
          initial={{ opacity: 0, y: -2000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2000 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="container relative h-full"
          >
            {/* Botón de cierre arriba a la derecha del container */}
            <div className="absolute top-5 right-5">
              <button onClick={() => setMenuOpen(false)}>
                <IoMdClose className="text-[32px] text-white/50" />
              </button>
            </div>

            {/* Menú vertical centrado */}
            <div className="flex flex-col justify-center items-center h-full">
              <ul className="flex flex-col items-center gap-10 text-center text-white/50">
                {navbarMenu.map((item) => (
                  <li key={item.url}>
                    <div className="relative">
                      <Link
                        href={item.url}
                        className="text-xl hover:text-color-principal transition-all duration-300"
                        
                      >
                        {item.title}
                      </Link>
                      <div
                        className={`absolute transition-all duration-500 ${
                          item.url !== pathname
                            ? "w-0 opacity-0"
                            : "w-7 opacity-100"
                        } h-1 bg-color-principal/60 mt-3`}
                      />
                    </div>
                  </li>
                ))}
                <li>
                  <div className="flex gap-5 font-light items-center justify-center text-[25px] mt-10">
                    {socialMediaMenu.map((item) => (
                      <Link
                        href={item.href}
                        key={item.id}
                        className="p-4 rounded-full hover:bg-gris-oscuro transition-all duration-300"
                      >
                        <item.icon />
                      </Link>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
