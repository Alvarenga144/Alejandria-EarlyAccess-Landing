import React from "react";
import MainLogo from '../assets/images/mainlogo.png';
import ChatGPT from '../assets/images/chatgptLogo.png';

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E]">
            <div class="flex flex-col items-center max-w-[1240px] mx-auto px-4 py-8">
                <div className="flex items-center mb-1">
                    <img className="w-[34px] h-[22px] mr-1 invert" src={MainLogo} alt="/" />
                    <h1 className="text-lg font-bold tracking-wide text-[#E1E1E1] ">Alejandr<span href="#" className="text-[#7B3DFF] cursor-default">ía</span></h1>
                    
                </div>
                <div className="flex max-w-[200px] mx-auto">
                    <p className="italic text-sm font-semibold text-[#616161] my-auto">Potenciado por ChatGPT</p>
                    <img src={ChatGPT} alt="/" className="w-[20px] my-auto ml-1 rounded-lg" />
                </div>
                <p className="text-sm text-[#616161] font-semibold italic">© Copyright 2023.</p>
                <p className="text-sm text-[#616161] font-semibold italic">All rights reserved. Powered by the Alejandría Team</p>
            </div>
        </div>
    );
}

export { Footer };