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
                <div className="flex justify-between items-center">
                    <img className="w-[34px] h-[22px] mr-1" src={MainLogo} alt="/" />
                    <h1 className="text-lg font-bold tracking-wide text-[#000000]">Alejandr<span className="text-transparent bg-clip-text bg-gradient-to-t from-[#110036] to-[#7B3DFF]">ía</span></h1>
                </div>
                <ul className="hidden md:flex font-semibold">
                    <li className="p-4 hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#conversation-section">Conversación</a></li>
                    <li className="p-4 hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#comunity-section">Comunidad</a></li>
                    <li className="p-4 hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#efective-sms-section">Efectividad</a></li>
                    <li className="p-4 hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#news-information-section">Noticias</a></li>
                </ul>
                <div className="hidden md:flex">
                    <AccesoAntibutton />
                </div>

                <div onClick={handleNav} className='block md:hidden'>
                    {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={!nav ? 'fixed left-0 top-0 w-[84%] h-screen border-r border-r-[#ADADAD] bg-[#FFFFFF] ease-in-out duration-500 z-50' : 'fixed left-[-100%]'}>
                <div className="flex items-center ml-4 mt-2">
                    <img className="w-[34px] h-[22px] mr-1" src={MainLogo} alt="/" />
                    <h1 className="text-lg font-bold tracking-wide text-[#000000]">Alejandr<span className="text-transparent bg-clip-text bg-gradient-to-t from-[#110036] to-[#7B3DFF]">ía</span></h1>
                </div>
                <ul className="uppercase p-4 text-sm font-semibold">
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#conversation-section">Conversación</a></li>
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#comunity-section">Comunidad</a></li>
                        <li onClick={handleNav} className="p-4 border-b border-b-[#ADADAD] hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#efective-sms-section">Efectividad</a></li>
                        <li onClick={handleNav} className="p-4 hover:text-[#411d8a] cursor-pointer transition-[0.5]"><a href="#news-information-section">Noticias</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export { Navbar };

/*

<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
    <h1 className="w-full text-3xl font-bold text-[#00df90]">REACT.</h1>
    <ul className="flex ">
        <li className="p-4"></li>
        <li className="p-4"></li>
        <li className="p-4"></li>
    </ul>
    <div class="flex items-center md:order-2">
        <a href="#" type="button" class="block py-2 px-3 ml-2 text-white rounded-lg hover:bg-gray-100 bg-sky-500 hover:bg-sky-600 font-semibold" id="user-menu-button-singup">
            Acceso anticipado
        </a>
    </div>
</div>
  

*/