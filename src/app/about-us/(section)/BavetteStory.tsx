import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11">
        <h2 className="text-center font-playfair text-8xl text-[#fff] md:left-[15%] md:text-8xl">
          The BigParrot
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/DSC03517.png"
              width={6024}
              height={4024}
              alt="private dining"
              className="w-full rounded-lg object-cover md:h-[600px] md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-playfair text-6xl text-[#fff] sm:text-7xl md:text-start">
              From Dream
              <br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#fff] md:text-start">
              BigParrot began as a vision to create a space where vibrant
              flavors and shared moments bring people together. Inspired by the
              rich traditions of tapas and the joy of communal dining, we
              crafted a lively and welcoming restaurant where every visit feels
              like a celebration. From the sizzling aroma of our freshly
              prepared dishes to the vibrant energy of our space, BigParrot is
              designed to delight your senses and create lasting memories.
              <br />
              <br />
              Over time, we’ve grown into a go-to destination for those who love
              great food, good company, and unforgettable experiences. Whether
              you’re enjoying a casual evening with friends, a festive
              gathering, or exploring bold new flavors, BigParrot is here to
              make every moment special. With every bite and every toast, we
              strive to bring people together, one plate at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
