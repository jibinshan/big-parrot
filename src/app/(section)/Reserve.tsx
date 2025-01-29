"use client";
import { useEffect } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Reserve = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".reserve-head", {
      scrollTrigger: {
        trigger: ".reserve-head",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        scrub: true,
      },
      x: 0,
      scale: 1,
      duration: 0.8,
      ease: Power4.easeOut,
    });
  }, []);
  return (
    <section
      id="reserve"
      className="relative flex w-full items-center justify-center overflow-hidden bg-fixed"
      style={{
        backgroundImage: "url('/images/home/celebrate/bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-fixed"
        style={{
          backgroundImage: "url('/images/home/celebrate/star.svg')",
          backgroundSize: "15% ",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
        }}
      ></div>
      <div className="relative z-40 flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden bg-transparent px-3 py-12 md:gap-14 lg:p-0 lg:py-24">
        <p
          className="reserve-head w-full text-center font-cormorant text-2xl font-[400] uppercase text-[#FFF5DD] md:text-7xl"
          style={{
            transform: "scale(0.6)",
          }}
        >
          Celebrating <br />
          authentic Mexican <br />
          traditions
        </p>
        <div className="z-30 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row md:items-start md:px-[140px] lg:gap-10">
          <div className="flex w-full items-start justify-start gap-2 md:w-1/2">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/images/home/celebrate/1.png"
                width={180}
                height={392}
                alt="1"
                className="hidden md:flex"
              />
              <Image
                src="/images/home/celebrate/2.png"
                width={261}
                height={691}
                alt="2"
                className="md:max-w-[230px]"
              />
            </div>
            <Image
              src="/images/home/celebrate/3.png"
              width={173}
              height={371}
              alt="2"
              className="mt-8"
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center md:w-1/2 md:py-12">
            <div className="w-full max-w-[550px] space-y-8">
              <p className="font-cormorant text-lg font-[400] text-[#FFF5DD]">
                Our culinary team draws inspiration from the diverse landscapes
                of Mexico, blending the bold, earthy flavors of the northern
                deserts with the fresh, vibrant tastes of the southern jungles.
                Every dish is crafted with the utmost care and creativity, using
                the highest quality ingredients to ensure the freshest
                flavors.Our tortillas are made in-house. Our traditional sauces,
                arbol, habanero ashes, and verde taquera, are all made from
                scratch. Complementing our cuisine is an extensive selection of
                the finest tequilas, carefully chosen to enhance your dining
                experience
              </p>
              <Button className="rounded-none bg-primary-foreground px-7 py-8 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white">
                <Link href="/table-booking">book table</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reserve;
