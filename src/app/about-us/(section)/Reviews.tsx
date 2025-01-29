"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import { useEffect } from "react";
import gsap, { Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(max-width:500px)", () => {
      gsap.to(".review-one", {
        scrollTrigger: {
          trigger: ".review-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 0,
        opacity: 1,
        scale: 1,
        ease: Power2.easeOut,
        duration: 1.3,
      });
    });

    mm.add("(min-width:501px)", () => {
      gsap.to(".review-one", {
        scrollTrigger: {
          trigger: ".review-one",
          toggleActions: "restart none none none",
          // start: "top 80%", // When the top of the .title enters 80% of the viewport
          // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
          // scrub: true
        },
        x: 30,
        scale: 1,
        ease: Power2.easeOut,
        duration: 1.3,
      });
    });

    gsap.to(".review-items", {
      scrollTrigger: {
        trigger: ".review-items",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      scale: 1,
      ease: Power2.easeOut,
      duration: 1.3,
    });

    const splitType = document.querySelectorAll(".head-review");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.4,
        });
      }
    });
  }, []);
  return (
    <section className="md:py-34 relative flex h-full w-full items-center justify-center overflow-hidden bg-background py-12 pb-32">
      <div className="z-20 flex h-full w-full flex-col items-start justify-center gap-4 md:gap-14">
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-8">
          <p className="rounded-full border-[1px] border-[#e32352] px-7 py-3 text-center font-playfair text-2xl font-[500] capitalize text-primary">
            Reviews
          </p>
          <p className="non-italic flex items-center justify-center gap-3 text-center font-cormorant text-2xl font-[600] uppercase text-primary md:text-5xl">
            WHY PEOPLE
            <br />
            BELIEVE IN US!
          </p>
        </div>
        <div
          className="review-items flex w-full items-center justify-center px-4 py-4 md:p-0"
          style={{
            transform: "scale(1.3)",
          }}
        >
          {reviews && (
            <Carousel className="w-full px-4 md:px-0">
              <CarouselContent className="ml-4 flex h-fit w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex justify-center border-[1px] border-[#dcb355] py-7 md:basis-1/2 md:py-12"
                  >
                    <div className="flex w-full flex-col gap-7 px-3">
                      <div className="relative flex w-full flex-col items-center justify-center gap-3 px-4 md:h-fit">
                        <div className="z-20 flex w-full justify-center">
                          <Icons.star key={index} className="text-[#dcb355]" />
                          <Icons.star key={index} className="text-[#dcb355]" />
                          <Icons.star key={index} className="text-[#dcb355]" />
                          <Icons.star key={index} className="text-[#dcb355]" />
                          <Icons.star key={index} className="text-[#dcb355]" />
                        </div>
                        <div className="z-20">
                          <p className="line-clamp-5 text-center font-cormorant text-lg font-[400] text-primary">
                            {review.text}
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full flex-col items-center justify-center">
                        {/* <Image
                                                    src={
                                                        review.profile_photo_url ||
                                                        "/images/home/reviews/pictures/anna-mathew.svg"
                                                    }
                                                    width={64}
                                                    height={64}
                                                    alt={review.author_name}
                                                /> */}
                        <div className="flex flex-col items-center justify-center">
                          <p className="font-playfair text-xl font-[500] text-primary">
                            -{review.author_name}-
                          </p>
                          {/* <span className="text-[#9C9995]">
                                                        {review.relative_time_description}
                                                    </span> */}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
