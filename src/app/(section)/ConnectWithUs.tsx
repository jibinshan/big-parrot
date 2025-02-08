"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Icons } from "@/components/Icon";

const ConnectWithUs = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".connect-one", {
      scrollTrigger: {
        trigger: ".connect-one",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        scrub: true,
      },
      x: 0,
      scale: 1,
      ease: Power2.easeOut,
      duration: 1,
    });
  }, []);

  return (
    <section
      id="connect"
      className="relative flex w-full items-center justify-center overflow-hidden bg-background"
    >
      <div className="relative flex w-full">
        <div
          className="connect-one grid w-full grid-cols-4 md:gap-1"
          style={{
            transform: "scale(0.5)",
          }}
        >
          <Image
            src="/images/home/connect/1.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/2.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/3.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/4.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/5.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/6.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/7.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
          <Image
            src="/images/home/connect/8.png"
            width={380}
            height={395}
            alt="alt"
            className="z-30 object-cover"
          />
        </div>
        <div className="absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center">
          <Link
            href="https://www.instagram.com/bigparrotuk/"
            target="_blank"
            className="flex w-fit items-center justify-center gap-1 rounded-full bg-primary px-4 py-4 font-playfair text-sm font-[500] capitalize text-[#ECE6D6] md:gap-2 md:px-8 md:py-6 md:text-2xl md:tracking-[0.553px]"
          >
            <Icons.instagram className="h-5 w-5 text-primary-foreground md:h-full md:w-full" />
            bigparrotuk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithUs;
