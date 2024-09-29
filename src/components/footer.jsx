import React from "react";
import MainLogo from '../assets/images/mainlogo.png';
import ChatGPT from '../assets/images/chatgptLogo.png';
import { BiLogoGmail } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';
import { BiLogoFacebookCircle } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] flex justify-center">
            <div class="sm:mx-0 sm:flex-row sm:justify-between flex flex-col my-8 w-[80%] mx-auto">
                
                <div className="sm:justify-start sm:items-start flex flex-col items-center justify-center pb-2">
                    <div className="flex items-center justify-center">
                        <img className="w-[34px] h-[22px] mr-1 invert" src={MainLogo} alt="/" />
                        <h1 className="text-lg font-bold tracking-wide text-[#E1E1E1] ">Alejandr<span href="#" className="text-[#7B3DFF]">ía</span></h1>
                    </div>
                    
                    <div className="sm:border-0 sm:mt-2 flex items-center justify-center border-b border-b-[#616161] pb-4">
                        <p className="italic text-sm font-semibold text-[#616161] my-auto">Potenciado por ChatGPT</p>
                        <img src={ChatGPT} alt="/" className="w-[20px] my-auto ml-1 rounded-lg" />
                    </div>
                </div>


                <div className="sm:justify-start sm:items-start sm:border-0 flex flex-col items-center justify-center border-b border-b-[#616161] py-4">
                    <h2 className="text-sm text-[#E1E1E1] font-bold tracking-wider uppercase">CONTACTO</h2>
                    
                    <a href="/" target={"_blank"} rel="noreferrer" className="flex items-center mt-4">
                        <BiLogoInstagram size={22} color="#616161" />
                        <p className="ml-2 text-sm text-[#aaaaaa] font-semibold">@Instagram</p>
                    </a>
                    <a href="/" target={"_blank"} rel="noreferrer" className="flex items-center mt-2">
                        <h2 className="w-[22px] font-bold text-[#616161] ml-1.5">X</h2>
                        <p className="text-sm text-[#aaaaaa] font-semibold">@X</p>
                    </a>
                    <a href="/" target={"_blank"} rel="noreferrer" className="flex items-center mt-2">
                        <BiLogoFacebookCircle size={22} color="#616161" />
                        <p className="ml-2 text-sm text-[#aaaaaa] font-semibold">Facebook</p>
                    </a>
                    <div className="flex items-center mt-2">
                        <BiLogoGmail size={22} color="#616161" />
                        <p className="ml-2 text-sm text-[#aaaaaa] font-semibold">Mail</p>
                    </div>
                </div>

                <div className="sm:justify-start sm:items-start flex flex-col items-center justify-center pt-4">
                    <p className="text-sm text-[#616161] font-semibold italic">© Copyright 2023</p>
                    <p className="text-sm text-[#616161] font-semibold italic">All rights reserved</p>
                    <p className="text-sm text-[#616161] font-semibold italic">Powered by Esteban Alvarenga</p>
                </div>

            </div>
        </div>
    );
}

export { Footer }