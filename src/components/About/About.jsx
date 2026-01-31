"use client";
import React from "react";
import aboutLottie from "../../Images/designing work.json";
import about from "../../Images/about.json";
import ProfisSkills from "../ProfisSkills/ProfisSkills";
import Services from "../Services/Services";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });
const About = () => {
  return (
    <>
      <div className="w-[95%] dark:bg-[#171717] mt-[50px] pt-[100px] m-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 md:items-start">
          <motion.div
            initial={{ scale: 0.7, opacity: 0.5 }}
            transition={{ duration: 1.3, type: "tween" }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="flex flex-col w-full text-gray-600 dark:text-gray-300 xl:w-[60%] gap-2"
          >
            <h1 className="md:text-[30px] text-[20px] flex items-center capitalize font-bold">
              Here's a quick introduction about me
              <Lottie
                animationData={about}
                className="md:w-[100px] w-[50px] h-[50px] md:h-[100px] max-w-full"
                loop={true}
                play
                style={{ width: 150, height: 150 }}
              />
            </h1>
            <p className="text-[21px] leading-[2] capitalize">
              "Hi, I'm{" "}
              <span className="text-[--main-color] font-bold">
                Mohamed Ayman
              </span>
              , a professional Graphic Designer and Front-End Developer. I
              specialize in HTML, CSS, Tailwind CSS, and UI/UX design. I create
              visually appealing and user-friendly websites. You can contact me
              at <span className="font-bold">01140293916</span> or via email:{" "}
              <span className="font-bold">ssmohamedayman643@gmail.com</span>.
              Follow me on Instagram:{" "}
              <a
                href="https://www.instagram.com/moh_amed_ayman_223?igsh=MXJnMnZta21ocDlsZw=="
                target="_blank"
                className="text-[--main-color] underline"
              >
                Instagram
              </a>{" "}
              and Facebook:{" "}
              <a
                href="https://www.facebook.com/share/1BWBovbvbW/"
                target="_blank"
                className="text-[--main-color] underline"
              >
                Facebook
              </a>
              ."
            </p>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ scale: 0.7, opacity: 0.5 }}
            transition={{ duration: 1.3, type: "tween" }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <Lottie
              animationData={aboutLottie}
              className="max-w-full w-[350px] md:w-[400px]"
              loop={true}
              play
            />
          </motion.div>
        </div>
        <p className="m-auto text-[25px] text-gray-600 dark:text-gray-300 capitalize w-full text-center mt-[25px]">
          👉 Creativity is like code. When you have to explain it, it’s bad. I
          design clean, simple, and user-friendly interfaces that speak for
          themselves.
        </p>
        <ProfisSkills />
      </div>
      <Services />
    </>
  );
};

export default About;
