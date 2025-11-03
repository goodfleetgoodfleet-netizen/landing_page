import React from "react";
import gestionFlotte from "../../images/gestionFlotte.png";
import geoLocalisation from "../../images/geoLocalisation.png";
import compConduite from "../../images/comportementConduite.png";
import volGasoil from "../../images/volGasoil.png";
import data from "./data";
const Solutions = () => {
  return (
    <section id="solutions" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Nos Solutions</h2>
        </div>
        <div className="row" style={{ color: "#1E7ABB" }}>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12">
            <div className=" text-center border-0">
              <img
                className="card-img-top rounded mx-auto d-block"
                style={{ maxWidth: "120px", maxHeight: "120px" }}
                src={gestionFlotte}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title  text-uppercase">
                  Gestion de flotte{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12">
            <div className=" text-center border-0">
              <img
                className="card-img-top rounded mx-auto d-block"
                style={{ maxWidth: "150px", maxHeight: "150px" }}
                src={geoLocalisation}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title  text-uppercase">Géolocalisation</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12">
            <div className=" text-center border-0">
              <img
                className="card-img-top rounded mx-auto d-block"
                style={{ maxWidth: "100px", maxHeight: "120px" }}
                src={compConduite}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title  text-uppercase">
                  COMPORTEMENT DE
                  <br /> CONDUITE
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12">
            <div className=" text-center border-0">
              <img
                className="card-img-top rounded mx-auto d-block"
                style={{ maxWidth: "150px", maxHeight: "120px" }}
                src={volGasoil}
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title text-uppercase">
                  CONSOMMATION ET <br />
                  VOL DU GASOIL
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-5"
        style={{
          background: "linear-gradient(#f1f7fd, #efefef)",
          height: "200px",
        }}
      ></div>
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#efefef" }}
      >
        <div className="container">
          <div className="row  d-flex justify-content-center">
            {data.map((item) => (
              <div className="col-lg-2 col-md-3  col-6">
                <div className="d-flex flex-column">
                  <img
                    src={item.img}
                    className="mx-auto d-block"
                    style={{ height: "60px" }}
                  />
                  <div
                    className="text-center"
                    style={{
                      color: "#1E7ABB",
                      fontSize: "10pt",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
