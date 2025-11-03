import rfid1356 from "../../images/lecteurRFID1356.jpg";
import rfid125 from "../../images/lecteur-RFID-125.png";
import cleibutton from "../../images/cleIButton.png";
import carteRFID from "../../images/carte-rfid.jpg";
import dutAf from "../../images/dutAf.png";
import dutGsm from "../../images/dutGsm.png";
import dutE from "../../images/DUT-E.jpg";
import kitAntiSpionnage from "../../images/kitAntiSpionage.jpeg";
import dfmLin from "../../images/dfmLinéaire.png";
import dfmDef from "../../images/dfmDifferentiel.png";
import sondeTemperature from "../../images/sondeTemperature.jpg";
import capteurPorteCapot from "../../images/capteurPorteCap.jpg";
import capteurBenne from "../../images/CAPTEUR-DE-BENNE.jpg";
import transmetteurPresion from "../../images/transmetteurPresion.jpg";
import BIEZEUR from "../../images/BIEZEUR.jpg";
const accessoires = [
  {
    title: "Lecteur RFID 13,56 MHz",
    img: rfid1356,
    description:
      "Ce lecteur compact est conçu pour être utilisé avec des cartes à clés de Basses Fréquences Mifare 13,56 MHz. Il utilise un protocole de transmission iButton (1-Wire) et il prend en charge un mode ouvert (Lecteur libre) et un mode protégé (cryptage d’ID) pour l’accès aux données. Le mode de transmission protégé remédie aux différents problèmes de copie et de clonage. Ce lecteur est robuste, mécaniquement durable et résistant au feu.",
  },
  {
    title: "Lecteur RFID 125 MHz",
    img: rfid125,
    description:
      "Ce lecteur est une dernière génération des équipements radio-fréquence, il utilise plusieurs protocoles de transmission à savoir le Wiegand26, IButton DS1990A et DS1991. Ce lecteur fiable capte, traite et transmet l’information en temps réel. Il peut capter plusieurs identifiants successivement et sans erreur. C’est un outil idéal pour l’identification des passagers.",
  },
  {
    title: "Clé IButton",
    img: cleibutton,
    description:
      "Si vous craignez le risque de perte de votre carte et que vous préférez utiliser des clés au lieu des badges, cet accessoire RFID composé de deux périphériques (clé et lecteur) vous offre ces fonctionnalités. Une fois la clé connectée au lecteur, le signal d’identification est envoyé au dispositif de suivi GPS.",
  },
  {
    title: "Carte RFID",
    img: carteRFID,
    description:
      "La carte de proximité ou carte proxy est une carte à puce ne nécessitant pas de contact physique. Elle peut être lue sans l’insérer dans un lecteur, comme l’exigent les cartes à bande magnétiques classiques telles que les cartes de crédit et les cartes à puce. Cet accessoire fait de l’identification radiofréquence une opération simple et rapide. Pour chaque gamme de lecteur, nous offrons une carte compatible.",
  },
  {
    title: "Sonde de Carburant DUT AF",
    img: dutAf,
    description:
      "La sonde de niveau de carburant est un capteur de niveau installé dans les réservoirs. Il mesure les niveaux en permanence et transmets l’information au dispositif GPS. Ce capteur vous offre la possibilité de suivre l’ensemble des variations de vos réservoirs et vous permet de suivre de près les différents remplissages ou vols de carburant.",
  },
  {
    title: "Sonde de Carburant DUT GSM",
    img: dutGsm,
    description:
      "La sonde de niveau de carburant GSM est un dispositif qui capte mesure le niveau de carburant dans un réservoir et le transmets via réseau GPRS à nos serveurs sont avoir recours à un équipement de géolocalisation. Cette sonde est généralement utilisée pour le suivi de l’évolution du carburant dans les citernes fixes    ",
  },
  {
    title: "Extension DUT 1M",
    img: dutE,
    description:
      "Quand la hauteur du réservoir augmente, les sondes DUT (700mm) ne peuvent pas répondre sans utilisation d’extension qui peuvent prolonger la longueur jusqu’à 6000 mm.",
  },
  {
    title: "Kit d’anti-siphonnage",
    img: kitAntiSpionnage,
    description:
      "Ce dispositif mécanique élimine tout risque de vol de carburant, il, est muni d’un système efficace de boule irréversible, empêchant ainsi toute tentative de vol ou manœuvre frauduleuse de siphonage du produit",
  },
  {
    title: "Débimètre DFM Linéaire",
    img: dfmLin,
    description:
      "Le débitmètre de carburant DFM est conçu pour mesurer la consommation de carburant diesel dans les véhicules légers, lourd ou tout type d’engins à moteur de combustion. Ce dispositif peut être appliqué pour le calcul du carburant à la fois d’une façon autonome et en tant que partie de la plateforme de de suivi de véhicules. Il permet de recevoir des informations objectives sur la consommation effective du carburant et sur le temps de combustion des véhicules.",
  },
  {
    title: "Débimètre DFM Différentiel",
    img: dfmDef,
    description:
      "Ce débimétre est le plus performant de sa classe, car il calcule la différence entre le débit entrant et sortant du réservoir, ce qui lui permet d’exclure les retours de carburant du taux de consommation des véhicules. Pour les véhicules anciens, ce type d’équipement est fortement conseillé.",
  },
  {
    title: "Sonde de température",
    img: sondeTemperature,
    description:
      "Il s’agit d’un capteur d’humidité et de température à coût attractif doté d’une interface numérique 1-Wire. Le capteur est calibré et n’a pas besoin de composants supplémentaires pour vous permettre de mesurer avec précision l’humidité et la température.",
  },
  {
    title: "Capteur de porte ou de capot",
    img: capteurPorteCapot,
    description:
      "Attaché à vos portes ou à votre capot, ce capteur vous permet d’identifier l’état de vos portes ou de votre capot en vous envoyant des alertes à chaque ouverture. Avec un mécanisme poussoir robuste, le capteur change d’état une fois que la porte ou le capot s’ouvrent En effet, ce capteur est composé d’un interrupteur fixé sur le cadre de la porte qui se ferme uniquement quand la porte est fermée.",
  },
  {
    title: "Capteur de benne",
    img: capteurBenne,
    description:
      "Un capteur d’état peut être installé dans vos camions bennes et vous alerter sur les différentes actions de levage de vos bennes.",
  },
  {
    title: "Transmetteur de pression",
    img: transmetteurPresion,
    description:
      "Ou capteur de pression, est un capteur électrique pouvant être installé dans les pompes hydrauliques de vos véhicules ou engins, et vous informe instantanément sur le travail des pompes hydrauliques. Ce capteur est une solution idéale pour suivre de près l’activité des engins de BTP.",
  },
  {
    title: "Biezeur",
    img: BIEZEUR,
    description:
      "Ce petit gadget permet de déclencher une alerte sonore si les conditions qui lui ont été assignés sont satisfaites.",
  },
];

export default accessoires;
