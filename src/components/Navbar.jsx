import React, { useState } from "react";
import { AccesoAntibutton } from "./AccesoAntiButton";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import MainLogo from '../assets/images/mainlogo.png';

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className="drop-shadow-lg bg-[#FFFFFF]">
            <div class="flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4">
                <div className="md:flex md:justify-between md:items-center md:mx-0
                                sm:flex sm:justify-between sm:items-center sm:mx-0
                                flex items-center mx-auto">
                    <img className="w-[34px] h-[22px] mr-1" src={MainLogo} alt="/" />
                    <h1 className="text-lg font-bold tracking-wide text-[#1a1e22]">Alejandr<span className="text-transparent bg-clip-text bg-gradient-to-t from-[#110036] to-[#7B3DFF]">ía</span></h1>
                </div>
                <ul className="hidden md:flex font-semibold">
                    <li className="p-4 text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#conversation-section">Conversación</a></li>
                    <li className="p-4 text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#comunity-section">Comunidad</a></li>
                    <li className="p-4 text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#efective-sms-section">Efectividad</a></li>
                    <li className="p-4 text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#news-information-section">Noticias</a></li>
                </ul>
                <div className="hidden md:flex sm:flex">
                    <AccesoAntibutton />
                </div>

                <div onClick={handleNav} className='hidden'>
                    {!nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
                </div>

                <div className={!nav ? 'fixed left-0 top-12 w-[100%] h-screen border-t border-t-[#ADADAD] bg-[#FFFFFF] ease-in-out duration-500 z-40' : 'fixed left-[-100%]'}>
                    <ul className="uppercase p-4 text-sm font-bold tracking-wide">
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#conversation-section">Conversación</a></li>
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#comunity-section">Comunidad</a></li>
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#efective-sms-section">Efectividad</a></li>
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] text-[#1a1e22] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#news-information-section">Noticias</a></li>
                        <div className="p-4">
                            <AccesoAntibutton />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { Navbar }