import { React, useEffect } from "react";
import { AccesoAntibutton } from "./AccesoAntiButton";
import conver1 from '../assets/images/conver1.png';
import conver2 from '../assets/images/conver2.png';
import conver3 from '../assets/images/conver3.png';
import AOS from "aos";
import 'aos/dist/aos.css';

const Conversations = () => {
    
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="conversation-section" className="w-full py-4 px-4 justify-center">

            <div class="md:max-w-[900px] md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 
                        sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-4
                        flex flex-col gap-4 mx-auto">

                <div class="md:row-span-1 md:col-span-2 md:h-[240px] 
                            sm:row-span-1 sm:col-span-1 sm:h-[310px]" data-aos="fade-up">
                    <div className="z-[-10]">
                        <h2 className="md:text-2xl sm:text-xl
                                    text-xl text-[#1a1e22] font-bold">Conversa con el Pasado, Presente y Futuro</h2>
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
                            sm:row-span-1 sm:col-span-1 sm:mt-[-100px]" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="500">
                    <img className="md:max-w-[291px] md:ml-0 mx-auto px-4 drop-shadow-xl" src={conver1} alt="/" />
                </div>
                <div class="md:row-span-1 md:col-span-1 md:mt-[-36px]
                            sm:row-span-1 sm:col-span-1 sm:h-[310px]" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="500">
                    <img className="md:max-w-[268px] md:ml-0 mx-auto px-4 drop-shadow-xl" src={conver2} alt="/" />
                </div>
                <div class="md:row-span-2 md:col-span-1 md:mt-0
                            sm:row-span-1 sm:col-span-1 sm:mt-[-100px]" data-aos="fade-left" data-aos-easing="ease" data-aos-delay="500">
                    <img className="md:max-w-[302px] mx-auto px-4 drop-shadow-xl" src={conver3} alt="/" />
                </div>
            </div>

        </div>
    );
}

export { Conversations }