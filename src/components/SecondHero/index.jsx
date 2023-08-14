import React from "react";
import MagicSentLogo from '../../../src/assets/images/magicSentLogo.png';
import './SecondHero.css';

const SecondHero = () => {
    return (
        <div className="w-full text-[#000000] justify-center py-14" id="shadow-container-secondHero">
            <div className="max-w-[900px] w-full mx-auto px-4 text-center flex flex-col">
                <div className="text-center justify-center z-[-10]">
                    <h1 className="font-black md:text-7xl sm:text-5xl text-4xl drop-shadow-2xl"><div>Una plataforma que une el mundo</div>
                        <img className="md:max-w-[62px] md:relative md:mt-[-6%] md:mr-[23%]
                                        sm:max-w-[58px]
                                        max-w-[48px] my-2 mx-auto drop-shadow-lg" src={MagicSentLogo} alt="/" />
                    </h1>
                </div>
                <p className="md:text-xl sm:text-md text-md text-[#616161] mt-2">Imagina un mundo donde las empresas e instituciones pueden trascender las fronteras lingüísticas, donde la búsqueda de servicios o productos es más intuitiva que nunca. Alejandría hace realidad esa visión, construyendo puentes en un mundo digitalmente interconectado.</p>
            </div>
        </div>
    );
}

export { SecondHero }