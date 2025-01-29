"use client";

const Map = ({}) => {
  return (
    <section
      id="ora"
      className="z-30 flex w-full items-center justify-center bg-transparent"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.399473094071!2d-2.2802416234061185!3d53.443444972317536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487badf3db1314e7%3A0x97423dcbf0b16557!2sBig%20Parrot%20Tapas%20%26%20Bar%20in%20Manchester!5e0!3m2!1sen!2sin!4v1738152412717!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[600px] w-full"
      ></iframe>
    </section>
  );
};

export default Map;
