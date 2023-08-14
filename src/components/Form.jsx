import React from "react";
import MainLogo from '../assets/images/mainlogo.png';

const Form = () => {
    return (
        <div className="w-full py-8 px-4 justify-center">
            <div class="max-w-[900px] mx-auto rounded-2xl bg-gradient-to-tl from-[#110036] to-[#7B3DFF]
                        md:grid md:grid-rows-1 md:grid-flow-col md:gap-4 md:px-12 md:py-12
                        sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-4 sm:px-8 sm:py-8
                        flex flex-col gap-4 px-4 py-8">

                <div class="md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-1">
                    <h2 className="md:text-5xl sm:text-4xl text-3xl text-[#000000] font-bold">Sé parte de los pioneros que cambiarán la forma en que el mundo experimenta el internet.</h2>
                    <p className="md:text-xl sm:text-md text-md font-semibold mt-8 mb-8 text-[#FFFFFF] ">Empieza hoy mismo, ¡Es gratis! ✨</p>
                </div>

                <div class="md:row-span-1 md:col-span-1 md:max-w-[320px] md:px-4
                            sm:row-span-1 sm:col-span-1 sm:max-w-[300px] sm:px-2
                            min-h-[400px] min-w-[280px] max-w-[340px] mx-auto">
                            
                            <form action="" className="w-full h-full mx-auto text-center justify-center bg-[#FFFFFF] rounded-2xl px-6 py-10 ">
                                <img className="w-[44px] h-[32px] mx-auto mb-8" src={MainLogo} alt="/" />
                                
                                <input type="text" name="txtName" className="bg-[#EEEEEE] text-[#616161] rounded-lg w-full px-3 py-2 font-semibold" placeholder="Nombre" required />
                                <input type="email" name="txtEmail" className="bg-[#EEEEEE] text-[#616161] rounded-lg w-full px-3 py-2 font-semibold mt-3" placeholder="Correo electrónico" required />
                                
                                <select name="selOptions" className="bg-[#EEEEEE] text-[#616161] rounded-lg w-full px-3 py-2 font-semibold mt-3">
                                    <option value="Usuario">Usuario</option>
                                    <option value="Institucion">Institucion</option>
                                    <option value="Inversor">Inversor</option>
                                    <option value="Empresa">Empresa</option>
                                    <option value="Emprendedor">Emprendedor</option>
                                    <option value="CreaContenido">Creador de contenido</option>
                                </select>
                                
                                <textarea name="coments" id="txtComents" cols="30" rows="3" className="bg-[#EEEEEE] text-[#616161] rounded-lg w-full px-3 py-2 font-semibold mt-3" placeholder="Comentarios adicionales..."></textarea>
                                <input type="submit" className="w-full min-h-[37px] py-2 px-3 mt-5 font-bold tracking-wider text-white rounded-lg bg-[#6631D4] hover:bg-[#411d8a] cursor-pointer" value="Suscribirse"/>
                                <p className="text-[#6631D4] text-sm mt-2">Serás de los primeros</p>
                            </form>
                </div>
            </div>

        </div>
    );
}

export { Form };