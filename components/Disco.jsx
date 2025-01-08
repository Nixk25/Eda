import Link from "next/link";
import Image from "next/image";
import React from "react";

const Disco = () => {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="text-center title">Nejnovější Diskografie</h2>
        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Link
            href="https://youtu.be/cZZTGzLRRnw?si=Age9CzqE1V9ID6op"
            target="_blank"
            className="w-full "
          >
            <div className="w-full h-full ">
              <div className="relative w-full h-full">
                <Image
                  src="https://img.youtube.com/vi/cZZTGzLRRnw/maxresdefault.jpg"
                  width={400}
                  height={400}
                  alt="youtube video Tatova holka from music group Taková normální rodinka"
                  className="w-full h-full my-5 rounded-md"
                  placeholder="blur"
                  blurDataURL="https://img.youtube.com/vi/cZZTGzLRRnw/maxresdefault.jpg"
                />
              </div>
              <h3 className="my-5 text-xl font-semibold ">Tátova holka</h3>
            </div>
          </Link>
          <Link
            href="https://youtu.be/rB5KPLC6KGg?si=sMZ_VaRc0SuCN7Ya"
            target="_blank"
            className="w-full "
          >
            <div className="w-full h-full ">
              <div className="relative w-full h-full">
                <Image
                  src="https://img.youtube.com/vi/rB5KPLC6KGg/maxresdefault.jpg"
                  alt="youtube video Grinch from music group Taková normální rodinka"
                  width={400}
                  height={500}
                  className="w-full h-full my-5 rounded-md"
                />
              </div>
              <h3 className="my-3 text-xl font-semibold ">Grinch</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Disco;
