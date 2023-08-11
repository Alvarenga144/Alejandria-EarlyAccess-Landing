import React from "react";
import Partphone from '../assets/images/partphone.png';
import { AccesoAntibutton } from "./AccesoAntiButton";

const Hero = () => {
    return(
        <div className="w-full text-[#000000] justify-center pb-20">
            <div className="max-w-[900px]  md:mt-[120px]  sm:mt-[100px] mt-[80px] w-full mx-auto text-center flex flex-col">
                <div className="flex text-center justify-center z-[-10]">
                    <h1 className="font-black md:text-7xl sm:text-6xl text-5xl md:py-1 drop-shadow-2xl">PROYECTO <a href="#" className="text-transparent bg-clip-text bg-gradient-to-t from-[#110036] to-[#7B3DFF]">ALEJANDRÍA</a></h1>
                </div>
                <h3 className="md:text-4xl sm:text-3xl text-xl font-black drop-shadow-2xl z-[-10]">La nueva frontera del internet</h3>
                <p className="md:text-xl sm:text-md text-md text-[#616161] px-2 mt-8 drop-shadow-2xl z-[-10]">
                    Embárcate en un viaje hacia la nueva revolución de la humanidad. Una plataforma donde la red social se fusiona con la 
                    <b className="text-[#7B3DFF] ml-1">inteligencia artificial</b>, 
                    cambiando la forma en que interactuamos, aprendemos y creamos en el ciberespacio.
                </p>
            </div>
            <div className="w-full mx-auto text-center" >
                <img className="max-w-[290px] mt-6 mb-4 mx-auto" src={Partphone} alt="/" />
                <div className="mx-auto text-center">
                    <AccesoAntibutton />
                </div>
                <p className="md:text-base sm:text-md text-sm text-[#616161] px-6 mt-2">Totalmente gratis, sé de los primeros en estar en la red del futuro.</p>
            </div>
        </div>
    );
}

export { Hero };