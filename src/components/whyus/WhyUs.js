import React from "react";
import data from "./CardsData";
import { WhyUsCard } from "./WhyUsCard";

export const WhyUs = () => {
  return (
    <section id="why-us" class="why-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div className="content">
              <h3>Pourquoi Choisir gps4world</h3>
              <p>
                Géo-localisation par GPS en temps réel,boîtiers GPS
                made-in-europe avec garantit à vie suivi de Carburant &
                température de haute précision service après vente 24/7 et
                assistance technique de qualité système antivol fiable
                exclusivement développé par nos experts
              </p>
              <div class="text-center">
                <a href="#" class="more-btn">
                  Learn More <i class="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                {data.map((item) => (
                  <WhyUsCard {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
