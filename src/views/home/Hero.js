import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="bg-image"></div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <h1 className="text-warning">Bienvenue chez gps4world</h1>
          <h2 className="text-white">
            Votre Importateur, installateur,
            <br />
            fournisseur de materiels GPS
            <br /> et plateforme de suivi
          </h2>
          <a href="#about" className="btn-get-started scrollto">
            Get Started
          </a>
        </div>
      </section>
    </>
  );
};
