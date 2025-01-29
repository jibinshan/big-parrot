import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-white"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-playfair text-5xl font-semibold leading-[66px] text-black lg:text-6xl">
                BigParrot - Where
                <br />
                Every Sip <br />
                and Bite
                <br />
                Tell a Story
              </h1>
              <p className="font-manrope font-normal text-black">
                Welcome to BigParrot – your ultimate destination for delicious
                tapas and vibrant flavors. Every dish we serve is crafted with
                passion, blending authentic ingredients to create a dining
                experience that’s both exciting and unforgettable. Whether
                you’re here for a casual bite, a festive gathering, or a night
                of indulgence, BigParrot offers a warm, inviting atmosphere
                where great food and good company come together. Savor every
                bite, enjoy every moment, and let the flavors tell a story worth
                sharing.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 lg:w-1/2 lg:pb-20 lg:pt-32">
            <Image
              src="/images/about-us/DSC03382.png"
              width={2648}
              height={3936}
              alt="hero"
              className="w-full object-cover md:h-[900px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
