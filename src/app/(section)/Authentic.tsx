import { Button } from "@/components/ui/button";
import Link from "next/link";

const Authentic = ({}) => {
  return (
    <section className="z-50 -mt-[45vh] flex w-full items-center justify-center overflow-hidden bg-background px-4 py-12 md:-mt-[33vh] md:pb-32 md:pt-0">
      <div className="relative flex w-full flex-col items-center justify-center gap-10 md:px-[100px]">
        <div className="absolute left-0 top-0 z-10 hidden h-full w-full px-[100px] md:flex">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "url('/images/home/authentic/1.png'),url('/images/home/authentic/2.png'),url('/images/home/authentic/3.png')",
              backgroundPosition: "center left, top right, bottom right",
              backgroundSize: "15%, 15%, 20%",
              backgroundRepeat: "no-repeat, no-repeat, no-repeat",
            }}
          />
        </div>
        <p className="z-20 w-full max-w-[650px] text-center font-cormorant text-2xl font-[600] uppercase text-primary md:text-5xl lg:leading-[60px]">
          Step into an oasis of minimal & modern decor with lush greenery,
          rustic wood accents and authentic hand made pottery.
        </p>
        <Button className="z-20 rounded-none bg-primary-foreground px-7 py-8 font-cormorant text-lg font-[600] uppercase tracking-[3px] text-white">
          <Link href="/menu"> View Menu </Link>
        </Button>
      </div>
    </section>
  );
};

export default Authentic;
