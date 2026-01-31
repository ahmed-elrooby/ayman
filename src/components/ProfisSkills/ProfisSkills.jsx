"use client";
import Image from "next/image";
import React from "react";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const ProfisSkills = () => {
  return (
    <>
      <div className="mt-[50px] text-black dark:text-white m-auto">
        <span className="block w-[200px] m-auto h-[3px] bg-[--main-color]"></span>

        {/* ===== Professional Proficiencies ===== */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{ duration: 1.3, type: "tween" }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center mt-[10px] gap-7"
        >
          <h1 className="text-[20px] md:text-[40px] text-[--main-color] font-bold">
            Professional <span className="text-[--main-color]">Proficiencies</span>
          </h1>

          <div className="flex gap-[30px] items-center justify-center flex-wrap">
            {/* Photoshop */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">🎨</span>
              <svg width="90" height="90" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="20" fill="#001E36" />
                <text x="50%" y="55%" textAnchor="middle" fill="#31A8FF" fontSize="55" fontWeight="bold" fontFamily="Arial">
                  Ps
                </text>
              </svg>
            </div>

            {/* Illustrator */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">✏️</span>
              <svg width="90" height="90" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="20" fill="#330000" />
                <text x="50%" y="55%" textAnchor="middle" fill="#FF9A00" fontSize="55" fontWeight="bold" fontFamily="Arial">
                  Ai
                </text>
              </svg>
            </div>

            {/* Premiere Pro */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">🎬</span>
              <svg width="90" height="90" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="20" fill="#1A0033" />
                <text x="50%" y="55%" textAnchor="middle" fill="#D16FFF" fontSize="55" fontWeight="bold">
                  Pr
                </text>
              </svg>
            </div>

            {/* After Effects */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">✨</span>
              <svg width="90" height="90" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="20" fill="#16001A" />
                <text x="50%" y="55%" textAnchor="middle" fill="#D291FF" fontSize="55" fontWeight="bold">
                  Ae
                </text>
              </svg>
            </div>

            {/* Figma */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">🎛️</span>
              <svg width="80" height="120" viewBox="0 0 128 128">
                <circle cx="64" cy="32" r="22" fill="#F24E1E" />
                <circle cx="64" cy="64" r="22" fill="#A259FF" />
                <circle cx="64" cy="96" r="22" fill="#1ABCFE" />
                <circle cx="32" cy="32" r="22" fill="#FF7262" />
                <circle cx="32" cy="64" r="22" fill="#0ACF83" />
              </svg>
            </div>

            {/* Canva */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">🖼️</span>
              <svg width="90" height="90" viewBox="0 0 128 128">
                <rect width="128" height="128" rx="25" fill="#00C4CC" />
                <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold">
                  Canva
                </text>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ===== Tools Section ===== */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0.5 }}
          transition={{ duration: 1.3, type: "tween" }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center mt-5"
        >
          <h1 className="md:text-[40px] text-[25px] mb-5 font-bold">
            My Essential <span className="text-[--main-color]">Tools</span>
          </h1>

          <div className="flex gap-[30px] items-center justify-center flex-wrap">
            {/* VS Code */}
            <div className="border w-full border-[--main-color] transition-all hover:bg-[--main-color] group flex flex-col items-center justify-center md:w-[200px] h-[200px] rounded-lg">
              <span className="text-3xl">💻</span>
              <VscVscode size={140} className="text-[#007ACC]" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ProfisSkills;
