import { React, useEffect } from "react";
import ChatGPT from '../assets/images/chatgptLogo.png';
import Partphone from '../assets/images/partphone.png';
import { AccesoAntibutton } from "./AccesoAntiButton";
import AOS from "aos";
import 'aos/dist/aos.css';

const Hero = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="w-full text-[#1a1e22] justify-center pb-20">
            <div className="max-w-[900px]  md:mt-[60px]  sm:mt-[50px] mt-[40px] w-full mx-auto text-center flex flex-col">

                <div className="flex max-w-[200px] bg-[#EEEEEE] rounded-lg p-1 mx-auto mb-8 z-[-50]" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="800">
                    <p className="text-sm font-semibold text-[#6631D4] my-auto">Potenciado por ChatGPT</p>
                    <img src={ChatGPT} alt="/" className="w-[24px] my-auto ml-1 rounded-lg" />
                </div>

                <div className="flex text-center justify-center z-[-10]">
                    <h1 className="font-black md:text-7xl sm:text-6xl text-5xl md:py-1 drop-shadow-2xl" 
                        data-aos="zoom-in">PROYECTO <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#110036] to-[#7B3DFF]">ALEJANDRÍA</span></h1>
                </div>
                <h3 className="md:text-4xl sm:text-3xl text-xl font-black drop-shadow-2xl z-[-10]" data-aos="zoom-in">La nueva frontera del internet</h3>
                <p className="md:text-xl sm:text-md text-md text-[#616161] px-2 mt-8 drop-shadow-2xl z-[-10]" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">
                    Embárcate en un viaje hacia la nueva revolución de la humanidad. Una plataforma donde la red social se fusiona con la
                    <span className="text-[#7B3DFF] ml-1 font-semibold">inteligencia artificial</span>,
                    cambiando la forma en que interactuamos, aprendemos y creamos en el ciberespacio.
                </p>
            </div>
            <div className="w-full mx-auto text-center" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800" >
                <img className="max-w-[290px] mt-6 mb-4 mx-auto" src={Partphone} alt="/" />
                <div className="mx-auto text-center">
                    <AccesoAntibutton />
                </div>
                <p className="md:text-base sm:text-md text-sm text-[#616161] px-6 mt-2">Totalmente gratis, sé de los primeros en estar en la red del futuro.</p>
            </div>
        </div>
    );
}

export { Hero }