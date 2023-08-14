import React from "react";
import EventsNews from '../assets/images/events&News.png';

const NewsInformation = () => {
    return (
        <div className="w-full pb-12 pt-4 px-4 justify-center">
            <h2 className="md:text-2xl sm:text-xl text-xl text-[#000000] text-center my-8 font-bold drop-shadow-2xl">¡Todo lo ocurrido en tu zona y en el mundo! 🗞</h2>
            <div class="max-w-[900px] mx-auto
                        md:grid md:grid-rows-1 md:grid-flow-col md:gap-4 
                        sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-4
                        flex flex-col gap-4">

                <div class="md:row-span-1 md:col-span-1 md:max-w-[440px]
                            sm:row-span-1 sm:col-span-1
                            px-4 border border-[#5F5F5F] rounded-lg py-8">
                    <h2 className="md:text-lg sm:text-sm text-sm text-[#000000] font-bold">Entrena a la Inteligencia Artificial ✍🏻</h2>
                    <p className="md:text-md sm:text-sm
                                  text-md text-[#616161] mt-2 drop-shadow-2xl">¡No te quedes atrás! Crea tu perfil, entrena con tu información a la inteligencia artificial y genera un impacto en los demás.
                                  Tus publicaciones, tus servicios, tus eventos, todo.</p>
                    <h2 className="md:text-lg sm:text-sm text-sm text-[#000000] mt-4 font-bold">Conecta a Nivel Global 🌐</h2>
                    <p className="md:text-md sm:text-sm
                                  text-md text-[#616161] mt-2 drop-shadow-2xl">¡Nuevos Clientes! Deja que los demás te encuentren y vean qué estás publicando. Crea un perfil como Comercio, y sé descubierto por personas que buscan tus productos o servicios sin importar las fronteras del idioma.</p>
                    <h2 className="md:text-lg sm:text-sm text-sm text-[#000000] mt-4 font-bold">Entrenamiento Colectivo  ✅</h2>
                    <p className="md:text-md sm:text-sm
                                  text-md text-[#616161] mt-2 drop-shadow-2xl">A medida que interactúas, Alejandría aprende y crece. Cada usuario contribuye al crecimiento colectivo de esta inteligencia, creando una entidad en constante evolución y adaptación.</p>
                </div>

                <div class="md:row-span-1 md:col-span-1 md:max-w-[440px]
                            sm:row-span-1 sm:col-span-1
                            px-4 border border-[#5F5F5F] rounded-lg py-2">
                    <img className="md:w-full mx-auto" src={EventsNews} alt="/" />
                </div>
            </div>

        </div>
    );
}

export { NewsInformation };