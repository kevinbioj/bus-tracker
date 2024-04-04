import { Network, Route } from "~/@types";

const liaRoutes: Route[] = [
  {
    id: "LIA:T",
    noCartridge: true,
    name: "T",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        autoHide: true,
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "1508SUPX", text: "GRAND HAMEAU" }],
        },
      },
      {
        id: ["Pré Fleuri"],
        autoHide: true,
        name: "Pré Fleuri",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "1508SUPX", text: "PRE FLEURI" }],
        },
      },
      {
        id: ["La Plage"],
        autoHide: true,
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "1508SUPX", text: "LA PLAGE" }],
        },
      },
      {
        id: ["Rond-Point"],
        autoHide: true,
        name: "Rond-Point",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "1508SUPX", text: "ROND-POINT" }],
        },
      },
    ],
  },
  {
    id: "LIA:A",
    noCartridge: true,
    name: "A",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "A",
          },
          pages: [{ font: "1508SUPX", text: "GRAND HAMEAU" }],
        },
      },
      {
        id: ["La Plage"],
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "A",
          },
          pages: [{ font: "1508SUPX", text: "LA PLAGE" }],
        },
      },
    ],
  },
  {
    id: "LIA:B",
    noCartridge: true,
    name: "B",
    colors: { background: "#00BB00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pré Fleuri"],
        name: "Pré Fleuri",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#00BB00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "B",
          },
          pages: [{ font: "1508SUPX", text: "PRE FLEURI" }],
        },
      },
      {
        id: ["La Plage"],
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#00BB00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "B",
          },
          pages: [{ font: "1508SUPX", text: "LA PLAGE" }],
        },
      },
      {
        id: ["Rond-Point"],
        autoHide: true,
        name: "Rond-Point",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#00BB00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "B",
          },
          pages: [{ font: "1508SUPX", text: "ROND-POINT" }],
        },
      },
    ],
  },
  {
    id: "LIA:01",
    noCartridge: true,
    name: "1",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#009FE3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "1",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS GARE" }],
        },
      },
      {
        id: ["La Plage"],
        autoHide: true,
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#009FE3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "1",
          },
          pages: [{ font: "1507SUPX", text: "LE HAVRE LA PLAGE" }],
        },
      },
      {
        id: ["Ste-Adresse La Heve"],
        name: "La Hève",
        city: "SAINTE-ADRESSE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#009FE3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "1",
          },
          pages: [{ font: "1507SUPX", text: "STE-ADRESSE LA HEVE" }],
        },
      },
    ],
  },
  {
    id: "LIA:C2",
    noCartridge: true,
    name: "C2",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Place d'Armes"],
        name: "Place d'Armes",
        city: "HARFLEUR",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
          },
          pages: [{ font: "1407SUPX", text: "HARFLEUR PLACE D'ARMES" }],
        },
      },
      {
        id: ["Grand Quai"],
        name: "Grand Quai",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GRAND QUAI" }],
        },
      },
    ],
  },
  {
    id: "LIA:03",
    noCartridge: true,
    name: "3",
    colors: { background: "#13A538", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#13A538",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "3",
          },
          pages: [{ font: "1507SUPX", text: "LE HAVRE GRAND HAMEAU" }],
        },
      },
      {
        id: ["Graville"],
        name: "Graville",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#13A538",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "3",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GRAVILLE" }],
        },
      },
    ],
  },
  {
    id: "LIA:04",
    noCartridge: true,
    name: "4",
    colors: { background: "#F7A823", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#F7A823",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "4",
          },
          pages: [{ font: "1507SUPX", text: "LE HAVRE GRAND HAMEAU" }],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#F7A823",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "4",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
    ],
  },
  {
    id: "LIA:05",
    noCartridge: true,
    name: "5",
    colors: { background: "#E6007E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["05 Sainte Adresse Ignauval"],
        name: "Ignauval",
        city: "SAINTE-ADRESSE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "5",
          },
          pages: [{ font: "1507SUPX", text: "STE-ADRESSE IGNAUVAL" }],
        },
      },
      {
        id: ["05 Graville"],
        name: "Graville",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "5",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GRAVILLE" }],
        },
      },
    ],
  },
  {
    id: "LIA:06",
    noCartridge: true,
    name: "6",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [
      {
        id: ["O. Niemeyer"],
        name: "Oscar Niemeyer",
        city: "LE HAVRE",
        girouette: {
          routeNumber: { font: "1513B3E1", backgroundColor: "#FFE500", textColor: "#000000", text: "6" },
          pages: [{ font: "1508SUPX", text: "OSCAR NIEMEYER" }],
        },
      },
      {
        id: ["Funiculaire / C. Monet / St Jo."],
        autoHide: true,
        name: "Institution Saint-Joseph",
        city: "LE HAVRE",
        girouette: {
          routeNumber: { font: "1513B3E1", backgroundColor: "#FFE500", textColor: "#000000", text: "6" },
          pages: [
            { font: "1507SUPX", text: "LYCEE CLAUDE MONET" },
            { font: "1507SUPX", text: "INSTITUTION ST-JOSEPH" },
          ],
        },
      },
      {
        id: ["Mont Gaillard"],
        autoHide: true,
        name: "Mont Gaillard",
        city: "LE HAVRE",
        girouette: {
          routeNumber: { font: "1513B3E1", backgroundColor: "#FFE500", textColor: "#000000", text: "6" },
          pages: [{ font: "1508SUPX", text: "MONT-GAILLARD" }],
        },
      },
      {
        id: ["Place Jenner"],
        name: "Place Jenner",
        city: "LE HAVRE",
        girouette: {
          routeNumber: { font: "1513B3E1", backgroundColor: "#FFE500", textColor: "#000000", text: "6" },
          pages: [{ font: "1508SUPX", text: "PLACE JENNER" }],
        },
      },
    ],
  },
  {
    id: "LIA:07",
    noCartridge: true,
    name: "7",
    colors: { background: "#0069B4", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caucriauville"],
        name: "Caucriauville",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#0069B4",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "7",
          },
          pages: [{ font: "1508SUPX", text: "CAUCRIAUVILLE" }],
        },
      },
      {
        id: ["Funiculaire C.Monet / St Jo."],
        autoHide: true,
        name: "Institution Saint-Joseph",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#0069B4",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "7",
          },
          pages: [
            { font: "1507SUPX", text: "LYCEE CLAUDE MONET" },
            { font: "1507SUPX", text: "INSTITUTION ST-JOSEPH" },
          ],
        },
      },
      {
        id: ["Le Havre MuMA"],
        name: "MuMa",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#0069B4",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "7",
          },
          pages: [{ font: "1508SUPX", text: "MuMa" }],
        },
      },
    ],
  },
  {
    id: "LIA:08",
    noCartridge: true,
    name: "8",
    colors: { background: "#E67900", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E67900",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "8",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
      {
        id: ["Soquence"],
        name: "Soquence",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E67900",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "8",
          },
          pages: [{ font: "1508SUPX", text: "SOQUENCE" }],
        },
      },
    ],
  },
  {
    id: "LIA:09",
    noCartridge: true,
    name: "9",
    colors: { background: "#BEBD00", text: "#000000" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#BEBD00",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "9",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS GARE" }],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#BEBD00",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "9",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
    ],
  },
  {
    id: "LIA:10",
    noCartridge: true,
    name: "10",
    colors: { background: "#95C11F", text: "#000000" },
    destinations: [
      {
        id: ["Parc de l'Estuaire"],
        name: "Parc de l'Estuaire",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#95C11F",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [{ font: "1508SUPX", text: "PARC DE L'ESTUAIRE" }],
        },
      },
      {
        id: ["Grand Hameau"],
        autoHide: true,
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#95C11F",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [{ font: "1507SUPX", text: "LE HAVRE GD HAMEAU" }],
        },
      },
      {
        id: ["Octeville S/ Mer Littoral"],
        name: "Littoral",
        city: "OCTEVILLE-SUR-MER",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#95C11F",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [{ font: "1508SUPX", text: "OCTEVILLE LITTORAL" }],
        },
      },
    ],
  },
  {
    id: "LIA:11",
    noCartridge: true,
    name: "11",
    colors: { background: "#E63312", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E63312",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS GARE" }],
        },
      },
      {
        id: ["Etainhus - St Romain"],
        name: "Gare d'Étainhus - Saint-Romain",
        city: "ÉTAINHUS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#E63312",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [{ font: "1508SUPX", text: "ETAINHUS ST-ROMAIN" }],
        },
      },
    ],
  },
  {
    id: "LIA:12",
    noCartridge: true,
    name: "12",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
      {
        id: ["La Breque"],
        autoHide: true,
        name: "La Brèque",
        city: "HARFLEUR",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [{ font: "1508SUPX", text: "LA BREQUE" }],
        },
      },
      {
        id: ["St Romain de Colbosc"],
        autoHide: true,
        name: "Saint-Romain-de-Colbosc",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [{ font: "1507SUPX", text: "ST-ROMAIN-DE-COLBOSC" }],
        },
      },
      {
        id: ["Etainhus - St Romain"],
        name: "Gare d'Étainhus - Saint-Romain",
        city: "ÉTAINHUS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [{ font: "1508SUPX", text: "ETAINHUS ST-ROMAIN" }],
        },
      },
    ],
  },
  {
    id: "LIA:13",
    noCartridge: true,
    name: "13",
    colors: { background: "#FAC075", text: "#000000" },
    destinations: [
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FAC075",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "13",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
      {
        id: ["Grand Hameau"],
        autoHide: true,
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FAC075",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "13",
          },
          pages: [{ font: "1507SUPX", text: "LE HAVRE GRAND HAMEAU" }],
        },
      },
      {
        id: ["Etretat Gare"],
        name: "Gare",
        city: "ÉTRETAT",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#FAC075",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "13",
          },
          pages: [{ font: "1508SUPX", text: "ETRETAT GARE" }],
        },
      },
    ],
  },
  {
    id: "LIA:14",
    noCartridge: true,
    name: "14",
    colors: { background: "#009640", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS GARE" }],
        },
      },
      {
        id: ["Hopital J. Monod"],
        name: "Hôpital Jacques Monod",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [{ font: "1507SUPX", text: "HOPITAL JACQUES MONOD" }],
        },
      },
    ],
  },
  {
    id: "LIA:15",
    noCartridge: true,
    name: "15",
    colors: { background: "#DB679B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Z.I. Portuaire"],
        name: "Z.I. Portuaire",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#DB679B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "15",
          },
          pages: [{ font: "1508SUPX", text: "Z.I. PORTUAIRE" }],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#DB679B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "15",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
    ],
  },
  {
    id: "LIA:16",
    noCartridge: true,
    name: "16",
    colors: { background: "#5B358C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mont Gaillard"],
        name: "Mont-Gaillard",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#5B358C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "16",
          },
          pages: [{ font: "1508SUPX", text: "MONT-GAILLARD" }],
        },
      },
      {
        id: ["Dollemard"],
        name: "Dollemard",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#5B358C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "16",
          },
          pages: [{ font: "1508SUPX", text: "DOLLEMARD" }],
        },
      },
    ],
  },
  {
    id: "LIA:17",
    noCartridge: true,
    name: "17",
    colors: { background: "#83D0F5", text: "#000000" },
    destinations: [
      {
        id: ["Parc Estuaire"],
        name: "Parc de l'Estuaire",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#83D0F5",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "17",
          },
          pages: [{ font: "1508SUPX", text: "PARC DE L'ESTUAIRE" }],
        },
      },
      {
        id: ["Caucriauville"],
        name: "Caucriauville",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#83D0F5",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "17",
          },
          pages: [{ font: "1407SUPX", text: "LE HAVRE CAUCRIAUVILLE" }],
        },
      },
    ],
  },
  {
    id: "LIA:18",
    noCartridge: true,
    name: "18",
    colors: { background: "#56543C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Z.I. Portuaire"],
        name: "Les Neiges",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#56543C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "18",
          },
          pages: [{ font: "1508SUPX", text: "LES NEIGES" }],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#56543C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "18",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
    ],
  },
  {
    id: "LIA:19",
    noCartridge: true,
    name: "19",
    colors: { background: "#82368C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Z.I. Portuaire"],
        name: "Z.I. Portuaire",
        city: "SANDOUVILLE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#82368C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "19",
          },
          pages: [{ font: "1507SUPX", text: "SANDOUVILLE RENAULT" }],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#82368C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "19",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
    ],
  },
  {
    id: "LIA:21",
    noCartridge: true,
    name: "21",
    colors: { background: "#4E55A1", text: "#FFFFFF" },
    destinations: [
      {
        id: [" Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#4E55A1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "21",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS GARE" }],
        },
      },
      {
        id: ["Etretat Grandval"],
        name: "Grandval",
        city: "ÉTRETAT",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#4E55A1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "21",
          },
          pages: [{ font: "1508SUPX", text: "ETRETAT GRANDVAL" }],
        },
      },
    ],
  },
  {
    id: "LIA:22",
    noCartridge: true,
    name: "22",
    colors: { background: "#104C77", text: "#FFFFFF" },
    destinations: [
      {
        id: ["22 Parc Estuaire"],
        name: "Parc de l'Estuaire",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#104C77",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "22",
          },
          pages: [{ font: "1508SUPX", text: "PARC DE L'ESTUAIRE" }],
        },
      },
      {
        id: ["22 Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#104C77",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "22",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE GARES" }],
        },
      },
    ],
  },
  {
    id: "LIA:30",
    noCartridge: true,
    name: "30",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Funiculaire / C.Monet / St Jo.", "Funiculaire / C. Monet / St Jo."],
        autoHide: true,
        name: "Lycée Claude Monet / Institution Saint-Joseph",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "30",
          },
          pages: [
            { font: "1507SUPX", text: "LYCEE CLAUDE MONET" },
            { font: "1507SUPX", text: "INSTITUTION ST-JOSEPH" },
          ],
        },
      },
    ],
  },
  {
    id: "LIA:31",
    noCartridge: true,
    name: "31",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Funiculaire / C.Monet / St Jo."],
        autoHide: true,
        name: "Lycée Claude Monet / Institution Saint-Joseph",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "31",
          },
          pages: [
            { font: "1507SUPX", text: "LYCEE CLAUDE MONET" },
            { font: "1507SUPX", text: "INSTITUTION ST-JOSEPH" },
          ],
        },
      },
      {
        id: ["Bigne a Fosse"],
        autoHide: true,
        name: "Bigne à Fosse",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "31",
          },
          pages: [{ font: "1508SUPX", text: "BIGNE A FOSSE" }],
        },
      },
    ],
  },
  {
    id: "LIA:40",
    noCartridge: true,
    name: "40",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["J. d'Arc"],
        autoHide: true,
        name: "Lycée Jeanne d'Arc",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "40",
          },
          pages: [{ font: "1508SUPX", text: "LYCEE JEANNE D'ARC" }],
        },
      },
    ],
  },
  {
    id: "LIA:41",
    noCartridge: true,
    name: "41",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Ignauval"],
        autoHide: true,
        name: "Ignauval",
        city: "SAINTE-ADRESSE",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "41",
          },
          pages: [{ font: "1507SUPX", text: "STE-ADRESSE IGNAUVAL" }],
        },
      },
      {
        id: ["J. d'Arc"],
        autoHide: true,
        name: "Lycée Jeanne d'Arc",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "41",
          },
          pages: [{ font: "1507SUPX", text: "LYCEE JEANNE D'ARC" }],
        },
      },
    ],
  },
  {
    id: "LIA:50",
    noCartridge: true,
    name: "50",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Schuman"],
        autoHide: true,
        name: "Lycée Schuman",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "50",
          },
          pages: [{ font: "1508SUPX", text: "LYCEE SCHUMAN" }],
        },
      },
    ],
  },
  {
    id: "LIA:60",
    noCartridge: true,
    name: "60",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["La Breque"],
        autoHide: true,
        name: "La Brèque",
        city: "HARFLEUR",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "60",
          },
          pages: [{ font: "1507SUPX", text: "HARFLEUR LA BREQUE" }],
        },
      },
      {
        id: ["J. Prevost"],
        autoHide: true,
        name: "Lycée Jean Prévost",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "60",
          },
          pages: [{ font: "1508SUPX", text: "LYCEE J. PREVOST" }],
        },
      },
    ],
  },
  {
    id: "LIA:70",
    noCartridge: true,
    name: "70",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["G. Courbet"],
        autoHide: true,
        name: "Collège G. Courbet",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "70",
          },
          pages: [{ font: "1507SUPX", text: "COLLEGE G. COURBET" }],
        },
      },
      {
        id: ["Pissotiere à Madame"],
        autoHide: true,
        name: "Pissotiere à Madame",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "70",
          },
          pages: [{ font: "1507SUPX", text: "PISSOTIERE A MADAME" }],
        },
      },
    ],
  },
  {
    id: "LIA:71",
    noCartridge: true,
    name: "71",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["G. Courbet"],
        autoHide: true,
        name: "Collège G. Courbet",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "71",
          },
          pages: [{ font: "1508SUPX", text: "COLLEGE G. COURBET" }],
        },
      },
      {
        id: ["F. Engels"],
        autoHide: true,
        name: "F. Engels",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "71",
          },
          pages: [{ font: "1508SUPX", text: "F. ENGELS" }],
        },
      },
    ],
  },
  {
    id: "LIA:80",
    noCartridge: true,
    name: "80",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["College J. Monod"],
        autoHide: true,
        name: "Collège Jacques Monod",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "80",
          },
          pages: [{ font: "1507SUPX", text: "COLLEGE JACQUES MONOD" }],
        },
      },
      {
        id: ["A.Cazavan"],
        autoHide: true,
        name: "A. Cazavan",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "80",
          },
          pages: [{ font: "1508SUPX", text: "A. CAZAVAN" }],
        },
      },
    ],
  },
  {
    id: "LIA:90",
    noCartridge: true,
    name: "90",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["P. Doumer / E.S.A.T."],
        autoHide: true,
        name: "E.S.A.T.",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "90",
          },
          pages: [{ font: "1508SUPX", text: "E.S.A.T." }],
        },
      },
      {
        id: ["Graville"],
        autoHide: true,
        name: "Graville",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "90",
          },
          pages: [{ font: "1507SUPX", text: "LE HAVRE GRAVILLE" }],
        },
      },
    ],
  },
  {
    id: "LIA:91",
    noCartridge: true,
    name: "91",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers C.F.A."],
        autoHide: true,
        name: "C.F.A.",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "91",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS C.F.A." }],
        },
      },
      {
        id: ["Montivilliers Gare"],
        autoHide: true,
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1513B3E1",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "91",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS GARE" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "lia",
  name: "LiA – Le Havre Seine Métropole",
  routes: liaRoutes,
  color: "#a99887",
  textColor: "#ffffff",
};

export default network;
