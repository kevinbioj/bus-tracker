import { Network, Route } from "~/@types";

const liaRoutes: Route[] = [
  {
    id: "LIA:A",
    name: "A",
    colors: { background: "#E50040", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Grand Hameau"],
        name: "Grand Hameau",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#E50040",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "A",
          },
          pages: [{ font: "14LUPLAN", text: "GRAND HAMEAU" }],
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
            backgroundColor: "#E50040",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "A",
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
            backgroundColor: "#E50040",
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
    colors: { background: "#3AAA35", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Pré Fleuri"],
        name: "Pré Fleuri",
        city: "LE HAVRE",
        girouette: {
          dimensions: { height: 16, rnWidth: 16, destinationWidth: 120 },
          routeNumber: {
            font: "14LUPLAN",
            backgroundColor: "#3AAA35",
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
            backgroundColor: "#3AAA35",
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
            backgroundColor: "#3AAA35",
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
    id: "LIA:C1",
    name: "C1",
    colors: { background: "#009EE3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["CITE DES ABBESSES"],
        name: "Cité des Abbesses",
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
            text: "C1",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "M O N T I V I L L I E R S",
              },
              {
                font: "LUMIPLAN-A",
                text: "CITE DES ABBESSES",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "CITE DES ABBESSES",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR  LE  HAVRE  CENTRE",
              },
            ],
          ],
        },
      },
      {
        id: ["STE ADRESSE LA HEVE"],
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
            text: "C1",
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
        id: ["PARC ESTUAIRE"],
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
            backgroundColor: "#E30613",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C2",
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
                text: "PAR HARFLEUR PL. D'ARMES",
              },
            ],
          ],
        },
      },
      {
        id: ["GRAND  QUAI"],
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
            [
              {
                font: "LUMIPLAN-A",
                text: "G R A N D  Q U A I",
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
    id: "LIA:C3",
    name: "C3",
    colors: { background: "#3FA435", text: "#FFFFFF" },
    destinations: [
      {
        id: ["GRAND HAMEAU"],
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
            backgroundColor: "#3FA435",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C3",
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
        id: ["GRAVILLE"],
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
            backgroundColor: "#3FA435",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C3",
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
    id: "LIA:C4",
    name: "C4",
    colors: { background: "#F7A823", text: "#FFFFFF" },
    destinations: [
      {
        id: ["GRAND HAMEAU"],
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
            text: "C4",
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
        id: ["LE HAVRE GARES"],
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
            text: "C4",
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
    id: "LIA:C5",
    name: "C5",
    colors: { background: "#E5007D", text: "#FFFFFF" },
    destinations: [
      {
        id: ["PLACE D'ARMES"],
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
            backgroundColor: "#E5007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C5",
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
        id: ["DOLLEMARD"],
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
            backgroundColor: "#E5007D",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C5",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "D O L L E M A R D",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:C6",
    name: "C6",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [
      {
        id: ["HOTEL  DE  VILLE"],
        name: "Hôtel de Ville",
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
            text: "C6",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "HOTEL DE VILLE",
              },
            ],
          ],
        },
      },
      {
        id: ["MONT  GAILLARD"],
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
            outlineColor: "#FFFFFF",
            text: "C6",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "MONT GAILLARD",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    id: "LIA:C7",
    name: "C7",
    colors: { background: "#0072BC", text: "#FFFFFF" },
    destinations: [
      {
        id: ["HOTEL  DE  VILLE"],
        name: "Hôtel de Ville",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#0072BC",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C7",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "HOTEL DE VILLE",
              },
            ],
          ],
        },
      },
      {
        id: ["CAUCRIAUVILLE"],
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
            backgroundColor: "#0072BC",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "C7",
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
    id: "LIA:C8",
    name: "C8",
    colors: { background: "#E67900", text: "#000000" },
    destinations: [
      {
        id: ["HOTEL  DE  VILLE"],
        name: "Hôtel de Ville",
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
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "C8",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "HOTEL DE VILLE",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "HOTEL DE VILLE",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR BOIS DE BLEVILLE",
              },
            ],
          ],
        },
      },
      {
        id: ["MONT  GAILLARD"],
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
            backgroundColor: "#E67900",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "C8",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "MONT GAILLARD",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "MONT GAILLARD",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR BOIS DE BLEVILLE",
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
    colors: { background: "#BEBD00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MONT  LECOMTE"],
        name: "Mont Lecomte",
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
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "MONT LECOMTE",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "MONT LECOMTE",
              },
              {
                font: "LUMIPLAN-2",
                text: "PAR LES NEIGES / GRAVILLE",
              },
            ],
          ],
        },
      },
      {
        id: ["GRAVILLE"],
        autoHide: true,
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
            backgroundColor: "#BEBD00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "9",
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
      {
        id: ["LE HAVRE GARES"],
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
                text: "PAR LES NEIGES / GRAVILLE",
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
        id: ["PARC ESTUAIRE"],
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
        id: ["GRAND HAMEAU"],
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
    ],
  },
  {
    id: "LIA:11",
    name: "11",
    colors: { background: "#D9B6D7", text: "#000000" },
    destinations: [
      {
        id: ["COURS STE-CROIX"],
        name: "Cours Sainte-Croix",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#D9B6D7",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "11",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "M O N T I V I L L I E R S",
              },
              {
                font: "LUMIPLAN-A",
                text: "COURS STE-CROIX",
              },
            ],
          ],
        },
      },
      {
        id: ["LE HAVRE GARES"],
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
            backgroundColor: "#D9B6D7",
            textColor: "#000000",
            outlineColor: "#FFFFFF",
            text: "11",
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
    id: "LIA:11E",
    name: "11E",
    colors: { background: "#A01D15", text: "#FFFFFF" },
    destinations: [
      {
        id: ["COURS STE-CROIX"],
        name: "Cours Sainte-Croix",
        city: "MONTIVILLIERS",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#A01D15",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11E",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "M O N T I V I L L I E R S",
              },
              {
                font: "LUMIPLAN-A",
                text: "COURS STE-CROIX",
              },
            ],
          ],
        },
      },
      {
        id: ["LE HAVRE GARES"],
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
            backgroundColor: "#A01D15",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "11E",
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
    id: "LIA:12",
    name: "12",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [
      {
        id: ["LE HAVRE GARES"],
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
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["CITE DES ABBESSES"],
        name: "Cité des Abbesses",
        city: "MONTIVILLIERS",
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
                text: "M O N T I V I L L I E R S",
              },
              {
                font: "LUMIPLAN-A",
                text: "CITE DES ABBESSES",
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
        id: ["GRAND HAMEAU"],
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
        id: ["ETRETAT LE GRANDVAL"],
        name: "Le Grandval",
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
                text: "ETRETAT LE GRANDVAL",
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
        id: ["GRAND HAMEAU"],
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
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
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
        id: ["PARC ESTUAIRE"],
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
            backgroundColor: "#009640",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "14",
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
    ],
  },
  {
    id: "LIA:15",
    name: "15",
    colors: { background: "#DB679B", text: "#FFFFFF" },
    destinations: [
      {
        id: ["LE HAVRE GARES"],
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
                text: "JE MONTE / JE VALIDE",
              },
            ],
          ],
        },
      },
      {
        id: ["Port 5555 - Parc Du Hode"],
        name: "Port 5555 - Parc du Hode",
        city: "SAINT-VIGOR-D'YMONVILLE",
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
                text: "SAINT-VIGOR-D'YMONVILLE",
              },
              {
                font: "LUMIPLAN-A",
                text: "PARC DU HODE",
              },
            ],
          ],
        },
      },
      {
        id: ["Port 5451 - PLPN"],
        autoHide: true,
        name: "Port 5451 - PLPN",
        city: "ROGERVILLE",
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
                text: "R O G E R V I L L E",
              },
              {
                font: "LUMIPLAN-A",
                text: "P L P N",
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
        id: ["MONT  GAILLARD"],
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
                text: "MONT GAILLARD",
              },
            ],
          ],
        },
      },
      {
        id: ["LE HAVRE GARES"],
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
            backgroundColor: "#5B358C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "16",
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
    id: "LIA:17",
    name: "17",
    colors: { background: "#83D0F5", text: "#000000" },
    destinations: [
      {
        id: ["PARC ESTUAIRE"],
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
        id: ["PRE FLEURI"],
        autoHide: true,
        name: "Pré Fleuri",
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
                text: "PRE FLEURI",
              },
            ],
          ],
        },
      },
      {
        id: ["CITE DES ABBESSES"],
        name: "Cité des Abbesses",
        city: "MONTIVILLIERS",
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
                text: "M O N T I V I L L I E R S",
              },
              {
                font: "LUMIPLAN-A",
                text: "CITE DES ABBESSES",
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
        id: ["LE HAVRE GARES"],
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
      {
        id: ["Port 1704 - Terminal Roulier"],
        name: "Z.I. Portuaire",
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
                text: "PORT 1704 - ROULIER",
              },
            ],
          ],
        },
      },
      {
        id: ["Port 2000 - CIM"],
        autoHide: true,
        name: "Port 2000 - C.I.M.",
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
                text: "PORT 2000 - C.I.M.",
              },
            ],
            [
              {
                font: "LUMIPLAN-A",
                text: "PORT 2000 - C.I.M.",
              },
              {
                font: "LUMIPLAN-2",
                text: "ACCES REGLEMENTE",
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
    colors: { background: "#E68800", text: "#FFFFFF" },
    destinations: [
      {
        id: ["MONT  LECOMTE"],
        name: "Mont Lecomte",
        city: "LE HAVRE",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#E68800",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "19",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "L E   H A V R E",
              },
              {
                font: "LUMIPLAN-A",
                text: "MONT LECOMTE",
              },
            ],
          ],
        },
      },
      {
        id: ["GRAVILLE"],
        autoHide: true,
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
            backgroundColor: "#E68800",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "19",
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
      {
        id: ["LE HAVRE GARES"],
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
            backgroundColor: "#E68800",
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
        id: ["LE HAVRE GARES"],
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
            backgroundColor: "#4E55A1",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            text: "21",
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
        id: ["ETRETAT LE GRANDVAL"],
        name: "Le Grandval",
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
  //- ARCHIVE 2024 - ANCIENNES LIGNES DU RÉSEAU
  {
    id: "LIA:ARCHIVE-2024:01",
    name: "1 (?-2024)",
    colors: { background: "#009FE3", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:03",
    name: "3 (?-2024)",
    colors: { background: "#13A538", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:04",
    name: "4 (?-2024)",
    colors: { background: "#F7A823", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:05",
    name: "5 (?-2024)",
    colors: { background: "#E6007E", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:06",
    name: "6 (?-2024)",
    colors: { background: "#FFE500", text: "#000000" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:07",
    name: "7 (?-2024)",
    colors: { background: "#0069B4", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:08",
    name: "8 (?-2024)",
    colors: { background: "#E67900", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:09",
    name: "9 (?-2024)",
    colors: { background: "#BEBD00", text: "#000000" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:11",
    name: "11 (?-2024)",
    colors: { background: "#E63312", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:19",
    name: "19 (?-2024)",
    colors: { background: "#82368C", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:22",
    name: "22 (?-2024)",
    colors: { background: "#104C77", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:30",
    noCartridge: true,
    name: "30",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:31",
    noCartridge: true,
    name: "31",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:40",
    noCartridge: true,
    name: "40",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:41",
    noCartridge: true,
    name: "41",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:50",
    noCartridge: true,
    name: "50",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:60",
    noCartridge: true,
    name: "60",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:70",
    noCartridge: true,
    name: "70",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:71",
    noCartridge: true,
    name: "71",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:80",
    noCartridge: true,
    name: "80",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:90",
    noCartridge: true,
    name: "90",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:ARCHIVE-2024:91",
    noCartridge: true,
    name: "91",
    colors: { background: "#706F6F", text: "#FFFFFF" },
    destinations: [],
  },
  {
    id: "LIA:HLP",
    name: "HLP",
    colors: { background: "#000000", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Haut-le-pied"],
        name: "Haut-le-pied",
        girouette: {
          dimensions: {
            height: 24,
            rnWidth: 40,
            destinationWidth: 140,
          },
          routeNumber: {
            font: "DUHAMEL-24-22-2",
            backgroundColor: "#000000",
            textColor: "#FFFFFF",
            text: "LIA",
          },
          pages: [
            [
              {
                font: "LUMIPLAN-2",
                text: "",
              },
              {
                font: "LUMIPLAN-A",
                text: "SANS VOYAGEUR",
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
