import { Phone } from "lucide-react";
import Form from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className=" scroll-pt-[200px]">
      <div className="container">
        <h2 className="title text-center">Kontaktujte nás</h2>
        <div>
          <Form />
          <div className="flex justify-center items-center flex-col mt-10 bg-black shadow-2xl text-white p-10 rounded-md">
            <h3 className="title">Kontakty</h3>
            <div className="flex gap-10 sm:flex-row flex-col text-center">
              <div className="flex flex-col">
                <span>Umělecká vedoucí</span>
                <span>Lucie Baierová</span>
                <div className="flex gap-3">
                  <a href="tel:+420 732 513 490">tel: +420 732 513 490</a>
                </div>
              </div>
              <div className="flex flex-col">
                <span>Umělecká vedoucí</span>
                <span>Jana Vannay</span>
                <div className="flex gap-3">
                  <a href="tel:+420 732 513 490">tel: +420 732 513 490</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
