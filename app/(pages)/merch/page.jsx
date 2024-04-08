"use client";

import { useState } from "react";
import { merch } from "@/data/merch";
import Image from "next/image";
import { useEffect } from "react";

const Merch = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <section className="flex items-center justify-center mt-[150px] ">
      <div className="container">
        <h2 className="pageText">Náš merch </h2>
        <p className="text-center sm:text-start">
          Všechen merch na objednání na emailové adresa <br />
          <span className="text-lg font-bold">info@tnr-band.cz</span>
        </p>
        <div className="flex flex-wrap items-center justify-center w-full gap-10 mt-10">
          {merch.map(({ src, alt }, i) => (
            <div key={i} className="w-[300px] h-[300px] relative">
              <Image
                src={src}
                className="object-cover w-full h-full rounded-md"
                alt={alt}
                onClick={() => openModal(src)}
                placeholder="blur"
              />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="z-20  h-[90%] p-8 ">
              <button
                onClick={closeModal}
                className="absolute z-20 font-extrabold text-white top-3 right-3"
              >
                X
              </button>
              <Image
                height={400}
                width={400}
                className="object-contain w-full h-full rounded-md"
                src={selectedImage}
                placeholder="blur"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Merch;
