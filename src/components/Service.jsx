"use client";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/contants/motion";
import TitleText from "./TitleText";
import styles from "@/contants/styles";

const Service = ({ service }) => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-800 to-black text-white py-12 overflow-hidden">
      {/* Sparkling effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('/path-to-sparkling-effect.svg')] bg-no-repeat bg-cover opacity-20"></div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} grid grid-cols-1 mt-10 mx-auto gap-5 relative z-20`}
      >
        <TitleText title={<span className="text-gray-100 font-extrabold">{service.title}</span>} />
        <motion.div
          variants={service.variant1}
          className="flex justify-center items-center flex-col"
        >
          <p className="font-normal text-sm lg:text-lg text-gray-300 text-center leading-6 w-full max-w-7xl mb-5">
            {service.text}
          </p>
          <div className="w-11/12 lg:w-10/12">
            <img
              src={service.img}
              className="w-full h-full object-contain rounded-lg"
              alt=""
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
