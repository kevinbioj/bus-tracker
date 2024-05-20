import { Network, Route } from "~/@types";

const nomadCar: Route[] = [
  //- LIGNES KRONO+
  {
    id: "NOMAD-TER:FR:Line::468B44B7-C327-4154-B85E-25C67C32B61E:",
    noCartridge: true,
    name: "K1+",
    colors: { background: "#64005E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Saint-Lazare"],
        name: "Paris Saint-Lazare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K1+",
          },
          pages: [{ font: "1508SUPX", text: "PARIS SAINT-LAZARE" }],
        },
      },
      {
        id: ["Le Havre"],
        name: "Le Havre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K1+",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::66849E04-284F-47D7-8795-4C925C6ED66F:",
    noCartridge: true,
    name: "K2+",
    colors: { background: "#64005E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Saint-Lazare"],
        name: "Paris Saint-Lazare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K2+",
          },
          pages: [{ font: "1508SUPX", text: "PARIS SAINT-LAZARE" }],
        },
      },
      {
        id: ["Cherbourg"],
        name: "Cherbourg",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K2+",
          },
          pages: [{ font: "1508SUPX", text: "CHERBOURG" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::03A83359-7D9D-4301-9C87-92FED4666451:",
    noCartridge: true,
    name: "K3+",
    colors: { background: "#64005E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Saint-Lazare"],
        name: "Paris Saint-Lazare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K3+",
          },
          pages: [{ font: "1508SUPX", text: "PARIS SAINT-LAZARE" }],
        },
      },
      {
        id: ["Trouville - Deauville"],
        name: "Trouville - Deauville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K3+",
          },
          pages: [{ font: "1507SUPX", text: "TROUVILLE-DEAUVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::0ce8180c-0fb6-4cc1-80ba-53782622a5ce:",
    noCartridge: true,
    name: "K21+",
    colors: { background: "#64005E", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Saint-Lazare"],
        name: "Paris Saint-Lazare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1310C2E1",
            text: "K21+",
          },
          pages: [{ font: "1508SUPX", text: "PARIS SAINT-LAZARE" }],
        },
      },
      {
        id: ["Caen"],
        name: "Caen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#64005E",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1310C2E1",
            text: "K21+",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
    ],
  },
  //- LIGNES KRONO
  {
    id: "NOMAD-TER:FR:Line::3334AEE5-6669-4426-A9E8-1F7704E8F5BD:",
    noCartridge: true,
    name: "K2",
    colors: { background: "#E00046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caen"],
        name: "Caen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K2",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["Cherbourg"],
        name: "Cherbourg",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K2",
          },
          pages: [{ font: "1508SUPX", text: "CHERBOURG" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::6155CD5F-AB2D-4274-A052-8C7462540578:",
    noCartridge: true,
    name: "K4",
    colors: { background: "#E00046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Montparnasse Hall 1 - 2"],
        name: "Paris Montparnasse",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K4",
          },
          pages: [{ font: "1508SUPX", text: "PARIS MONTPARNASSE" }],
        },
      },
      {
        id: ["Granville"],
        name: "Granville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K4",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::a5e2106e-65d0-4abe-a726-bea36c38855b:",
    noCartridge: true,
    name: "K11",
    colors: { background: "#E00046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K11",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
      {
        id: ["Dieppe"],
        name: "Dieppe",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K11",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::960d5017-915b-4c7e-b452-2fd669ba48a5:",
    noCartridge: true,
    name: "K39",
    colors: { background: "#E00046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caen"],
        name: "Caen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K39",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["Le Mans"],
        autoHide: true,
        name: "Le Mans",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K39",
          },
          pages: [{ font: "1508SUPX", text: "LE MANS" }],
        },
      },
      {
        id: ["Tours"],
        name: "Tours",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K39",
          },
          pages: [{ font: "1508SUPX", text: "TOURS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::7BDE293E-0D29-48A4-8978-8ADB3FFEA340:",
    noCartridge: true,
    name: "K45",
    colors: { background: "#E00046", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K45",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
      {
        id: ["Amiens"],
        autoHide: true,
        name: "Amiens",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K45",
          },
          pages: [{ font: "1508SUPX", text: "AMIENS" }],
        },
      },
      {
        id: ["Lille Flandres"],
        name: "Lille Flandres",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#E00046",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "K45",
          },
          pages: [{ font: "1508SUPX", text: "LILLE FLANDRES" }],
        },
      },
    ],
  },
  //- LIGNES CITI
  {
    id: "NOMAD-TER:FR:Line::97E911FA-C8F2-4861-AD3C-C36CF4750A49:",
    noCartridge: true,
    name: "C1",
    colors: { background: "#3581C3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Saint-Lazare"],
        name: "Paris Saint-Lazare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C1",
          },
          pages: [{ font: "1508SUPX", text: "PARIS SAINT-LAZARE" }],
        },
      },
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C1",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::57AE0F48-2436-44BD-A2F0-AA45D4A483E7:",
    noCartridge: true,
    name: "C2",
    colors: { background: "#3581C3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Paris Saint-Lazare"],
        name: "Paris Saint-Lazare",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C2",
          },
          pages: [{ font: "1508SUPX", text: "PARIS SAINT-LAZARE" }],
        },
      },
      {
        id: ["Mantes-la-Jolie"],
        name: "Mantes-la-Jolie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C2",
          },
          pages: [{ font: "1508SUPX", text: "MANTES-LA-JOLIE" }],
        },
      },
      {
        id: ["Évreux Normandie"],
        name: "Évreux Normandie",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C2",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX NORMANDIE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::de778414-6e3d-4bc7-9d9a-6bac6aed673f:",
    noCartridge: true,
    name: "C10",
    colors: { background: "#3581C3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Yvetot"],
        name: "Yvetot",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C10",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C10",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
      {
        id: ["Elbeuf Saint-Aubin"],
        name: "Elbeuf Saint-Aubin",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C10",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF SAINT-AUBIN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::789690b9-0bee-4978-8bf9-f4810c9e16f2:",
    noCartridge: true,
    name: "C12",
    colors: { background: "#3581C3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caen"],
        name: "Caen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C12",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["Coutances"],
        autoHide: true,
        name: "Coutances",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C12",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["Granville"],
        autoHide: true,
        name: "Granville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C12",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["Pontorson - Mont-Saint-Michel"],
        autoHide: true,
        name: "Pontorson - Mont-Saint-Michel",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C12",
            outlineColor: "#000000",
          },
          pages: [[{ text: "PONTORSON" }, { text: "MONT-SAINT-MICHEL" }]],
        },
      },
      {
        id: ["Rennes"],
        name: "Rennes",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C12",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "RENNES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::d03091e3-31dd-4499-a71c-c61ef5399cc6:",
    noCartridge: true,
    name: "C13",
    colors: { background: "#3581C3", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caen"],
        name: "Caen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "C13",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["Lisieux"],
        name: "Lisieux",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#3581C3",
            textColor: "#FFFFFF",
            font: "1508SUPX",
            text: "C13",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
    ],
  },
  //- LIGNES PROXI
  {
    id: "NOMAD-TER:FR:Line::A474D9C7-1A46-4870-8AAA-2A9C49F46F3D:",
    noCartridge: true,
    name: "P1",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P1",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
      {
        id: ["Le Havre"],
        name: "Le Havre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P1",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::5E25F2B5-D15F-475F-B424-C7ED6748FE50:",
    noCartridge: true,
    name: "P3",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Lisieux"],
        name: "Lisieux",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P3",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
      {
        id: ["Trouville - Deauville"],
        name: "Trouville - Deauville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P3",
          },
          pages: [{ font: "1507SUPX", text: "TROUVILLE-DEAUVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::A6CE6325-08D1-4C25-9D15-15C2DC5E7BD0:",
    noCartridge: true,
    name: "P10",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Caen"],
        name: "Caen",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P10",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P10",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::3e9229c5-ae84-4f9e-98df-93cc2e91b55c:",
    noCartridge: true,
    name: "P11",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P11",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
      {
        id: ["Dieppe"],
        name: "Dieppe",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P11",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::b66ce399-d888-47de-897b-46f7f79fa5ad:",
    noCartridge: true,
    name: "P14",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Le Havre"],
        name: "Le Havre",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P14",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["Bréauté - Beuzeville"],
        autoHide: true,
        name: "Bréauté - Beuzeville",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P14",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE-BEUZEVILLE" }],
        },
      },
      {
        id: ["Fécamp"],
        name: "Fécamp",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P14",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::99d814a0-f512-4df4-966c-8f8e12e4ef6d:",
    noCartridge: true,
    name: "P16",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Serqueux"],
        name: "Serqueux",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P16",
          },
          pages: [{ font: "1508SUPX", text: "SERQUEUX" }],
        },
      },
      {
        id: ["Gisors"],
        name: "Gisors",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P16",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::A16522A1-3A9D-406B-B7AB-12E318E7CC92:",
    noCartridge: true,
    name: "P30",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Beauvais"],
        name: "Beauvais",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P30",
          },
          pages: [{ font: "1508SUPX", text: "BEAUVAIS" }],
        },
      },
      {
        id: ["Abancourt"],
        autoHide: true,
        name: "Abancourt",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P30",
          },
          pages: [{ font: "1508SUPX", text: "ABANCOURT" }],
        },
      },
      {
        id: ["Le Tréport - Mers-les-Bains"],
        name: "Le Tréport - Mers-les-Bains",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P30",
          },
          pages: [[{ text: "LE TREPORT" }, { text: "MERS-LES-BAINS" }]],
        },
      },
    ],
  },
  {
    id: "NOMAD-TER:FR:Line::DD461A4B-557A-4303-B639-AED4F7A5141B:",
    noCartridge: true,
    name: "P45",
    colors: { background: "#63BF00", text: "#FFFFFF" },
    destinations: [
      {
        id: ["Rouen Rive Droite"],
        name: "Rouen Rive Droite",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P45",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN RIVE DROITE" }],
        },
      },
      {
        id: ["Amiens"],
        name: "Amiens",
        girouette: {
          ledColor: "WHITE",
          routeNumber: {
            backgroundColor: "#63BF00",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "P45",
          },
          pages: [{ font: "1508SUPX", text: "AMIENS" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "nomad-train",
  name: "NOMAD Train – Région Normandie",
  routes: nomadCar,
  color: "#ef434d",
  textColor: "#ffffff",
};

export default network;
