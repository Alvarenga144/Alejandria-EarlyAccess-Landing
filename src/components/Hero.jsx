import React from "react";

const Hero = () => {
    return(
        <div className="text-[#000000]">
            <div className="max-w-[900px] mt-[-120px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <div className="flex text-center justify-center">
                    <h1 className="md:text-7xl sm:text-5xl text-4xl font-black md:py-1">PROYECTO</h1>
                    <h1 className="text-[#7B3DFF] pl-4 md:text-7xl sm:text-5xl text-4xl font-black md:py-1">ALEJANDRÍA</h1>
                </div>
                <h3 className="md:text-4xl sm:text-2xl text-xl font-black">La nueva frontera del internet</h3>
                <p className="md:text-xl sm:text-md text-[#616161] px-2 mt-8">
                    Embárcate en un viaje hacia la nueva revolución de la humanidad. Una plataforma donde la red social se fusiona con la 
                    <b className="text-[#7B3DFF] ml-1">inteligencia artificial</b>, 
                    cambiando la forma en que interactuamos, aprendemos y creamos en el ciberespacio.
                </p>

            </div>
        </div>
    );
}

export { Hero };