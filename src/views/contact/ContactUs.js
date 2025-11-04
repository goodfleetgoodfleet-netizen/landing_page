import React, {useState} from "react";
import {send} from "emailjs-com";

export const ContactUs = () => {
  const initialState = {
    name: "",
    email: "",
    object: "",
    message: "",
  }
  const [contact, setContact] = useState(initialState);
  const onSubmit = e => {
    e.preventDefault();
    //Send email
    send('service_xyuy0ra','template_ffldhdn',contact, 'user_V3XdvICWgQJaLVLpIa1Pl').then(res => {
      alert(" envoyée"); setContact(initialState);
    }).catch(err => console.log(err));
  }

  const handleChange = e => {
    setContact({...contact,[e.target.name]: e.target.value});
  }

  console.log(contact)
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contactez-nous</h2>
        </div>
      </div>

      <div>
    
        <iframe
          style={{ border: "0", width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6647.724734323929!2d-7.6175981!3d33.5829226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3483e68d247%3A0xe0f0cb0c1cc61ef8!2sGPS4WORLD!5e0!3m2!1sen!2sma!4v1642252477843!5m2!1sen!2sma"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Adresse </h4>
                <p>46, Boulvard Zerktouni Étage 5, N°17 Casablanca Maroc</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email </h4>
                <p>contact@gps4world.ma</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Télephones </h4>
                <p>+212 660-559129</p>
                <p>+212 662-409728</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              onSubmit={onSubmit}
              className="php-email-form"
            >
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    required
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Votre Nom"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    required
                    type="email"
                    className="form-control"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                    id="email"
                    placeholder="Votre Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  required
                  type="text"
                  className="form-control"
                  name="object"
                  value={contact.object}
                  onChange={handleChange}
                  id="subject"
                  placeholder="Objet"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
