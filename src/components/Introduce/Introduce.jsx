"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <>
      <div className=" mt-[100px] dark:text-gray-300 text-gray-600">
        <motion.div
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{
            duration: 1.3,
            type: "tween",
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          className=" mb-[20px] "
        >
          <div className="flex flex-col items-start gap-5">
            <h1 className="font-bold text-[18px] md:text-[26px] capitalize">
              Here's a brief
              <span className="text-[--main-color] ml-2">introduction</span> about me 🎨✨
            </h1>

            <p className="leading-[2] text-[18px] md:text-[19px] capitalize text-left">
              I’m <span className="font-bold text-[--main-color]">Mohamed Ayman</span>,  
              a passionate <span className="text-[--main-color] font-bold">Graphic Designer</span>  
              and <span className="text-[--main-color] font-bold">UI/UX Designer</span> with strong experience in  
              <span className="text-[--main-color] font-bold ml-1">HTML, CSS, and Tailwind CSS</span>.  
              I focus on creating clean, modern, and user-centered designs 🎯  
              and turning them into responsive, visually appealing interfaces 💻✨.
            </p>

          </div>
        </motion.div>

        <span className="block w-[200px] md:w-[400px] m-auto h-[5px] rounded-lg bg-[--main-color]"></span>

        <motion.div
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{
            duration: 1.3,
            type: "tween",
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          className="mt-[30px] text-gray-600 dark:text-gray-300"
        >
          <h1 className="md:text-[40px] text-[30px] text-center my-[13px] font-bold">
            My <span className="text-[--main-color]">Skills</span> 💡
          </h1>

          <div className="flex flex-col gap-6">
            {/* Graphic & UI/UX */}
            <ol className="relative after:absolute after:content-[''] md:after:w-[12px] after:w-[8px] md:after:h-[12px] after:h-[8px] after:rounded-full md:after:left-[-17px] ml-2 md:ml-1 after:left-[-13px] after:top-[12px] dark:after:bg-white after:bg-gray-600">
              <li>
                <h1 className="md:text-[25px] text-[20px] md:ml-2 ml-1 font-bold">
                  ➤ Graphic & UI/UX Design 🎨
                </h1>
                <ol className="mt-3 md:ml-[50px] ml-[25px] text-[18px] md:text-[20px]">
                  <li className="relative mb-3 after:absolute after:content-[''] md:after:w-[10px] after:w-[8px] md:after:h-[10px] after:h-[8px] after:rounded-full after:left-[-19px] md:after:top-[7px] after:top-[10px] after:border-[3px] dark:after:border-white after:border-gray-600">
                    <span className="text-[--main-color] mr-2 font-bold">
                      UI/UX:
                    </span>
                    Skilled in creating user-friendly and visually modern interfaces using  
                    design thinking and clean layouts.
                  </li>

                  <li className="relative mb-3 after:absolute after:content-[''] md:after:w-[10px] after:w-[8px] md:after:h-[10px] after:h-[8px] after:rounded-full after:left-[-19px] md:after:top-[7px] after:top-[10px] after:border-[3px] dark:after:border-white after:border-gray-600">
                    <span className="font-bold mr-2 text-[--main-color]">
                      Graphic Design:
                    </span>
                    Strong experience in creating branding, posters, social media designs 🎯.
                  </li>
                </ol>
              </li>
            </ol>

            {/* Front-End Skills */}
            <ol className="relative after:absolute after:content-[''] md:after:w-[12px] after:w-[8px] md:after:h-[12px] after:h-[8px] after:rounded-full md:after:left-[-17px] ml-2 md:ml-1 after:left-[-13px] after:top-[12px] dark:after:bg-white after:bg-gray-600">
              <li>
                <h1 className="md:text-[25px] text-[20px] md:ml-2 ml-1 font-bold">
                  ➤ Front-End Skills 💻
                </h1>
                <ol className="mt-3 md:ml-[50px] ml-[25px] text-[18px] md:text-[20px]">

                  <li className="relative mb-3 after:absolute after:content-[''] md:after:w-[10px] after:w-[8px] md:after:h-[10px] after:h-[8px] after:rounded-full after:left-[-19px] md:after:top-[7px] after:top-[10px] after:border-[3px] dark:after:border-white after:border-gray-600">
                    <span className="font-bold mr-2 text-[--main-color]">
                      HTML / CSS:
                    </span>
                    Strong foundation in building clean, semantic, and responsive layouts.
                  </li>

                  <li className="relative mb-3 after:absolute after:content-[''] md:after:w-[10px] after:w-[8px] md:after:h-[10px] after:h-[8px] after:rounded-full after:left-[-19px] md:after:top-[7px] after:top-[10px] after:border-[3px] dark:after:border-white after:border-gray-600">
                    <span className="font-bold mr-2 text-[--main-color]">
                      Tailwind CSS:
                    </span>
                    Excellent at building fast, modern, and highly responsive designs ⚡.
                  </li>

                </ol>
              </li>
            </ol>

          </div>
        </motion.div>

        {/* CONTACT SECTION */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{
            duration: 1.3,
            type: "tween",
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          className="flex md:mb-[50px] mb-[30px] flex-col justify-center mx-auto md:mt-[20px] mt-[10px] text-center items-center gap-[30px]"
        >
          <h1 className="md:text-[40px] text-[25px] capitalize font-bold">
            Reach <span className="font-bold text-[--main-color]">me</span> via 📩
          </h1>

          <p className="md:text-[22px] text-[19px] capitalize">
            Don't hesitate to <span className="text-[--main-color] font-bold">reach</span> out to me 😊✨
          </p>

          <div className="flex items-center gap-[7px] md:gap-[10px]">

            <Link
              className="w-[50px] h-[50px] rounded-full border group hover:bg-[#4267B2] bg-white flex items-center justify-center"
              href="https://www.facebook.com/share/1BWBovbvbW/"
            >
              <FaFacebook
                className="cursor-pointer opacity-[0.8] transition-all group-hover:text-white text-[#4267B2] hover:opacity-[1]"
                size={32}
              />
            </Link>

            <Link
              className="w-[50px] h-[50px] rounded-full group border hover:bg-[#c13584] flex items-center justify-center"
              href="https://www.instagram.com/moh_amed_ayman_223"
            >
              <FaInstagram
                className="cursor-pointer text-[#c13584] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]"
                size={32}
              />
            </Link>

            <Link
              href="https://www.linkedin.com"
              className="w-[50px] h-[50px] rounded-full border group hover:bg-[#0077b5] bg-white flex items-center justify-center"
            >
              <FaLinkedin
                className="cursor-pointer text-[#0077b5] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]"
                size={32}
              />
            </Link>

            <Link
              href="https://t.me"
              className="w-[50px] h-[50px] rounded-full border group hover:bg-[#0088cc] bg-white flex items-center justify-center"
            >
              <FaTelegramPlane
                className="cursor-pointer text-[#0088cc] group-hover:text-white transition-colors duration-300 opacity-[0.8] hover:opacity-[1]"
                size={32}
              />
            </Link>

          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Introduce;
