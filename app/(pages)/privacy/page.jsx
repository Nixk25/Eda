import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      {" "}
      <h1>Zásady ochrany osobních údajů</h1>
      <p>
        Vaše soukromí je pro nás důležité. Níže uvádíme, jak nakládáme s vašimi
        údaji.
      </p>
      <h2>Jaké údaje zpracováváme?</h2>
      <p>
        Zpracováváme pouze jméno, předmět zprávy a e-mail, které poskytnete ve
        formuláři.
      </p>
      <h2>Proč údaje zpracováváme?</h2>
      <p>Údaje slouží výhradně k odpovědi na váš dotaz.</p>
      <h2>Vaše práva</h2>
      <p>
        Máte právo na přístup, opravu nebo výmaz vašich údajů. Kontaktujte nás
        na adresu{" "}
        <a href="mailto:nicolas.melda@icloud.com">nicolas.melda@icloud.com</a>.
      </p>
    </div>
  );
};

export default page;
