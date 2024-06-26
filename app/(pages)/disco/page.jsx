import React from "react";
import { songs } from "@/data/songs";

export const metadata = {
  title: "TNRB | Diskografie",
  description:
    "diskography of starting music group Taková normální rodinka band ",
};

const Disco = () => {
  return (
    <section className=" mt-[200px] flex justify-center items-center">
      <div className="container">
        <h2 className="pageText">Celá diskografie</h2>
        <ul className="list-none mt-7">
          {songs.map(({ title, year }, i) => (
            <li key={i}>
              <article
                className={`flex justify-between p-2 rounded-md  ${
                  i % 2 === 0 ? "bg-slate-50 text-black" : "bg-trasparent"
                }`}
              >
                <span>{title}</span>
                <span>{year}</span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Disco;
