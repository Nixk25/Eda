import Link from "next/link";
import Image from "next/image";
import React from "react";
import music1 from "../public/nejdetovejs.png";
import music2 from "../public/spagata.png";

const Disco = () => {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="title text-center">Nejnovější Diskografie</h2>
        <div className="flex gap-5 w-full sm:flex-row flex-col">
          <Link
            href="https://youtu.be/FCpB-ltsDYE?si=G6VJk2MQHNlBHvHl"
            target="_blank"
          >
            <div>
              <Image
                src={music1}
                alt="music nejde to vejš from music group Taková normální rodinka"
                className="rounded-md my-5"
                placeholder="blur"
              />
              <h3 className="text-xl font-semibold mb-3  ">Nejde to vejš</h3>
            </div>
          </Link>
          <Link
            href="https://youtu.be/6OVLi9TIEpY?si=SSJ2OVv9hFf_u0Ae"
            target="_blank"
          >
            <div>
              <Image
                src={music2}
                alt="music nejde to vejš from music group Taková normální rodinka"
                className="rounded-md my-5"
              />
              <h3 className="text-xl font-semibold mb-3 ">Špagáta</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Disco;
