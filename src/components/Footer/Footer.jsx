"use client"
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className='w-[90%] relative z-[222] my-4 m-auto'>
            <motion.div
                initial={{ scale: 0.5 }}
                transition={{ duration: 1.3, type: "tween" }}
                whileInView={{ scale: 1 }}
                className='flex flex-wrap justify-around items-center text-center md:items-end mb-4 md:mb-[20px] gap-2 md:gap-[40px]'
            >
                <div>
                    <h1 className='md:text-[22px] text-[19px] dark:text-white text-gray-800 capitalize'>
                        Copyright © 2024 <span className='font-bold text-[--main-color]'>Mohamed Ayman</span>. All Rights Reserved 🎨💻
                    </h1>
                </div>

                <div className='flex items-center gap-1'>
                    <div className='flex flex-col items-center gap-1 group'>
                        <div className='bg-[#3b5999] px-2 py-1 text-white font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-100 rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#3b5999] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                            Facebook 📘
                        </div>
                        <Link href="https://www.facebook.com/mohamed.ayman.profile" className='w-[40px] h-[40px] rounded-full border bg-white flex items-center justify-center'>
                            <FaFacebook className="cursor-pointer opacity-80 text-[#4267B2] transition-all hover:opacity-100" size={32} />
                        </Link>
                    </div>

                    {/* Instagram */}
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='bg-[#e1306c] text-white px-2 py-1 font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-100 rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#e1306c] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                            Instagram 📸
                        </div>
                        <Link href="https://www.instagram.com/mohamedayman" className='w-[40px] h-[40px] rounded-full border bg-[#c13584] flex items-center justify-center'>
                            <FaInstagram className="cursor-pointer opacity-80 transition-colors hover:opacity-100" size={32} />
                        </Link>
                    </div>

                    {/* LinkedIn */}
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='bg-[#0077b5] text-white px-2 py-1 font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-100 rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#0077b5] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                            LinkedIn 💼
                        </div>
                        <Link href="https://www.linkedin.com/in/mohamed-ayman" className='w-[40px] h-[40px] rounded-full border bg-white flex items-center justify-center'>
                            <FaLinkedin className="cursor-pointer opacity-80 text-[#0077b5] transition-all hover:opacity-100" size={32} />
                        </Link>
                    </div>

                    {/* Telegram */}
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='bg-[#0088CC] text-white px-2 py-1 font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-100 rounded-xl relative after:absolute after:content-[""] after:w-[12px] after:h-[12px] after:bg-[#0088CC] after:bottom-[-6px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                            Telegram ✈️
                        </div>
                        <Link href="https://t.me/mohamedayman" className='w-[40px] h-[40px] rounded-full border bg-white flex items-center justify-center'>
                            <FaTelegramPlane className="cursor-pointer opacity-80 text-[#0088CC] transition-all hover:opacity-100" size={32} />
                        </Link>
                    </div>

                    {/* Github */}
                    <div className='flex flex-col items-center gap-2 group'>
                        <div className='bg-[#333] text-[--main-color] px-2 py-1 font-bold capitalize opacity-0 pointer-events-none transition-all group-hover:opacity-100 rounded-xl relative after:absolute after:content-[""] after:w-[15px] after:h-[15px] after:bg-[#333] after:bottom-[-7px] after:rotate-[45deg] after:left-[50%] after:transform after:-translate-x-1/2'>
                            Github 🐙
                        </div>
                        <Link href="https://github.com/mohamedayman" className='w-[40px] h-[40px] rounded-full border hover:bg-[#333] flex items-center justify-center'>
                            <FaGithub className="cursor-pointer transition-all opacity-80 text-gray-800 dark:text-white hover:text-[--main-color] hover:opacity-100" size={32} />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}

export default Footer;
