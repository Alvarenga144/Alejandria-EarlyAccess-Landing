import React from "react";
import { useEffect, useState } from "react";
import { BsArrowUp } from 'react-icons/bs';
import AOS from "aos";
import 'aos/dist/aos.css';

const ToTopButton = () => {

    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        AOS.init();
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setBackToTopBtn(true)
            } else {
                setBackToTopBtn(false)
            }
        })
    }, []);

    const ScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            {backToTopBtn && (
                <button
                    onClick={ScrollUp}
                    className="fixed bottom-6 left-6 justify-center items-center p-4 transition-[0.5] z-50 bg-[#6631D4] rounded-full 
                    drop-shadow-lg cursor-pointer hover:bg-[#411d8a]" data-aos="fade-down" data-aos-delay="1500">
                    <BsArrowUp size={18} color="white" />
                </button>
            )}
        </>

    );
}

export { ToTopButton }