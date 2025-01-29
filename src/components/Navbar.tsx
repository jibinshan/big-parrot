"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Sidebar from "./Sidebar";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex h-fit w-full flex-col items-center justify-between overflow-hidden bg-transparent px-4 transition-all duration-0 ease-in-out md:px-0`,
        isScrolled && "border-b-0 bg-transparent",
        pathname !== "/" && "h-[10vh] border-b-0 bg-transparent",
      )}
    >
      <div
        className={cn(
          "hidden w-full justify-between bg-primary-foreground px-8 py-2 md:flex",
          pathname !== "/" && "hidden",
        )}
      >
        <div className="flex items-center justify-center">
          <p className="border-r-[2px] border-r-white px-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white">
            Phone: 0161 5196817
          </p>
          <p className="border-r-[2px] border-r-white px-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white">
            Mon: Closed{" "}
          </p>
          <p className="border-r-[2px] border-r-white px-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white">
            Tue-Thur: 5pm-10:30pm,{" "}
          </p>
          <p className="border-r-[2px] border-r-white px-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white">
            Fri: 5pm-12am,
          </p>
          <p className="border-r-[2px] border-r-white px-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white">
            Sat: 12pm-12am,
          </p>
          <p className="px-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white">
            {" "}
            Sun: 12pm-9pm{" "}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link href="">
            <Image
              src="/images/whatsapp.svg"
              width={31}
              height={32}
              alt="whatsapp"
            />
          </Link>
          <Link
            href="tel:01615196817"
            className="pr-3 font-inter text-sm font-[600] uppercase tracking-[1px] text-white"
          >
            0161 5196817
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-between gap-2",
        )}
      >
        <Link href="/" className="flex md:hidden">
          <Image
            src="/images/logo.png"
            width={153}
            height={78}
            alt="logo"
            className="w-28 pt-4"
          />
        </Link>

        <div
          className={cn(
            "relative hidden h-full min-w-full flex-row items-center justify-between gap-12 border-b-[0.1px] border-b-[#75716d] md:flex",
          )}
        >
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={191}
              height={70}
              alt="logo"
              className="z-20 ml-10 w-32"
            />
          </Link>
          <div>
            <Button
              asChild
              variant="link"
              className="h-[10vh] rounded-none border-l-[1px] border-l-[#75716d] px-6 uppercase shadow-none"
            >
              <Link
                href="/about-us"
                className="z-20 flex items-center justify-center gap-2 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white hover:text-primary"
              >
                About
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="h-[10vh] rounded-none border-l-[1px] border-l-[#75716d] px-6 uppercase shadow-none"
            >
              <Link
                href="/menu"
                className="z-20 flex items-center justify-center gap-2 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white hover:text-primary"
              >
                Menu
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="h-[10vh] rounded-none border-l-[1px] border-l-[#75716d] px-6 uppercase shadow-none"
            >
              <Link
                href="/"
                className="z-20 flex items-center justify-center gap-2 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white hover:text-primary"
              >
                Jardin Nights
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="h-[10vh] rounded-none border-l-[1px] border-l-[#75716d] px-6 uppercase shadow-none"
            >
              <Link
                href="/"
                className="z-20 flex items-center justify-center gap-2 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white hover:text-primary"
              >
                Specials
              </Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="h-[10vh] rounded-none border-l-[1px] border-l-[#75716d] px-6 uppercase shadow-none"
            >
              <Link
                href="/contact"
                className="z-20 flex items-center justify-center gap-2 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white hover:text-primary"
              >
                Contact
              </Link>
            </Button>
            <Button className="h-[10vh] rounded-none bg-white px-7 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-black">
              <Link href="/table-booking">book table</Link>
            </Button>
          </div>
        </div>
        <div className="flex md:hidden">
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
