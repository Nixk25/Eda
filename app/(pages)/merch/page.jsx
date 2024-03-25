import merch1 from "../../../public/merch1.jpg";
import merch2 from "../../../public/merch2.jpg";
import Image from "next/image";
const Merch = () => {
  return (
    <section className="flex items-center justify-center mt-[120px] ">
      <div className="container">
        <h2 className="pageText">Náš merch </h2>
        <p className="text-center sm:text-start">
          Všechen merch na objednání na emailové adresa <br />
          <span className="text-lg font-bold">info@tnr-band.cz</span>
        </p>
        <div className="flex flex-wrap items-center justify-center w-full gap-10 mt-10">
          <Image src={merch1} className="object-cover max-w-[250px]" />
          <Image src={merch2} className="object-cover max-w-[250px] " />
        </div>
      </div>
    </section>
  );
};

export default Merch;
