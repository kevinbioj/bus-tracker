import { Network, Route } from "~/@types";

const liaRoutes: Route[] = [
  {
    id: "LIA:LER",
    routeIds: ["NOMAD-TER:FR:Line::325702f0-8067-4665-a0d8-5ebce7e59d0a:"],
    name: "LER",
    colors: { background: "#ed6ea7", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Havre"],
        name: "Le Havre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#ED6EA7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "LER",
          },
          pages: [{ spacing: 3, text: "LE HAVRE" }],
        },
      },
      {
        id: ["Montivilliers"],
        name: "Montivilliers",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#ED6EA7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "LER",
          },
          pages: [{ text: "MONTIVILLIERS" }],
        },
      },
      {
        id: ["Rolleville"],
        autoHide: true,
        name: "Rolleville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#ED6EA7",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1510N2E1",
            text: "LER",
          },
          pages: [{ spacing: 3, text: "ROLLEVILLE" }],
        },
      },
    ],
  },
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
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "14LUPLAN", text: "GRAND HAMEAU" }],
        },
      },
      {
        id: ["Pré Fleuri"],
        autoHide: true,
        name: "Pré Fleuri",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "14LUPLAN", text: "PRE FLEURI" }],
        },
      },
      {
        id: ["La Plage"],
        autoHide: true,
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "14LUPLAN", text: "LA PLAGE" }],
        },
      },
      {
        id: ["Rond-Point"],
        autoHide: true,
        name: "Rond-Point",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "T",
          },
          pages: [{ font: "14LUPLAN", text: "ROND-POINT" }],
        },
      },
    ],
  },
  {
    id: "LIA:A",
    name: "A",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "A",
          },
          pages: [{ font: "14LUPLAN", text: "GRAND HAMEAU" }],
        },
      },
      {
        id: ["La Plage"],
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "A",
          },
          pages: [{ font: "14LUPLAN", text: "LA PLAGE" }],
        },
      },
    ],
  },
  {
    id: "LIA:B",
    name: "B",
    colors: { background: "#00BB00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pré Fleuri"],
        name: "Pré Fleuri",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#00BB00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "B",
          },
          pages: [{ font: "14LUPLAN", text: "PRE FLEURI" }],
        },
      },
      {
        id: ["Rond-Point"],
        autoHide: true,
        name: "Rond-Point",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#00BB00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "B",
          },
          pages: [{ font: "14LUPLAN", text: "ROND-POINT" }],
        },
      },
      {
        id: ["La Plage"],
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#00BB00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "B",
          },
          pages: [{ font: "14LUPLAN", text: "LA PLAGE" }],
        },
      },
    ],
  },
  {
    id: "LIA:01",
    name: "1",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#009FE3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "1",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS  GARE",
              },
              {
                font: "LUMIPLAN-2",
                spacing: 2,
                text: "PAR LE HAVRE CENTRE",
              },
            ],
          ],
        },
      },
      {
        id: ["La Plage"],
        autoHide: true,
        name: "La Plage",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#009FE3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "1",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  LA  PLAGE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Ste-Adresse La Heve"],
        name: "La Hève",
        city: "SAINTE-ADRESSE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#009FE3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "1",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "STE-ADRESSE LA HEVE",
              },
              {
                font: "LUMIPLAN-2",
                spacing: 2,
                text: "PAR LE HAVRE CENTRE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:C2",
    name: "C2",
    colors: { background: "#E30613", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Place d'Armes"],
        name: "Place d'Armes",
        city: "HARFLEUR",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "H A R F L E U R",
              },
              {
                font: "LUMIPLAN-A",
                text: "PLACE D'ARMES",
              },
            ],
          ],
        },
      },
      {
        id: ["Grand Quai"],
        name: "Grand Quai",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "G R A N D  Q U A I",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:03",
    name: "3",
    colors: { background: "#13A538", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#13A538",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "3",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "GRAND HAMEAU",
              },
            ],
          ],
        },
      },
      {
        id: ["Graville"],
        name: "Graville",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#13A538",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "3",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "G R A V I L L E",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:04",
    name: "4",
    colors: { background: "#F7A823", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#F7A823",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "4",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "GRAND HAMEAU",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#F7A823",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "4",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:05",
    name: "5",
    colors: { background: "#E6007E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Sainte Adresse Ignauval"],
        name: "Ignauval",
        city: "SAINTE-ADRESSE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "5",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "SAINTE-ADRESSE",
              },
              {
                font: "LUMIPLAN-A",
                text: "I G N A U V A L",
              },
            ],
          ],
        },
      },
      {
        id: ["Graville"],
        name: "Graville",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E6007E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "5",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "G R A V I L L E",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:06",
    name: "6",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [
      {
        id: ["O. Niemeyer"],
        name: "Oscar Niemeyer",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            text: "6",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "O. NIEMEYER",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "O. NIEMEYER",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR MONT-GAILLARD",
              },
            ],
          ],
        },
      },
      {
        id: ["Funiculaire / C. Monet / St Jo."],
        autoHide: true,
        name: "Institution Saint-Joseph",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            text: "6",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "INSTITUT. ST-JOSEPH",
              },
            ],
          ],
        },
      },
      {
        id: ["Mont Gaillard"],
        autoHide: true,
        name: "Mont Gaillard",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            text: "6",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "MONT-GAILLARD",
              },
            ],
          ],
        },
      },
      {
        id: ["Place Jenner"],
        name: "Place Jenner",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            text: "6",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "PLACE JENNER",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "PLACE JENNER",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR MONT-GAILLARD",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:07",
    name: "7",
    colors: { background: "#0069B4", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caucriauville"],
        name: "Caucriauville",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#0069B4",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "7",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "CAUCRIAUVILLE",
              },
            ],
          ],
        },
      },
      {
        id: ["Funiculaire C.Monet / St Jo."],
        autoHide: true,
        name: "Institution Saint-Joseph",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#0069B4",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "7",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "INSTITUT. ST-JOSEPH",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre MuMA"],
        name: "MuMa",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#0069B4",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "7",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "M U M A",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:08",
    name: "8",
    colors: { background: "#E67900", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E67900",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "8",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Soquence"],
        name: "Soquence",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E67900",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "8",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "S O Q U E N C E",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "S O Q U E N C E",
              },
              {
                font: "LUMIPLAN-2",
                text: "P A R  L E S  N E I G E S",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:09",
    name: "9",
    colors: { background: "#BEBD00", text: "#000000" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#BEBD00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "9",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS  GARE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#BEBD00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "9",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR HARFLEUR/W. CHURCHILL",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:10",
    name: "10",
    colors: { background: "#95C11F", text: "#000000" },
    destinations: [
      {
        id: ["Parc de l'Estuaire"],
        name: "Parc de l'Estuaire",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#95C11F",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "GONFREVILLE-L'ORCHER",
              },
              {
                font: "LUMIPLAN-A",
                text: "PARC ESTUAIRE",
              },
            ],
          ],
        },
      },
      {
        id: ["Grand Hameau"],
        autoHide: true,
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#95C11F",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "GRAND HAMEAU",
              },
            ],
          ],
        },
      },
      {
        id: ["Octeville S/ Mer Littoral"],
        name: "Littoral",
        city: "OCTEVILLE-SUR-MER",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#95C11F",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "10",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "OCTEVILLE S/ MER",
              },
              {
                font: "LUMIPLAN-2",
                text: "L I T T O R A L",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:11",
    name: "11",
    colors: { background: "#E63312", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E63312",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS GARE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Etainhus - St Romain"],
        name: "Gare d'Étainhus - Saint-Romain",
        city: "ÉTAINHUS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E63312",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "ETAINHUS ST-ROMAIN",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:12",
    name: "12",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "P A R  H A R F L E U R",
              },
            ],
          ],
        },
      },
      {
        id: ["La Breque"],
        autoHide: true,
        name: "La Brèque",
        city: "HARFLEUR",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "H A R F L E U R",
              },
              {
                font: "LUMIPLAN-A",
                text: "LA BREQUE",
              },
            ],
          ],
        },
      },
      {
        id: ["St Romain de Colbosc"],
        autoHide: true,
        name: "Saint-Romain-de-Colbosc",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "ST-ROMAIN-DE-COLBOSC",
              },
              {
                font: "LUMIPLAN-A",
                text: "ANDRE SIEGFRIED",
              },
            ],
          ],
        },
      },
      {
        id: ["Etainhus - St Romain"],
        name: "Gare d'Étainhus - Saint-Romain",
        city: "ÉTAINHUS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FFE500",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "12",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "ETAINHUS ST-ROMAIN",
              },
              {
                font: "LUMIPLAN-2",
                text: "P A R  H A R F L E U R",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:13",
    name: "13",
    colors: { background: "#FAC075", text: "#000000" },
    destinations: [
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FAC075",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "13",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Grand Hameau"],
        autoHide: true,
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FAC075",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "13",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "GRAND HAMEAU",
              },
            ],
          ],
        },
      },
      {
        id: ["Etretat Gare"],
        name: "Gare",
        city: "ÉTRETAT",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#FAC075",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "13",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "ETRETAT  GARE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:14",
    name: "14",
    colors: { background: "#009640", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS  GARE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Hopital J. Monod"],
        name: "Hôpital Jacques Monod",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "M O N T I V I L L I E R S",
              },
              {
                font: "LUMIPLAN-A",
                text: "HOPITAL J. MONOD",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:15",
    name: "15",
    colors: { background: "#DB679B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Z.I. Portuaire"],
        name: "Total Raffinage",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#DB679B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "15",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "GONFREVILLE L'ORCHER",
              },
              {
                font: "LUMIPLAN-A",
                text: "TOTAL RAFFINAGE",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "TOTAL RAFFINAGE",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR HARFLEUR PL. D'ARMES",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#DB679B",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "15",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR HARFLEUR PL. D'ARMES",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:16",
    name: "16",
    colors: { background: "#5B358C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Mont Gaillard"],
        name: "Mont-Gaillard",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#5B358C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "16",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "MONT-GAILLARD",
              },
            ],
          ],
        },
      },
      {
        id: ["Dollemard"],
        name: "Dollemard",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#5B358C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "16",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "DOLLEMARD",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:17",
    name: "17",
    colors: { background: "#83D0F5", text: "#000000" },
    destinations: [
      {
        id: ["Parc Estuaire"],
        name: "Parc de l'Estuaire",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#83D0F5",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "17",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "GONFREVILLE-L'ORCHER",
              },
              {
                font: "LUMIPLAN-A",
                text: "PARC ESTUAIRE",
              },
            ],
          ],
        },
      },
      {
        id: ["Caucriauville"],
        name: "Caucriauville",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#83D0F5",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "17",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "CAUCRIAUVILLE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:18",
    name: "18",
    colors: { background: "#56543C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Z.I. Portuaire"],
        name: "Les Neiges",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#56543C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "18",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "LES NEIGES",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#56543C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "18",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:19",
    name: "19",
    colors: { background: "#82368C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Z.I. Portuaire"],
        name: "Renault Usine",
        city: "SANDOUVILLE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#82368C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "19",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "SANDOUVILLE",
              },
              {
                font: "LUMIPLAN-A",
                text: "RENAULT USINE",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#82368C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "19",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:21",
    name: "21",
    colors: { background: "#4E55A1", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Montivilliers Gare"],
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#4E55A1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "21",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS GARE",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR GONNEVILLE/CRIQUETOT",
              },
            ],
          ],
        },
      },
      {
        id: ["Etretat Grandval"],
        name: "Grandval",
        city: "ÉTRETAT",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#4E55A1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "21",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "ETRETAT GRAND VAL",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR GONNEVILLE/CRIQUETOT",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:22",
    name: "22",
    colors: { background: "#104C77", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Parc Estuaire"],
        name: "Parc de l'Estuaire",
        city: "GONFREVILLE-L'ORCHER",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#104C77",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "22",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "GONFREVILLE-L'ORCHER",
              },
              {
                font: "LUMIPLAN-A",
                text: "PARC ESTUAIRE",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "PARC ESTUAIRE",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR ST. OCEANE / HARFLEUR",
              },
            ],
          ],
        },
      },
      {
        id: ["Le Havre Gares"],
        name: "Gares",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#104C77",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "22",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LE  HAVRE  GARES",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR DEMIDOFF / UNIVERSITE",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "30",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "INSTITUT. ST-JOSEPH",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "31",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "INSTITUT. ST-JOSEPH",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Bigne a Fosse"],
        autoHide: true,
        name: "Bigne à Fosse",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "31",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "BIGNE A FOSSE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "40",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "SAINTE-ADRESSE",
              },
              {
                font: "LUMIPLAN-2",
                text: "LYCEE JEANNE D'ARC",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "41",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "SAINTE-ADRESSE",
              },
              {
                font: "LUMIPLAN-A",
                text: "I G N A U V A L",
              },
            ],
          ],
        },
      },
      {
        id: ["J. d'Arc"],
        autoHide: true,
        name: "Lycée Jeanne d'Arc",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "41",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "SAINTE-ADRESSE",
              },
              {
                font: "LUMIPLAN-A",
                text: "LYCEE JEANNE D'ARC",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "50",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "LYCEE SCHUMAN",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "60",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "H A R F L E U R",
              },
              {
                font: "LUMIPLAN-2",
                text: "L A  B R E Q U E",
              },
            ],
          ],
        },
      },
      {
        id: ["J. Prevost"],
        autoHide: true,
        name: "Lycée Jean Prévost",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "60",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "LYCEE J. PREVOST",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "70",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "COLLEGE G. COURBET",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Pissotiere à Madame"],
        autoHide: true,
        name: "Pissotiere à Madame",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "70",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "PISSOTIERE A MADAME",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "71",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "COLLEGE G. COURBET",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["F. Engels"],
        autoHide: true,
        name: "F. Engels",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "71",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "F. ENGELS",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "80",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "COLLEGE JACQUES MONOD",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["A.Cazavan"],
        autoHide: true,
        name: "A. Cazavan",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "80",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "A. CAZAVAN",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "90",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "P. DOUMER / E.S.A.T.",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Graville"],
        autoHide: true,
        name: "Graville",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "90",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "G R A V I L L E",
              },
            ],
          ],
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
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "91",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS C.F.A.",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Montivilliers Gare"],
        autoHide: true,
        name: "Gare",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#706F6F",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "91",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-A",
                text: "MONTIVILLIERS GARE",
              },
              {
                font: "LUMIPLAN-2",
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
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
