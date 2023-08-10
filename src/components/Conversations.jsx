import React from "react";

const Conversations = () => {
    return (
        <div className="w-full bg-slate-300 py-16 px-4">
            <div className="max-w[1240px] mx-auto grid md:grid-cols-3">
                <div className="flex flex-col justify-center">
                    <h2 className="text-[#000000] font-bold">TEXTO</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-[#000000] font-bold">TEXTO</h2>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-[#000000] font-bold">TEXTO</h2>
                </div>
            </div>
        </div>
    );
}

export { Conversations };