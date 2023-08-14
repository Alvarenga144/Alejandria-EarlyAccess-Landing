import React from "react";
import { AccesoAntibutton } from "./AccesoAntiButton";
import conver1 from '../assets/images/conver1.png';
import conver2 from '../assets/images/conver2.png';
import conver3 from '../assets/images/conver3.png';

const Conversations = () => {
    return (
        <div id="conversation-section" className="w-full py-4 px-4 justify-center">

            <div class="md:max-w-[900px] md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 
                        sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-4
                        flex flex-col gap-4 mx-auto">

                <div class="md:row-span-1 md:col-span-2 md:h-[240px] 
                            sm:row-span-1 sm:col-span-1 sm:h-[310px]">
                    <div className="z-[-10]">
                        <h2 className="md:text-2xl sm:text-xl
                                    text-xl text-[#000000] font-bold">Conversa con el Pasado, Presente y Futuro</h2>
                    </div>
                    <div className="z-[-10]">
                        <p className="md:text-xl sm:text-md
                                    text-md text-[#616161] mt-4">Imagina conversar con una entidad que combina el conocimiento histórico, la información en tiempo real y el poder analítico para resolver problemas y generar contenido nuevo, todo basado en tus inquietudes.</p>
                    </div>
                    <div className="md:text-left md:pb-0
                                    sm:text-left sm:pb-0
                                    mx-auto mt-8 pb-6 text-center">
                        <AccesoAntibutton />
                    </div>
                </div>
                <div class="md:row-span-1 md:col-span-1 md:mt-[-36px]
                            sm:row-span-1 sm:col-span-1 sm:mt-[-100px]">
                    <img className="md:max-w-[291px] md:ml-0 mx-auto px-4" src={conver1} alt="/" />
                </div>
                <div class="md:row-span-1 md:col-span-1 md:mt-[-36px]
                            sm:row-span-1 sm:col-span-1 sm:h-[310px]">
                    <img className="md:max-w-[268px] md:ml-0 mx-auto px-4" src={conver2} alt="/" />
                </div>
                <div class="md:row-span-2 md:col-span-1 md:mt-0
                            sm:row-span-1 sm:col-span-1 sm:mt-[-100px]">
                    <img className="md:max-w-[302px] mx-auto px-4" src={conver3} alt="/" />
                </div>
            </div>

        </div>
    );
}

export { Conversations };

/*

md:text-4xl sm:text-3xl text-xl

        <div className="w-full bg-slate-300 py-16 px-4 justify-center">
            <div class="max-w-[900px] mx-auto md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 sm:flex sm:flex-col sm:gap-2">
                
                <div class="md:row-span-1 md:col-span-2 mb-8">
                    <h2 className="md:text-xl sm:text-md text-md text-[#000000] font-bold">Conversa con el Pasado, Presente y Futuro</h2>
                    <p className="md:text-xl sm:text-md text-md text-[#616161] mt-4">Imagina conversar con una entidad que combina el conocimiento histórico, la información en tiempo real y el poder analítico para resolver problemas y generar contenido nuevo, todo basado en tus inquietudes.</p>
                    <div className="mx-auto mt-8">
                        <AccesoAntibutton />
                    </div>
                </div>
                <div class="md:row-span-1 md:col-span-1">
                    <img className="md:max-w-[291px] mx-auto sm:my-2" src={conver1} alt="/" />
                </div>
                <div class="md:row-span-1 md:col-span-1">
                    <img className="md:max-w-[268px] mx-auto sm:my-2" src={conver2} alt="/" />
                </div>
                <div class="md:row-span-2 md:col-span-1">
                    <img className="md:max-w-[268px] mx-auto sm:my-2" src={conver3} alt="/" />
                </div>

            </div>
        </div>

*/