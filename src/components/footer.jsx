import React from "react";
import MainLogo from '../assets/images/mainlogo.png';

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E]">
            <div class="flex flex-col items-center max-w-[1240px] mx-auto px-4 py-8">
                <div className="flex items-center">
                    <img className="w-[34px] h-[22px] mr-1" src={MainLogo} alt="/" />
                    <h1 className="text-lg font-bold tracking-wide text-[#E1E1E1]">Alejandría</h1>
                    
                </div>
                <p className="text-sm text-[#616161] font-semibold italic">© Copyright 2023.</p>
                <p className="text-sm text-[#616161] font-semibold italic">All rights reserved. Powered by the Alejandría Team</p>
            </div>
        </div>
    );
}

export { Footer };