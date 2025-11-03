import React from "react";
import produits from "./produitsData";
import accessoires from "./accesoires";
import DemandezDevice from "./DemandezDevice";
const Produits = () => {
  return (
    <>
      <section id="Produits" class="services">
        <div class="container">
          <div class="section-title">
            <h2>Équipements</h2>
          </div>

          <div class="row">
            {produits.map((produit) => (
              <div className="col-lg-4 col-md-6  d-flex align-items-stretch mb-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={produit.img}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex flex-column">
                    <h4 className="card-title">
                      <a href="">{produit.name}</a>
                    </h4>
                    <p className="card-text">{produit.description}</p>
                    <a href="#" class="btn btn-primary mt-auto">
                      Savoir Plus
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class="section-title">
            <h2>Accessoires</h2>
          </div>
          <div className="row">
            <p className="text-center font-italic">
              Afin d’exploiter au mieux les équipements que nous vous offrons,
              il conviendra parfois d’utiliser certains accessoires pour
              répondre aux différents aléas. On vous liste dans cette section
              les accessoires du panier GPS4WORLD.
            </p>
            <hr />
            {accessoires.map((item, index) => {
              return (
                <>
                  {index % 2 === 0 ? (
                    <div className="row align-items-center justify-content-between p-0 my-3">
                      <div className="col-md-4 ">
                        <img
                          className="img-fluid"
                          src={item.img}
                          alt="photo accesoir"
                        />
                      </div>
                      <div className="col-md-8 ">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="row align-items-center justify-content-between p-0 ">
                      <div className="col-md-8">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="col-md-4 ">
                        <img
                          className="img-fluid"
                          src={item.img}
                          alt="photo accesoir"
                        />
                      </div>
                    </div>
                  )}
                  <hr className="py-5" />
                </>
              );
            })}
            {/* <div className="row align-items-center justify-content-between p-0 ">
            <div className="col-md-4 ">
              <img
                className="img-fluid"
                src="https://ae01.alicdn.com/kf/HTB1NnMAmvNNTKJjSspeq6ySwpXaX/Lecteur-de-fr-quence-RFID-125-KHZ-13-56-MHZ-mini-lecteur-de-contr-le-d.jpg_Q90.jpg_.webp"
                alt="photo accesoir"
              />
            </div>
            <div className="col-md-8   ">
              <h2>Lecteur RFID 125 MHz</h2>
              <p className="lead">
                Ce lecteur est une dernière génération des équipements
                radio-fréquence, il utilise plusieurs protocoles de transmission
                à savoir le Wiegand26, IButton DS1990A et DS1991. Ce lecteur
                fiable capte, traite et transmet l’information en temps réel. Il
                peut capter plusieurs identifiants successivement et sans
                erreur. C’est un outil idéal pour l’identification des
                passagers.{" "}
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="row align-items-center justify-content-between p-0 border">
            <div className="col-md-8 p-5 h-100 bg-dark text-light">
              <h2>Lecteur RFID 13,56 MHz</h2>
              <p className="lead">
                Ce lecteur compact est conçu pour être utilisé avec des cartes à
                clés de Basses Fréquences Mifare 13,56 MHz. Il utilise un
                protocole de transmission iButton (1-Wire) et il prend en charge
                un mode ouvert (Lecteur libre) et un mode protégé (cryptage
                d’ID) pour l’accès aux données. Le mode de transmission protégé
                remédie aux différents problèmes de copie et de clonage. Ce
                lecteur est robuste, mécaniquement durable et résistant au feu.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://ae01.alicdn.com/kf/HTB1NnMAmvNNTKJjSspeq6ySwpXaX/Lecteur-de-fr-quence-RFID-125-KHZ-13-56-MHZ-mini-lecteur-de-contr-le-d.jpg_Q90.jpg_.webp"
                alt="photo accesoir"
              />
            </div>
          </div>
          <hr></hr>
          <div className="row align-items-center justify-content-between p-0 border">
            <div className="col-md-4 ">
              <img
                className="img-fluid"
                src="https://ae01.alicdn.com/kf/HTB1NnMAmvNNTKJjSspeq6ySwpXaX/Lecteur-de-fr-quence-RFID-125-KHZ-13-56-MHZ-mini-lecteur-de-contr-le-d.jpg_Q90.jpg_.webp"
                alt="photo accesoir"
              />
            </div>
            <div className="col-md-8 p-5 h-100 bg-dark text-light">
              <h2>Lecteur RFID 125 MHz</h2>
              <p className="lead">
                Ce lecteur est une dernière génération des équipements
                radio-fréquence, il utilise plusieurs protocoles de transmission
                à savoir le Wiegand26, IButton DS1990A et DS1991. Ce lecteur
                fiable capte, traite et transmet l’information en temps réel. Il
                peut capter plusieurs identifiants successivement et sans
                erreur. C’est un outil idéal pour l’identification des
                passagers.{" "}
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="row align-items-center justify-content-between p-0 border">
            <div className="col-md-8 p-5 h-100 bg-dark text-light">
              <h2>Lecteur RFID 13,56 MHz</h2>
              <p className="lead">
                Ce lecteur compact est conçu pour être utilisé avec des cartes à
                clés de Basses Fréquences Mifare 13,56 MHz. Il utilise un
                protocole de transmission iButton (1-Wire) et il prend en charge
                un mode ouvert (Lecteur libre) et un mode protégé (cryptage
                d’ID) pour l’accès aux données. Le mode de transmission protégé
                remédie aux différents problèmes de copie et de clonage. Ce
                lecteur est robuste, mécaniquement durable et résistant au feu.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="img-fluid"
                src="https://ae01.alicdn.com/kf/HTB1NnMAmvNNTKJjSspeq6ySwpXaX/Lecteur-de-fr-quence-RFID-125-KHZ-13-56-MHZ-mini-lecteur-de-contr-le-d.jpg_Q90.jpg_.webp"
                alt="photo accesoir"
              />
            </div>
          </div> */}
          </div>
        </div>
      </section>

      <DemandezDevice />
    </>
  );
};
export default Produits;
