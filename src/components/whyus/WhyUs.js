import React from "react";
import data from "./CardsData";
import { WhyUsCard } from "./WhyUsCard";

export const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Pourquoi Choisir GPS4World</h3>
              <p>
                Spécialiste de la géolocalisation GPS professionnelle, GPS4World vous 
                accompagne avec des solutions made-in-Europe garanties à vie. 
                Bénéficiez d'un suivi de carburant et de température de haute précision, 
                d'un service après-vente 24/7, d'une assistance technique experte et 
                d'un système antivol fiable développé par nos spécialistes.
              </p>
              <div className="text-center">
                <a href="#produits" className="more-btn">
                  En savoir plus <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                {data.map((item, index) => (
                  <WhyUsCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
