'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import { Bounce } from "gsap";
import Link from "next/link";

const WelcomeRes = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.welcome-one', {
                scrollTrigger: {
                    trigger: ".welcome-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.welcome-two', {
                scrollTrigger: {
                    trigger: ".welcome-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.welcome-one', {
                scrollTrigger: {
                    trigger: ".welcome-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Bounce.easeOut,
                duration: 1.2

            })
            gsap.to('.welcome-two', {
                scrollTrigger: {
                    trigger: ".welcome-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                scale: 1,
                ease: Bounce.easeOut,
                duration: 0.8

            })
        })

        const splitType = document.querySelectorAll(".head-welcome")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.3
                })
            }
        })
        gsap.to('.about-arrow', {
            scrollTrigger: {
                trigger: ".about-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            ease: Bounce.easeInOut,
            duration: 1.2

        })

    }, [])

    return (
        <section id="welcome" className="relative flex flex-col w-full items-center justify-center bg-background overflow-hidden">

            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit w-full items-center justify-center px-4 md:px-3 bg-background py-12 lg:py-24 overflow-hidden z-40">
                <div className="absolute w-full h-full left-0 top-0 py-12 md:py-24">
                    <div className="h-full w-full"
                        style={{
                            backgroundImage: "url('/images/home/about/bg.png')",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    />
                </div>
                <div className="z-30 flex flex-col gap-5 lg:gap-24 h-full w-full md:px-[120px] items-center justify-center">
                    {/* <div className="md:px-5 py-6 rounded-full flex flex-col md:flex-row gap-4 items-center justify-center">
                        <Image
                            src="/images/home/about/delivery.png"
                            width={60}
                            height={39}
                            alt="welcome"
                            className=""
                        />
                        <div className="font-cormorant font-[400] text-lg md:text-3xl text-black uppercase">Now delivering with{' '}<Link href='/' className="font-cormorant text-primary-foreground border-b-[1px] border-b-primary-foreground">UberEats!</Link></div>
                    </div> */}

                    <p className="text-3xl md:text-8xl font-cormorant text-center font-[400] uppercase text-primary-foreground">
                        WE DO OUR BEST TO<br />
                        PROVIDE PURE AND<br />
                        SIMPLE FOOD
                    </p>
                    <div className="relative w-full flex justify-center items-center">
                        <Image
                            src="/images/home/about/about.png"
                            width={987}
                            height={1066}
                            alt="welcome"
                            className="w-full md:w-3/4"
                        />
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-5 md:gap-20">
                        <div className="w-full md:w-3/4 flex flex-col justify-start items-start">
                            <p className="w-full text-3xl text-primary-foreground font-cormorant font-[400] leading-[35px] uppercase">
                                Every day, tapas in manchester offers delicious Tapas made with the freshest and highest quality meats. With carefully selected fresh meats, we promise to bring the unique flavors of Spanish cuisine to life. Quality and freshness are our passions, so every dish on our menu is designed to provide you with an unforgettable dining experience
                            </p>
                        </div>
                        <div className="w-full md:w-3/4 flex gap-2 items-center md:justify-between">
                            <div className="flex flex-col gap-3">
                                <p className="w-full md:max-w-[60%] text-2xl md:text-7xl uppercase text-primary-foreground font-playfair font-[400]">1,280+</p>
                                <p className="w-full text-xl text-primary-foreground font-cormorant font-[400]">
                                    Customers
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="w-full md:max-w-[60%] text-2xl md:text-7xl uppercase text-primary-foreground font-playfair font-[400]">100%</p>
                                <p className="w-full text-xl text-primary-foreground font-cormorant font-[400]">
                                    Proven Quality
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="w-full md:max-w-[60%] text-2xl md:text-7xl uppercase text-primary-foreground font-playfair font-[400]">36+</p>
                                <p className="w-full text-xl text-primary-foreground font-cormorant font-[400]">
                                    Tapas Types
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default WelcomeRes;
