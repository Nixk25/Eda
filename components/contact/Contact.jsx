const Contact = () => {
  return (
    <section id="contact" className=" scroll-pt-[200px]">
      <div className="container">
        <div>
          <div className="flex flex-col items-center justify-center p-10 mt-10 text-white bg-black rounded-md shadow-2xl">
            <h3 className="title">Kontakty</h3>
            <div className="flex flex-col gap-10 text-center sm:flex-row">
              <a
                href="mailto:info@tnr-band.cz"
                className="text-xl cursor-pointer"
              >
                info@tnr-band.cz
              </a>
              <div className="flex flex-col">
                <span>Umělecká vedoucí</span>
                <span>Jana Vannay</span>
                <div className="flex gap-3">
                  <a href="tel:+420 732 513 490">tel: +420 731 180 609</a>
                </div>
              </div>
              <div className="flex flex-col">
                <span>Umělecká vedoucí</span>
                <span>Lucie Baierová</span>
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
