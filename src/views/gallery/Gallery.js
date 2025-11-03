import React from "react";
import img1 from "./1.jpeg";
import img2 from "./2.jpeg";
import img3 from "./3.jpeg";

const Gallery = () => {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6  d-flex justify-content-center align-items-stretch">
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="img-fluid"
                    style={{ height: "620px" }}
                    src={img1}
                    alt="Los Angeles"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ height: "620px" }}
                    src={img2}
                    alt="Chicago"
                    className="img-fluid"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{ height: "620px" }}
                    src={img3}
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>
              GPS4WORLD vous donne ses bonnes raisons pour être son client
            </h3>
            <p>
              GPS4WORLD est spécialisée dans la commercialisation et
              l’installation de modules équipés de plusieurs composants de très
              haute performance en matière de communication et de localisation.
            </p>

            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-chat"></i>
              </div>
              <h4 className="title">
                <a href="">Conseil technique</a>
              </h4>
              <p className="description">
                GPS4WORLD oriente ses clients pour choisir les solutions les
                plus adapté à leur besions.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bx bxs-medal"></i>
              </div>
              <h4 className="title">
                <a href="">Qualité du service</a>
              </h4>
              <p className="description">
                GPS4WORLD exploite les dernières technologies et les meilleurs
                matérieux pour offrir un service de bonne qualité à ses clients.
              </p>
            </div>

            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-check-shield"></i>
              </div>
              <h4 className="title">
                <a href="">Sécurité des données</a>
              </h4>
              <p className="description">
                GPS4WORLD implémente des solutions qui respecte les normes de la
                sécurité informatique, réseau et automobile pour assurer une
                protection complète des données.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
