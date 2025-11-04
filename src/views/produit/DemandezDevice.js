import React, {useState} from "react";
import {send} from "emailjs-com";

const DemandezDevice = () => {
  const initialState = {
    raison_social: "",
    email: "",
    tel: "",
    quantity: "",
    utilisation: "",
    options: "",
    message: "",
  }
  const [demande, setDemande] = useState(initialState);
  console.log(demande)
  const onSubmit = (e) => {
    e.preventDefault();
    //Send demande
    send('service_xyuy0ra','template_eug1a6b',demande, 'user_V3XdvICWgQJaLVLpIa1Pl').then(res => {
      alert("Demande envoyée"); setDemande(initialState);
    }).catch(err => console.log(err));
  }
  const handleChange = e=> {
    setDemande({...demande, [e.target.name]: e.target.value})
  }
  return (
    <section id="appointment" className="appointment section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Demander votre devis</h2>
          <p></p>
        </div>

        <form
            onSubmit={onSubmit}
          className="php-email-form"
        >
          <div className="form-row">
            <div className="col-md-4 form-group">
              <input
                  required={true}
                type="text"
                name="raison_social"
                value={demande.raison_social}
                onChange={handleChange}
                className="form-control"
                id="raison_social"
                placeholder="Nom ou raison social"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input
                  required={true}
                type="email"
                className="form-control"
                name="email"
                value={demande.email}
                onChange={handleChange}
                id="email"
                placeholder="Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <input
                  required={true}
                type="tel"
                className="form-control"
                name="tel"
                value={demande.tel}
                onChange={handleChange}
                id="tel"
                placeholder="Téléphone"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 form-group">
              <input
                  required={true}
                type="number"
                name="quantity"
                value={demande.quantity}
                onChange={handleChange}
                className="form-control"
                id="quantity"
                placeholder="Quantité"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <select
                name="utilisation"
                value={demande.utilisation}
                onChange={handleChange}
                id="utilisation"
                className="form-control"
              >
                <option value="">Utilisation pour?</option>
                <option value="Voitures">Voitures</option>
                <option value="Motorcycles">Motorcycles</option>
                <option value="Utilitaires">Utilitaires</option>
                <option value="Camions">Camions</option>
                <option value="Poids-lourds">Poids-lourds</option>
                <option value="Engins BTP">Engins BTP</option>
                <option value="Conteneurs">Conteneurs</option>
                <option value="Personnels">Personnels</option>
                <option value="Autres">Autres</option>
              </select>
              <div className="validate"></div>
            </div>
            <div className="col-md-4 form-group">
              <select name="options" value={demande.options} onChange={handleChange} id="doctor" className="form-control">
                <option value="">Options?</option>
                <option value="Sans options">Sans options</option>
                <option value="Avec anti-vol carburant">Avec anti-vol carburant</option>
                <option value="Avec geoLocalisation internationale">
                  Avec geoLocalisation internationale
                </option>
                <option value="Avec identification conducteur">Avec identification conducteur</option>
                <option value="Avec capteur d'ouverture capot">
                  Avec capteur d'ouverture capot
                </option>
              </select>
              <div className="validate"></div>
            </div>
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              value={demande.message}
              onChange={handleChange}
              rows="5"
              placeholder="SVP, donnez-nous plus d'informations sur votre demande dans ce message"
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Votre demande a été enregistrée. Merci!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Envoyer la demande</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DemandezDevice;
