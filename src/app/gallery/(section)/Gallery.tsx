// import Image from "next/image";
// import React from "react";

// const Gallery: React.FC = () => {
//   const gallery = [
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//     "/images/gallery/image1.jpg",
//   ];
//   return (
//     <section className="h-full w-full bg-transparent px-4 py-12 md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[120px]">
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//         {gallery.map((image, index) => (
//           <div key={index} className="relative h-full w-full">
//             <Image
//               src={image}
//               alt={`gallery image ${index + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import Image from "next/image";
import React from "react";

const Gallery: React.FC = () => {
  const gallery = [
    "/images/gallery/image1.jpg",
    "/images/gallery/image2.jpg",
    "/images/gallery/image3.jpg",
    "/images/gallery/image4.jpg",
    "/images/gallery/image5.jpg",
    "/images/gallery/image6.jpg",
    "/images/gallery/image7.jpg",
    "/images/gallery/image8.jpg",
    "/images/gallery/image9.jpg",
    "/images/gallery/image10.jpg",
    "/images/gallery/image11.jpg",
    "/images/gallery/image12.jpg",
  ];

  return (
    <section className="h-full w-full bg-transparent px-4 py-12 md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[120px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gallery.map((image, index) => (
          <div key={index} className="relative h-64 w-full">
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
