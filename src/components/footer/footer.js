import React from "react";
import logo from "../../images/logo.jpeg";
import carte from "../../images/carte.png";
const Footer = () => {
  return (
    <footer className="bg-dark text-white" id="footer">
      <div className="footer-top bg-dark ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 text-center">
              <h3>
                <img src={logo} style={{ width: 150 }} />
              </h3>
              <p>
                GPS4WORLD est une société spécialisée dans la distribution,
                l'installation, l'import et l'export de matériels gps et dérivés
              </p>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h5>Casablanca</h5>
                  <p>
                    46, Boulevard Zerktouni <br />
                    Étage 5, N°17 Casablanca
                    <br />
                    Casablanca, Maroc <br />
                    <br />
                    <strong>Phone:</strong> +212 660 559129
                    <br />
                    <strong>Email:</strong> contact@gps4world.ma
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h5>Meknes</h5>
                  <p>
                    AV Zitoune. Marjanen Quartier <br />
                    ryad azzaytoune à coté cafe blanco
                    <br />
                    Meknes, Maroc <br />
                    <br />
                    <strong>Phone:</strong> +212 660 559129
                    <br />
                    <strong>Email:</strong> contact@gps4world.ma
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h5>Agadir</h5>
                  <p>
                    Boulevard Mohammed VI <br />
                    Quartier industriel Ait melloul
                    <br />
                    Agadir, Maroc <br />
                    <br />
                    <strong>Phone:</strong> +212 660 559129
                    <br />
                    <strong>Email:</strong> contact@gps4world.ma
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-contact">
                  <img className="w-50" src={carte} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="mr-md-auto text-center text-md-left">
          <div className="copyright">
            &copy; Copyright
            <strong>
              <span> Gps4World</span>
            </strong>
            . All Rights Reserved
          </div>
          <div>
            Devloped by <a href="#">Moussa El Aqqaoui</a>
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
