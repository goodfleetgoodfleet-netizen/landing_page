import React from "react";
import "./Hero.css";

export const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(
      135deg,
      rgba(36, 129, 167, 0.85) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ), url(${process.env.PUBLIC_URL}/assets/img/home.jpg)`,
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background" style={backgroundImageStyle}>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>GPS4World</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-main">Solutions de</span>
            <span className="hero-title-brand">Géolocalisation</span>
            <span className="hero-title-main">Professionnelle</span>
          </h1>
          
          <p className="hero-description">
            Gérez votre flotte avec précision grâce à nos systèmes GPS avancés
          </p>
          
          <div className="hero-actions">
            <a href="#appointment" className="btn btn-primary">
              Demander un devis
            </a>
            <a href="#about" className="btn btn-secondary">
              Découvrir nos solutions
            </a>
          </div>
        </div>
      </div>
      
 
    </section>
  );
};
