"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FaSpinner } from 'react-icons/fa'
import toast from 'react-hot-toast';

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); 

           const serviceId = "service_17kd9x5";
const templateId = "template_9td7t08";
        const publicKey = "P4HFsqD0eRZnCKyqO";

        const templateParams = {
            user_name: name, // الاسم هيظهر داخل الرسالة
            user_email: email, // الإيميل هيظهر داخل الرسالة
            message: message, 
            // مفيش to_email هنا، الرسالة هتتبعت من حسابك الرسمي على EmailJS
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                if(response.status === 200){
                    toast.success("تم إرسال الرسالة بنجاح 🥳!")
                }
                setName("");
                setEmail("");
                setMessage("");
                setIsLoading(false); 
            })
            .catch((err) => {
                console.log(err);
                toast.error("حدث خطأ أثناء إرسال الرسالة!");
                setIsLoading(false); 
            });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 p-3 rounded-lg md:gap-5 md:p-5"
        >
            <input
                onChange={(e) => setName(e.target.value)}
                required
                className="outline-[--main-color] bg-transparent text-[--main-color] font-bold md:py-2 py-1 px-3 md:px-5 rounded-lg border-2 border-[--main-color]"
                type="text"
                value={name}
                placeholder="Enter your name"
            />
            <input
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-[--main-color] bg-transparent text-[--main-color] font-bold md:py-2 py-1 px-3 md:px-5 rounded-lg border-2 border-[--main-color]"
                type="email"
                value={email}
                placeholder="Enter your Email"
            />
            <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="outline-[--main-color] bg-transparent w-[300px] md:w-[400px] h-[250px] text-[--main-color] font-bold md:py-3 py-2 md:px-5 px-3 rounded-lg border-2 border-[--main-color]"
                placeholder="Write your message"
            ></textarea>

            <button
                type="submit"
                className={`py-1 md:px-2 px-1 flex justify-center items-center text-center text-[18px] md:text-[22px] border-1 border-[--main-color] text-white cursor-pointer transition-all hover:bg-[#0B3D88] rounded-full bg-[--main-color] font-bold ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={isLoading} 
            >
                {isLoading ? <FaSpinner className='animate-spin'/> : "Send"} 
            </button>
        </form>
    )
}

export default Form;
