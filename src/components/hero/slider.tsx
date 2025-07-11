"use client";
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const sliderMenu = [
  { id: 1, image: "/hero-secador.png" },
  { id: 2, image: "/hero-tijeras.png" },
  { id: 3, image: "/hero-peine.png" },
];

const Slider = () => {
  const [items, setItems] = useState(sliderMenu);

  const rotateSlider = () => {
    const newItems = [...items.slice(1), items[0]];
    setItems(newItems);
  };

  return (
    <div className="bg-gris-normal w-full h-30 md:h-40 flex justify-stretch items-center overflow-hidden ">
      {/* Primer elemento */}
      <div
        key={items[0].id}
        className="bg-gradient-to-br from-gris-normal/90 via-[#575454a8] to-gris-oscuro w-1/3 h-full flex justify-end items-center relative"
      >
        <div className="absolute top-2 left-2 md:top-5 md:left-5">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gris-normal/90 via-[#2c2b2ba8] to-gris-oscuro/40 bg-clip-text text-transparent">
            01
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 p-4 xl:w-[140px] xl:mr-8"
        >
          <Image src={items[0].image} alt="slider" width={120} height={100} />
        </motion.div>
      </div>

      {/* Segundo elemento */}
      <div
        key={items[1].id}
        className="bg-gradient-to-br from-gris-normal/90 via-[#575454a8] to-gris-oscuro w-1/3 h-full flex justify-end items-center relative"
      >
        <div className="absolute top-2 left-2 md:top-5 md:left-5">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gris-normal/90 via-[#2c2b2ba8] to-gris-oscuro/40 bg-clip-text text-transparent">
            02
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 p-4 xl:w-[140px] xl:mr-8"
        >
          <Image src={items[1].image} alt="slider" width={120} height={100} />
        </motion.div>
      </div>

      {/* Botón entre el segundo y tercer elemento */}
      <button
        onClick={rotateSlider}
        className="bg-color-principal w-[60px] h-full text-white flex  justify-center items-center"
      >
        <FaPlay />
      </button>

      {/* Tercer elemento */}
      <div
        key={items[2].id}
        className="bg-gradient-to-br from-gris-normal/90 via-[#575454a8] to-gris-oscuro w-1/3 h-full flex justify-end items-center relative"
      >
        <div className="absolute top-2 left-2 md:top-5 md:left-5">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-gris-normal/90 via-[#2c2b2ba8] to-gris-oscuro/40 bg-clip-text text-transparent">
            03
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 p-4 xl:w-[140px] xl:mr-8"
        >
          <Image src={items[2].image} alt="slider" width={120} height={100} />
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
