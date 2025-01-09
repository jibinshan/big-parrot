import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({ }) => {
    return (
        <footer id="footer" className="h-full md:h-[100vh] w-full grid grid-cols-1 md:grid-cols-3 items-center justify-center z-20">
            <div className="col-span-2 h-full">
                <div className="w-full h-full flex flex-col items-center justify-between gap-12 md:gap-16 bg-[#1b040a] px-2 md:px-[100px] pt-12 pb-7 md:pt-24">
                    <Image
                        src='/images/logo.png'
                        width={153}
                        height={78}
                        alt="logo"
                    />
                    <div className="flex items-center justify-start gap-4">
                        <Link href="https://www.instagram.com/bruncho_uk/?hl=en" className="text-[#ECE6D6]">
                            <Icons.instagram />
                        </Link>
                        <Link href="" className="text-[#ECE6D6]">
                            <Icons.tripAdvisor />
                        </Link>
                        <Link href="https://www.google.com/search?hl=en-IN&gl=in&q=Bruncho,+270+Deansgate,+Manchester+M3+4JB,+United+Kingdom" className="text-white">
                            <Icons.google className="text-[#ECE6D6]" />
                        </Link>
                        <Link href="" className="text-[#ECE6D6]">
                            <Icons.facebook />
                        </Link>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-5 md:gap-0">
                        <div className="w-full md:w-1/2 flex flex-col gap-2 md:gap-5 items-center md:items-start justify-center">
                            <p className="w-full md:w-2/3 text-[#D3AF5E] font-cormorant font-[600] uppercase text-xl md:text-xl text-center tracking-[3px]">Address</p>
                            <div className="flex flex-col gap-1">
                                <Link href="https://maps.app.goo.gl/3c776tRDmvogSitG8" target="_blank" className="text-[#ECE6D6] tracking-[3px] text-center uppercase font-cormorant text-xl md:text-xl font-[600]">
                                    72-74 Parade Watford<br /> Hertfordshire WD17 1AW
                                </Link>
                                <Link href="tel:+08 097845666" className="text-[#ECE6D6] text-center font-cormorant text-xl md:text-xl font-[600] tracking-[3px] uppercase">
                                    +08 097845666
                                </Link>
                                <Link href="mailto:jardin@gmail.com" className="text-[#ECE6D6] text-center font-cormorant text-xl md:text-xl font-[600] tracking-[3px] uppercase">
                                    jardin@gmail.com
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center md:justify-center items-center gap-2 md:gap-5">
                            <p className="text-[#D3AF5E] font-cormorant font-[600] text-xl md:text-xl uppercase tracking-[3px]">Hours of Operation</p>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center tracking-[3px]">Mon: 12pm-10pm <br />(Cold Menu Only), </p>
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center tracking-[3px]">Tue-Thur: 12pm-10pm, </p>
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center tracking-[3px]">Fri & Sat: 12pm-3am,</p>
                                <p className="text-[#ECE6D6] text-xl md:text-xl uppercase font-cormorant font-[600] text-center tracking-[3px]">Sun: 12pm-9pm </p>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#ECE6D6] text-lg font-cormorant font-[600] text-center uppercase italic">Powerd by foodo</p>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-start gap-4 bg-[#28000a] px-2 pt-12 pb-7 md:pt-24">
                <div className="w-full md:h-full flex flex-col justify-start items-center gap-3 md:gap-12">
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-5xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                        asChild
                    >
                        <Link href="/menu" className="tracking-[3px]">About</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-5xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                        asChild
                    >
                        <Link href="/menu" className="tracking-[3px]">menu</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-5xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                        asChild
                    >
                        <Link href="/menu" className="tracking-[3px]">Gallery</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-5xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                        asChild
                    >
                        <Link href="/menu" className="tracking-[3px]">Blog</Link>
                    </Button>
                    <Button
                        variant="link"
                        className="w-fit items-center justify-start px-0 py-0 text-start text-xl md:text-5xl font-[600] uppercase font-cormorant text-[#ECE6D6]"
                        asChild
                    >
                        <Link href="/menu" className="tracking-[3px]">Contact</Link>
                    </Button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;