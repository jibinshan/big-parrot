import { Button } from "@/components/ui/button"
import Image from "next/image"

const Blog = ({ }) => {
    return (
        <section className="w-full px-4 py-12 md:py-24 md:px-[130px] flex justify-center items-center bg-background z-30">
            <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-12">
                <div className="w-full flex justify-between items-center">
                    <p className="font-cormorant non-italic uppercase text-primary font-[600] text-2xl md:text-6xl text-center flex gap-3 justify-center items-center">Blog</p>
                    <Button className="font-cormorant uppercase px-7 py-8 tracking-[3px] text-white bg-primary-foreground font-[600] text-lg rounded-none z-20">view Blog</Button>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
                    <div className="w-full md:w-[48%] flex flex-col justify-center items-start gap-4 md:gap-7">
                        <Image
                            src='/images/home/blog/1.png'
                            width={719}
                            height={469}
                            alt="blog"
                        />
                        <p className="w-full md:w-[90%] text-lg md:text-3xl font-cormorant font-[400] text-primary uppercase">Your Ultimate Guide to Breakfast in Manchester: Where to Find the Best Morning Eats</p>
                        <p className="capitalize md:text-xl text-primary-foreground font-cormorant font-[400] underline">Read More</p>
                    </div>
                    <div className="w-full md:w-[48%] flex flex-col justify-center items-start gap-4 md:gap-7">
                        <Image
                            src='/images/home/blog/2.png'
                            width={719}
                            height={469}
                            alt="blog"
                        />
                        <p className="w-full md:w-[90%] text-lg md:text-3xl font-cormorant font-[400] text-primary uppercase">Your Ultimate Guide to Breakfast in Manchester: Where to Find the Best Morning Eats</p>
                        <p className="capitalize md:text-xl text-primary-foreground font-cormorant font-[400] underline">Read More</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog