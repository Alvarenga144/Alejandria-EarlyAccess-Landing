import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] =  useState(true);
    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div class="flex justify-between items-center h-12 max-w-[1240px] mx-auto px-4 border-b border-b-[#ADADAD] bg-[#FFFFFF]">
            <div>
                <h1 className="text-lg font-bold tracking-wider text-[#000000]">Alejandría</h1>
            </div>
            <ul className="hidden md:flex font-medium tracking-wider">
                <li className="p-4 ">Section</li>
                <li className="p-4 ">Section</li>
                <li className="p-4 ">Section</li>
            </ul>
            <a href="#" type="button" className="hidden md:flex py-2 px-3 text-sm font-bold tracking-wide text-white rounded-lg bg-[#6631D4] hover:bg-[#411d8a]">
                Acceso Anticipado
            </a>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-[#ADADAD] bg-[#FFFFFF] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="text-lg font-bold tracking-wider text-[#000000] m-4">Alejandría</h1>
                <ul className="uppercase p-4 text-sm">
                    <li className="p-4 border-b border-b-[#ADADAD]">Section</li>
                    <li className="p-4 border-b border-b-[#ADADAD]">Section</li>
                    <li className="p-4">Section</li>
                </ul>
            </div>
        </div>
    );
}

export { Navbar };

/*

<div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
    <h1 className="w-full text-3xl font-bold text-[#00df90]">REACT.</h1>
    <ul className="flex ">
        <li className="p-4">Section</li>
        <li className="p-4">Section</li>
        <li className="p-4">Section</li>
    </ul>
    <div class="flex items-center md:order-2">
        <a href="#" type="button" class="block py-2 px-3 ml-2 text-white rounded-lg hover:bg-gray-100 bg-sky-500 hover:bg-sky-600 font-semibold" id="user-menu-button-singup">
            Acceso anticipado
        </a>
    </div>
</div>
  

*/