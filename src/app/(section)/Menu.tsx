'use client'
import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Menu = ({ }) => {
    const [select, setSelect] = useState(0)

    return (
        <section id="menu" className="flex flex-col w-full items-center min-h-screen justify-center">
            <div className={cn("w-full flex flex-col sticky top-0 bg-[#4f0014] px-4 md:px-0",
                select !== 0 && 'static bg-[#4f0014] z-40'
            )} >
                <div className="w-full pt-12 pb-12 flex justify-center items-center bg-[#4f0014]">
                    <div className="w-full max-w-[1300px] flex justify-between items-center">
                        <p className="text-[#ECE6D6] text-lg py-4 px-6 rounded-full border-[1px] border-[#6b2937] uppercase font-cormorant font-[400] md:text-2xl">
                            Make Your Menu Selection
                        </p>
                    </div>
                </div>
                <div className={cn("menu-section w-full pb-12 h-[30vh] flex flex-col gap-5 justify-start items-center bg-[#4f0014] z-10 transition-all duration-500 ease-in",
                    select === 1 && "h-fit md:h-fit",
                    select !== 0 && 'static'
                )}>
                    <div className="w-full max-w-[1300px] flex justify-between items-start">
                        <div className="flex justify-center items-center gap-4">
                            <p className="font-cormorant font-[400] uppercase text-2xl">01</p>
                            <p className="font-cormorant text-3xl md:text-7xl uppercase">Lunch</p>
                        </div>
                        <div className="p-3 rounded-full bg-[#5a041a]" onClick={() => setSelect((prev) => prev === 1 ? 0 : 1)}>
                            <ChevronUp className={cn("text-white transition-all duration-500 ease-in",
                                select === 1 && "rotate-180",
                            )} />
                        </div>
                    </div>
                    {select === 1 && (
                        <div className="w-full max-w-[1300px] flex flex-col gap-4 items-start justify-start">
                            <p className="text-primary font-playfair text-xl">Botana (appetizers)</p>
                            <div className="w-full flex flex-col md:flex-row gap-2">
                                <div className="w-full md:w-1/2 flex flex-col gap-2">
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col gap-2">
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                    <div className="w-full flex justify-between md:pr-14">
                                        <div>
                                            <p className="text-white font-playfair text-lg">Beef Slider</p>
                                            <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                        </div>
                                        <p className="font-playfair text-lg font-[400]">18</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
            <div className={cn("menu-section w-full py-12 px-4 md:px-0 h-[50vh] flex flex-col gap-5  justify-start items-center bg-[#37000e] sticky top-[280px] z-20 transition-all duration-500 ease-in",
                select === 2 && "h-fit md:h-fit",
                select !== 0 && 'static'
            )} >
                <div className="w-full max-w-[1300px] flex justify-between items-start">
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-cormorant font-[400] uppercase text-2xl">02</p>
                        <p className="font-cormorant text-3xl md:text-7xl uppercase">Dinner</p>
                    </div>
                    <div className="p-3 rounded-full bg-[#490617]" onClick={() => setSelect((prev) => prev === 2 ? 0 : 2)}>
                        <ChevronUp className={cn("text-white transition-all duration-500 ease-in",
                            select === 2 && "rotate-180",
                        )} />
                    </div>
                </div>
                {select === 2 && (
                    <div className="w-full max-w-[1300px] flex flex-col gap-4 items-start justify-start">
                        <p className="text-primary font-playfair text-xl">Botana (appetizers)</p>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className=
                {cn("menu-section w-full py-12 px-4 md:px-0 h-[50vh] flex flex-col gap-5 justify-start items-center bg-[#1b040a] sticky top-[450px] z-30 transition-all duration-500 ease-in",
                    select === 3 && "h-fit md:h-fit",
                    select !== 0 && select !== 3 && "static"
                )}
            >
                <div className="w-full max-w-[1300px] flex justify-between items-start">
                    <div className="flex justify-center items-center gap-4">
                        <p className="font-cormorant font-[400] uppercase text-2xl">03</p>
                        <p className="font-cormorant text-3xl md:text-7xl uppercase">Drinks</p>
                    </div>
                    <div className="p-3 rounded-full bg-[#280710]" onClick={() => setSelect((prev) => prev === 3 ? 0 : 3)}>
                        <ChevronUp className={cn("text-white transition-all duration-500 ease-in",
                            select === 3 && "rotate-180",
                        )} />
                    </div>
                </div>
                {select === 3 && (
                    <div className="w-full max-w-[1300px] flex flex-col gap-4 items-start justify-start">
                        <p className="text-primary font-playfair text-xl">Botana (appetizers)</p>
                        <div className="w-full flex flex-col md:flex-row gap-2">
                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col gap-2">
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                                <div className="w-full flex justify-between md:pr-14">
                                    <div>
                                        <p className="text-white font-playfair text-lg">Beef Slider</p>
                                        <p className="max-w-[250px] font-[400] text-sm text-white">three sliders , melted cheese and truffle mayonnaise</p>
                                    </div>
                                    <p className="font-playfair text-lg font-[400]">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className=
                {cn("menu-section w-full py-12 h-[50vh] flex flex-col gap-5 justify-start items-center bg-background outline sticky top-0 z-40 transition-all duration-500 ease-in",
                    select === 3 && "h-fit md:h-fit",
                    select !== 0 && select !== 3 && "static"
                )}
            >
            </div>
        </section>
    );
};

export default Menu;
