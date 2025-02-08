import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer
      id="footer"
      className="z-20 grid h-full w-full grid-cols-1 items-center justify-center md:h-[100vh] md:grid-cols-3"
    >
      <div className="col-span-2 h-full">
        <div className="flex h-full w-full flex-col items-center justify-between gap-12 bg-[#1b040a] px-2 pb-7 pt-12 md:gap-16 md:px-[100px] md:pt-24">
          <Image src="/images/logo.png" width={153} height={78} alt="logo" />
          <div className="flex items-center justify-start gap-4">
            <Link
              href="https://www.instagram.com/bigparrotuk/"
              target="_blank"
              className="text-[#ECE6D6]"
            >
              <Icons.instagram />
            </Link>
            <Link
              href="https://www.tripadvisor.com/Restaurant_Review-g187069-d27936764-Reviews-Big_Parrot_Tapas_Bar-Manchester_Greater_Manchester_England.html"
              target="_blank"
              className="text-[#ECE6D6]"
            >
              <Icons.tripAdvisor />
            </Link>
            <Link
              href="https://maps.app.goo.gl/sLVM6Dzr39HDM6rY9"
              target="_blank"
              className="text-white"
            >
              <Icons.google className="text-[#ECE6D6]" />
            </Link>
            <Link
              href="https://www.facebook.com/bigparrotuk/"
              target="_blank"
              className="text-[#ECE6D6]"
            >
              <Icons.facebook />
            </Link>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-5 md:flex-row md:gap-0">
            <div className="flex w-full flex-col items-center justify-center gap-2 md:w-1/2 md:items-start md:gap-5">
              <p className="w-full text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#D3AF5E] md:w-2/3 md:text-xl">
                Address
              </p>
              <div className="flex flex-col gap-1">
                <Link
                  href="https://maps.app.goo.gl/sLVM6Dzr39HDM6rY9"
                  target="_blank"
                  className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl"
                >
                  448C Barlow Moor Road,
                  <br /> Chorlton/Manchester M210BQ
                </Link>
                <Link
                  href="tel:+0161 5196817"
                  className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl"
                >
                  0161 5196817
                </Link>
                <Link
                  href="mailto:info@bigparrot.uk"
                  className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl"
                >
                  info@bigparrot.uk
                </Link>
              </div>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 md:w-1/2 md:justify-center md:gap-5">
              <p className="font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#D3AF5E] md:text-xl">
                Hours of Operation
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl">
                  Mon:Closed
                </p>
                <p className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl">
                  Tue-Thur: 5pm-10:30pm,{" "}
                </p>
                <p className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl">
                  Fri: 5pm-12am,
                </p>
                <p className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl">
                  Sat: 12pm-12am,
                </p>
                <p className="text-center font-cormorant text-xl font-[600] uppercase tracking-[3px] text-[#ECE6D6] md:text-xl">
                  Sun: 12pm-9pm{" "}
                </p>
              </div>
            </div>
          </div>
          <span className="text-center font-cormorant text-lg font-[600] uppercase italic text-[#ECE6D6]">
            <Link href={"https://foodo.ai"} target="_blank">
              Powerd by foodo
            </Link>
          </span>
        </div>
      </div>
      <div className="flex h-full w-full items-start justify-center gap-4 bg-[#28000a] px-2 pb-7 pt-12 md:pt-24">
        <div className="flex w-full flex-col items-center justify-start gap-3 md:h-full md:gap-12">
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-cormorant text-xl font-[600] uppercase text-[#ECE6D6] md:text-5xl"
            asChild
          >
            <Link href="/about-us" className="tracking-[3px]">
              About
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-cormorant text-xl font-[600] uppercase text-[#ECE6D6] md:text-5xl"
            asChild
          >
            <Link href="/menu" className="tracking-[3px]">
              menu
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-cormorant text-xl font-[600] uppercase text-[#ECE6D6] md:text-5xl"
            asChild
          >
            <Link href="/gallery" className="tracking-[3px]">
              Gallery
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-cormorant text-xl font-[600] uppercase text-[#ECE6D6] md:text-5xl"
            asChild
          >
            <Link href="/" className="tracking-[3px]">
              Blog
            </Link>
          </Button>
          <Button
            variant="link"
            className="w-fit items-center justify-start px-0 py-0 text-start font-cormorant text-xl font-[600] uppercase text-[#ECE6D6] md:text-5xl"
            asChild
          >
            <Link href="/contact" className="tracking-[3px]">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
