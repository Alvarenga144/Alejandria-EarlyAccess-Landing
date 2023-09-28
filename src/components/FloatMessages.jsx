import { React, useEffect } from "react";
import { AccesoAntibutton } from './AccesoAntiButton';
import InfoGroup1 from '../assets/images/1 info group.png';
import InfoGroup2 from '../assets/images/2 info group.png';
import InfoGroup3 from '../assets/images/3 info group.png';
import AOS from "aos";
import 'aos/dist/aos.css';

const FloatMessages = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="efective-sms-section" className="w-full py-4 px-4 justify-center">

            <div class="max-w-[900px] mx-auto
                        md:grid md:grid-rows-1 md:grid-flow-col md:gap-4 
                        sm:grid sm:grid-rows-1 sm:grid-flow-col sm:gap-4
                        flex flex-col gap-4">

                <div class="md:row-span-1 md:col-span-1 md:max-w-[96%]
                            sm:row-span-1 sm:col-span-1 sm:max-w-[92%]" data-aos="fade-right">
                    <h2 className="md:text-2xl md:mt-4 sm:text-xl sm:mt-4
                                   text-xl text-[#1a1e22] font-bold drop-shadow-2xl">Obtén la <span className="text-[#7B3DFF]">información</span> especifica que necesitas, de la forma más <span className="text-[#7B3DFF]">fácil</span> posible 🧑🏻‍💻</h2>
                    <p className="md:text-xl sm:text-md
                                  text-md text-[#616161] mt-4 drop-shadow-2xl">La magia de Alejandría es que ni siquiera nosotros, los creadores, conocemos todas las posibilidades que puede ofrecer. Con tu participación, tú puedes ayudar a escribir este emocionante capítulo en la historia de la tecnología.</p>
                    <div className="md:text-left md:pb-0
                                    sm:text-left sm:pb-0
                                    mx-auto mt-8 pb-6 text-center">
                        <AccesoAntibutton />
                    </div>
                </div>
                <div class="md:row-span-1 md:col-span-1
                            sm:row-span-1 sm:col-span-1
                            px-4">
                    <img className="md:w-full mx-auto px-4 drop-shadow-lg" src={InfoGroup1} alt="/" data-aos="fade-left" data-aos-easing="linear" data-aos-delay="600"/>
                    <img className="md:w-full mx-auto px-4 drop-shadow-lg" src={InfoGroup2} alt="/" data-aos="fade-right" data-aos-easing="linear" data-aos-delay="800"/>
                    <img className="md:w-full mx-auto px-4 drop-shadow-lg" src={InfoGroup3} alt="/" data-aos="fade-left" data-aos-easing="linear" data-aos-delay="1000"/>
                </div>
            </div>

        </div>
    );
}

export { FloatMessages }