import logos from "@/data/logos";
import Image from "next/image";
import images from "@/data/images";
import stage from "../../../public/stagePlan.webp";
import inputList from "../../../public/inputList.jpg";
const Promo = () => {
  return (
    <section className="mt-[200px] flex justify-center items-center">
      <div className="container">
        <h2 className="pageText">Pro pořadatele </h2>
        <div>
          <h2 className="mt-10 text-center title">Stage Plán</h2>
          <div className="flex flex-col flex-wrap items-center justify-center w-full gap-5 sm:flex-row">
            <Image
              src={stage}
              alt="stage plán pro kapelu taková normální rodinka band"
            />
          </div>
        </div>
        <div>
          <h2 className="mt-10 text-center title">Input list </h2>
          <div className="flex flex-col flex-wrap items-center justify-center w-full gap-5 sm:flex-row">
            <Image
              src={inputList}
              alt="input list pro kapelu taková normální rodinka band"
            />
          </div>
        </div>
        <div>
          <h2 className="title text-center my-[100px]">Promo fotky</h2>
          <div className="flex flex-col flex-wrap items-center justify-center w-full gap-5 sm:flex-row">
            {images.map(({ src, alt }, i) => (
              <Image key={i} width={300} height={300} src={src} alt={alt} />
            ))}
          </div>
          <div>
            <h2 className="title text-center my-[100px]">Loga na promo</h2>
            <div className="flex flex-col flex-wrap items-center justify-center w-full gap-5 sm:flex-row">
              {logos.map(({ src, alt }, i) => (
                <Image
                  key={i}
                  width={300}
                  height={300}
                  src={src}
                  alt={alt}
                  placeholder="blur"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
