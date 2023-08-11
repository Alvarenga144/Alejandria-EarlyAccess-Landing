import React from "react";
import GlobeSVG from '../assets/images/globe-svgrepo-com.svg';
import IdeaSVG from '../assets/images/idea-svgrepo-com.svg';
import DevicesSVG from '../assets/images/multiple-devices-svgrepo-com.svg';
import LibrarySVG from '../assets/images/library-svgrepo-com.svg';

const Facts = () => {
    return(
        <div className="w-full text-[#000000] justify-center py-20">
            <div className="max-w-[1100px] w-full mx-auto text-center flex flex-col">

                <div class="md:max-w-[60%]
                            sm:max-w-[70%]
                            max-w-[90%] text-center justify-center m-auto">
                    <h2 className="md:text-2xl sm:text-xl
                                   text-xl text-[#000000] font-bold drop-shadow-2xl">La comunidad nos apoyó desde el inicio, ahora vamos a por más que una app, ¡Vamos por el futuro! 🚀</h2>
                </div>

                <div className="md:grid md:grid-cols-4 md:gap-4 md:my-14 md:mx-4
                                sm:grid sm:grid-cols-2 sm:gap-4 sm:my-12
                                grid grid-cols12 gap-4 m-auto my-10">
                    
                    <div className="border border-[#ADADAD] rounded-lg max-w-[260px] min-h-[160px] px-3 pt-8 pb-6">
                        <img className="max-w-[40px] mx-auto" src={GlobeSVG} alt="/" />
                        <h2 className="md:text-xl sm:text-md text-md mt-2 text-[#000000] font-bold tracking-wide">+20 Países</h2>
                        <p className="md:text-base sm:text-md text-sm text-[#616161] mt-3">En menos de una semana, conseguimos <b>+1,500 usuarios</b> de todos los continentes, sin campañas, sin anuncios, sólo un tweet</p>
                    </div>
                    <div className="border border-[#ADADAD] rounded-lg max-w-[260px] min-h-[160px] px-3 pt-8 pb-6">
                        <img className="max-w-[40px] mx-auto" src={IdeaSVG} alt="/" />
                        <h2 className="md:text-xl sm:text-md text-md mt-2 text-[#000000] font-bold tracking-wide">Sugerencias</h2>
                        <p className="md:text-base sm:text-md text-sm text-[#616161] mt-3">La comunidad nos comentó sus <b>necesidades</b> y las funciones que le gustaría tener en una app con Inteligencia Artificial</p>
                    </div>
                    <div className="border border-[#ADADAD] rounded-lg max-w-[260px] min-h-[160px] px-3 pt-8 pb-6">
                        <img className="max-w-[40px] mx-auto" src={DevicesSVG} alt="/" />
                        <h2 className="md:text-xl sm:text-md text-md mt-2 text-[#000000] font-bold tracking-wide">Equipo profesional</h2>
                        <p className="md:text-base sm:text-md text-sm text-[#616161] mt-3">Contamos con un equipo de <b>profesionales</b> programadores con años de experiencia y que buscan cambiar el mundo.</p>
                    </div>
                    <div className="border border-[#ADADAD] rounded-lg max-w-[260px] min-h-[160px] px-3 pt-8 pb-6">
                        <img className="max-w-[40px] mx-auto" src={LibrarySVG} alt="/" />
                        <h2 className="md:text-xl sm:text-md text-md mt-2 text-[#000000] font-bold tracking-wide">Socios</h2>
                        <p className="md:text-base sm:text-md text-sm text-[#616161] mt-3">Instituciones, <b>empresas</b>, emprendedores, creadores de contenido ya están suscritos al acceso anticipado.</p>
                    </div>
                </div>

                <div class="md:max-w-[60%]
                            sm:max-w-[70%]
                            max-w-[90%] text-center justify-center m-auto">
                    <p className="md:text-xl sm:text-md
                                  text-md text-[#616161] drop-shadow-md">Descubre el poder combinado de una red social y una inteligencia artificial sin precedentes.
                        <br /> ¡El futuro de la interacción y el conocimiento ha llegado!</p>
                </div>

            </div>
        </div>
    );
}

export { Facts };