import React from "react";
import { ContactUs } from "../views/contact/ContactUs";
import Gpsapp from "../views/Gpsapp";
import { Home } from "../views/home/Home";
import Produits from "../views/produit/Produits";
import Solutions from "../views/solutions/Solutions";
import Gallery from "../views/gallery/Gallery";

const MainContent = () => {
  return (
    <main id="main">
      <Home />
      <Gallery />
      <Gpsapp />
      <Solutions />
      <Produits />

      <ContactUs />
    </main>
  );
};
export default MainContent;
