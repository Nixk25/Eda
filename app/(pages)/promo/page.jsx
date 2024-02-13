import logos from "@/data/logos";
import Image from "next/image";
import images from "@/data/images";
import stage from "../../../public/stage-plan.jpeg";
const Promo = () => {
  return (
    <section className="mt-[200px] flex justify-center items-center">
      <div className="container">
        <h2 className="pageText">Pro pořadatele </h2>
        <div>
          <h2 className="title text-center mt-10">Stage Plán</h2>
          <div className="w-full flex-wrap flex gap-5 justify-center items-center sm:flex-row flex-col">
            <Image
              src={stage}
              alt="stage plán pro kapelu taková normální rodinka band"
            />
          </div>
        </div>
        <div>
          <h2 className="title text-center my-[100px]">Promo fotky zde</h2>
          <div className="w-full flex-wrap flex gap-5 justify-center items-center sm:flex-row flex-col">
            {images.map(({ src, alt }, i) => (
              <Image key={i} width={300} height={300} src={src} alt={alt} />
            ))}
          </div>
          <div>
            <h2 className="title text-center my-[100px]">Loga na promo</h2>
            <div className="w-full flex-wrap flex gap-5 justify-center items-center sm:flex-row flex-col">
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
