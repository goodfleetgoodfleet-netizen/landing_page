import React from "react";
import gpsapp from "../images/gpsapp.png";
const Gpsapp = () => {
  return (
    <section className="container-fluid " id="gpsapp">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-12  pt-5 content">
            <h1>Découvrez les principales fonctionnalités de GPS4WORLD</h1>
            <p>
              Désirez-vous connaitre de prés comment Gps4World peut accompagner
              votre entreprise dans l’optimisation de ses flux de transport ?
              Vous trouverez dans cette section des guides utilisateurs et des
              descriptions fonctionnelles qui vous permetteront d’exploiter au
              mieux notre solution afin d’évaluer la performance de votre
              flotte.
            </p>
            <a
              href="#"
              className="bg-warning px-5 py-2 text-dark mt-5"
              style={{ borderRadius: "30px" }}
            >
              En savoir plus
            </a>
          </div>
          <div className="col-md-5 col-sm-12 ">
            <img
              className="img-fluid mt-5"
              src={gpsapp}
              // style={{ width: "600px", height: "340px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gpsapp;
