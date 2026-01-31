"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFilePdf, FaRegUser } from "react-icons/fa";
import { IoIosHome, IoMdMail } from "react-icons/io";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import contact from "../../Images/Contact us.json";

// Dynamic imports (client-only)
const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
const Form = dynamic(() => import("./Form"), { ssr: false });

const ContactPage = () => {
  return (
    <div className="relative w-[95%] mx-auto mt-[80px] md:mt-[120px] md:mb-[50px] mb-[40px]">

      {/* Title */}
      <div className="text-center p-4 mb-6">
        <h1 className="text-2xl font-bold text-[--main-color] mb-2">
          Get in Touch with Mohamed Ayman
        </h1>
        <p className="text-gray-600 leading-[1.7] dark:text-gray-300">
          Feel free to reach out anytime! Whether you need professional graphic design,
          UI/UX services, or have collaboration ideas — Mohamed is ready to help.
        </p>
      </div>

      {/* Floating Navbar */}
      <div className="fixed z-[9999] border-2 border-[--main-color] rounded-full px-3 h-[250px] flex flex-col gap-3 items-center justify-center left-4 md:top-[40%] top-[30%] text-[--main-color]">
        <Link href="/"><IoIosHome size={36} /></Link>
        <Link href="/About"><FaRegUser size={36} /></Link>
        <Link href="/Contact"><IoMdMail size={36} /></Link>
        <Link href="/Projects"><HiMiniPresentationChartLine size={36} /></Link>
        <Link href="/Resume"><FaFilePdf size={36} /></Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* Lottie Animation */}
        <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1.3 }}>
          <Lottie animationData={contact} loop play className="w-full md:w-[450px] md:h-[350px]" />
        </motion.div>

        {/* Contact Form */}
        <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} transition={{ duration: 1.3 }}>
          <Form />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
