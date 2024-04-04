import { Network, Route } from "~/@types";

const nomadRegionRoutes: Route[] = [
  {
    id: "NOMAD:216",
    name: "216",
    colors: { background: "#4A2999", text: "#FFFFFF" },
    destinations: [
      {
        id: ["VERNEUIL D'AVRE ET D'ITON", "ROUEN / VERNEUIL-SUR-AVRE"],
        autoHide: true,
        alternate: "Verneuil-sur-Avre",
        name: "Gare SNCF",
        city: "VERNEUIL-SUR-AVRE",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
      {
        id: ["ÉVREUX", "ROUEN / ÉVREUX", "MONT-SAINT-AIGNAN / ÉVREUX", "VERNEUIL-SUR-AVRE / ÉVREUX"],
        alternate: "Évreux",
        name: "Gare Routière",
        city: "ÉVREUX",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ROUEN", "LOUVIERS / ROUEN", "ÉVREUX / ROUEN"],
        alternate: "Rouen",
        name: "Gare Routière",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["MONT-SAINT-AIGNAN", "ROUEN / MONT-SAINT-AIGNAN"],
        autoHide: true,
        alternate: "Mont-Saint-Aignan",
        name: "Campus",
        city: "MONT-SAINT-AIGNAN",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "216",
          },
          pages: [{ font: "1508SUPX", text: "MONT-SAINT-AIGNAN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:228",
    name: "228",
    colors: { background: "#BA941C", text: "#FFFFFF" },
    destinations: [
      {
        id: ["PONT-AUDEMER", "ROUEN / PONT-AUDEMER"],
        alternate: "Pont-Audemer",
        name: "Gare Routière",
        city: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["BOURG ACHARD", "PONT-AUDEMER / BOURG-ACHARD"],
        autoHide: true,
        alternate: "Bourg-Achard",
        name: "Champ de Foire",
        city: "BOURG-ACHARD",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [{ font: "1508SUPX", text: "BOURG-ACHARD" }],
        },
      },
      {
        id: ["ROUEN", "ROUTOT / ROUEN", "PONT-AUDEMER / ROUEN"],
        alternate: "Rouen",
        name: "Gare Routière",
        city: "ROUEN",
        girouette: {
          routeNumber: {
            backgroundColor: "#BA941C",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "228",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:423",
    name: "423",
    colors: { background: "#5E8786", text: "#FFFFFF" },
    destinations: [
      {
        id: ["BRIOUZE", "BAGNOLES DE L'ORNE / BRIOUZE"],
        alternate: "Briouze",
        name: "Gare SNCF",
        city: "BRIOUZE",
        girouette: {
          routeNumber: {
            backgroundColor: "#5E8786",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "423",
          },
          pages: [{ font: "1508SUPX", text: "BRIOUZE" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE", "BRIOUZE / BAGNOLES DE L'ORNE"],
        alternate: "Bagnoles de l'Orne",
        name: "Sainte-Madeleine - Église",
        city: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            backgroundColor: "#5E8786",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "423",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:424",
    name: "424",
    colors: { background: "#4A2999", text: "#FFFFFF" },
    destinations: [
      {
        id: ["ARGENTAN", "FLERS / ARGENTAN"],
        alternate: "Argentan",
        name: "Gare SNCF",
        city: "ARGENTAN",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "424",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["FLERS", "ARGENTAN / FLERS"],
        alternate: "Flers",
        name: "Gare SNCF",
        city: "FLERS",
        girouette: {
          routeNumber: {
            backgroundColor: "#4A2999",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "424",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:527",
    name: "527",
    colors: { background: "#9E6A9A", text: "#FFFFFF" },
    destinations: [
      {
        id: ["GISORS", "MESNIÈRES-EN-B / GISORS", "SERQUEUX / GISORS"],
        alternate: "Gisors",
        name: "Gare SNCF",
        city: "GISORS",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["DIEPPE", "SERQUEUX / DIEPPE", "FORGES-LES-E / DIEPPE"],
        alternate: "Dieppe",
        name: "Gare SNCF",
        city: "DIEPPE",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["FORGES-LES-EAUX", "DIEPPE / FORGES-LES-E"],
        autoHide: true,
        alternate: "Forge-les-Eaux",
        name: "Place Brévière",
        city: "FORGE-LES-EAUX",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "FORGES-LES-EAUX" }],
        },
      },
      {
        id: ["SERQUEUX", "DIEPPE / SERQUEUX", "GISORS / SERQUEUX"],
        autoHide: true,
        alternate: "Serqueux",
        name: "Gare SNCF",
        city: "SERQUEUX",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "SERQUEUX" }],
        },
      },
      {
        id: ["GISORS / MESNIÈRES-EN-B"],
        autoHide: true,
        alternate: "Mesnières-en-Bray",
        name: "MESNIÈRES-EN-BRAY",
        girouette: {
          routeNumber: {
            backgroundColor: "#9E6A9A",
            textColor: "#FFFFFF",
            outlineColor: "#000000",
            font: "1508SUPX",
            text: "527",
          },
          pages: [{ font: "1508SUPX", text: "MESNIERES-EN-BRAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:101R",
    noCartridge: true,
    name: "101",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["CAEN / COURSEULLES-SUR-MER"],
        name: "COURSEULLES-SUR-MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "COURSEULLES-SUR-MER" }],
        },
      },
      {
        id: ["CAEN / LANGRUNE SUR MER"],
        name: "LANGRUNE SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LANGRUNE SUR MER" }],
        },
      },
      {
        id: ["CAEN / VER SUR MER EXPRESS"],
        name: "VER SUR MER EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VER SUR MER EXPRESS" }],
        },
      },
      {
        id: ["CAEN / LUC SUR MER"],
        name: "LUC SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LUC SUR MER" }],
        },
      },
      {
        id: ["CAEN / DOUVRES LA DELIVRANDE"],
        name: "DOUVRES LA DELIVRANDE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "DOUVRES-LA-DELIVRANDE" }],
        },
      },
      {
        id: ["CAEN / BERNIERES SUR MER"],
        name: "BERNIERES SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BERNIERES-SUR-MER" }],
        },
      },
      {
        id: ["CAEN / ASNELLES"],
        name: "ASNELLES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ASNELLES" }],
        },
      },
      {
        id: ["CAEN / ASNELLES EXPRESS"],
        name: "ASNELLES EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ASNELLES EXPRESS" }],
        },
      },
      {
        id: ["CAEN / VER SUR MER"],
        name: "VER SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VER SUR MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:101A",
    noCartridge: true,
    name: "101",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["COURSEULLES-SUR-MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["BERNIERES-SUR-MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["DOUVRES-LA-DELIVRANDE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["LANGRUNE-SUR-MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["COURSEULLES-SUR-MER / CAEN [EXPRESS]"],
        name: "CAEN [EXPRESS]",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN [EXPRESS]" }],
        },
      },
      {
        id: ["VER-SUR-MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["ASNELLES / CAEN [EXPRESS]"],
        name: "CAEN [EXPRESS]",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "101",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN [EXPRESS]" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:102",
    noCartridge: true,
    name: "102",
    colors: { background: "#f7941d", text: "#000000" },
    destinations: [
      {
        id: ["BENY SUR MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CRESSERONS / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / CRESSERONS"],
        name: "CRESSERONS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CRESSERONS" }],
        },
      },
      {
        id: ["CAEN / BENY SUR MER"],
        name: "BENY SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BENY SUR MER" }],
        },
      },
      {
        id: ["CAEN / MATHIEU"],
        name: "MATHIEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "102",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MATHIEU" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:103",
    noCartridge: true,
    name: "103",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["CREULLY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["SAINTE-CROIX-SUR-MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["THAON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["LE FRESNE CAMILLY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAIRON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / BANVILLE"],
        name: "BANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BANVILLE" }],
        },
      },
      {
        id: ["CAEN / CREULLY"],
        name: "CREULLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CREULLY" }],
        },
      },
      {
        id: ["CAEN / LASSON"],
        name: "LASSON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LASSON" }],
        },
      },
      {
        id: ["CAEN / SAINTE CROIX SUR MER"],
        name: "SAINTE CROIX SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "SAINTE-CROIX-SUR-MER" }],
        },
      },
      {
        id: ["BANVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["LANTHEUIL / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "103",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:104",
    noCartridge: true,
    name: "104",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["VERSON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["FONTAINE ETOUPEFOUR / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["BARON SUR ODON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / VERSON"],
        name: "VERSON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VERSON" }],
        },
      },
      {
        id: ["CAEN / FONTAINE ETOUPEFOUR"],
        name: "FONTAINE ETOUPEFOUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "FONTAINE-ETOUPEFOUR" }],
        },
      },
      {
        id: ["CAEN / BARON SUR ODON"],
        name: "BARON SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BARON SUR ODON" }],
        },
      },
      {
        id: ["BOUGY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / BOUGY"],
        name: "BOUGY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "104",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BOUGY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:105",
    noCartridge: true,
    name: "105",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["LA CAINE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["AUNAY SUR ODON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VACOGNES NEUILLY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["EVRECY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["SAINTE HONORINE DU FAY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / SAINTE HONORINE DU FAY"],
        name: "SAINTE HONORINE DU FAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SAINTE-HONORINE-DU-FAY" }],
        },
      },
      {
        id: ["CAEN / AUNAY SUR ODON"],
        name: "AUNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AUNAY SUR ODON" }],
        },
      },
      {
        id: ["CAEN / BANNEVILLE SUR AJON"],
        name: "BANNEVILLE SUR AJON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "BANNEVILLE-SUR-AJON" }],
        },
      },
      {
        id: ["CAEN / ESQUAY NOTRE DAME"],
        name: "ESQUAY NOTRE DAME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ESQUAY-NOTRE-DAME" }],
        },
      },
      {
        id: ["CAEN / LA CAINE"],
        name: "LA CAINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA CAINE" }],
        },
      },
      {
        id: ["CAEN / VACOGNES NEUILLY"],
        name: "VACOGNES NEUILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "105",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VACOGNES NEUILLY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:106",
    noCartridge: true,
    name: "106",
    colors: { background: "#f7941d", text: "#000000" },
    destinations: [
      {
        id: ["FEUGUEROLLES BULLY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["HAMARS / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["AMAYE SUR ORNE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VIEUX / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MALTOT"],
        name: "MALTOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MALTOT" }],
        },
      },
      {
        id: ["CAEN / HAMARS"],
        name: "HAMARS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HAMARS" }],
        },
      },
      {
        id: ["CAEN / AMAYE SUR ORNE"],
        name: "AMAYE SUR ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AMAYE SUR ORNE" }],
        },
      },
      {
        id: ["CAEN / OUFFIERES"],
        name: "OUFFIERES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "OUFFIERES" }],
        },
      },
      {
        id: ["AVENAY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / AVENAY"],
        name: "AVENAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AVENAY" }],
        },
      },
      {
        id: ["CAEN / VIEUX"],
        name: "VIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "106",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIEUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:107",
    noCartridge: true,
    name: "107",
    colors: { background: "#007dc5", text: "#ffffff" },
    destinations: [
      {
        id: ["MUTRECY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["ROCQUANCOURT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["SAINT ANDRE SUR ORNE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MUTRECY"],
        name: "MUTRECY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MUTRECY" }],
        },
      },
      {
        id: ["CAEN / ROCQUANCOURT"],
        name: "ROCQUANCOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROCQUANCOURT" }],
        },
      },
      {
        id: ["CAEN / MAY SUR ORNE"],
        name: "MAY SUR ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MAY SUR ORNE" }],
        },
      },
      {
        id: ["CAEN / LAIZE LA VILLE"],
        name: "LAIZE LA VILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LAIZE LA VILLE" }],
        },
      },
      {
        id: ["LAIZE LA VILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "107",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:108",
    noCartridge: true,
    name: "108",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["MOULINES / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CESNY BOIS HALBOUT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["SAINT GERMAIN LE VASSON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["GOUVIX / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MOULINES"],
        name: "MOULINES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MOULINES" }],
        },
      },
      {
        id: ["CAEN / CESNY BOIS HALBOUT"],
        name: "CESNY BOIS HALBOUT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CESNY-BOIS-HALBOUT" }],
        },
      },
      {
        id: ["CAEN / GOUVIX"],
        name: "GOUVIX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOUVIX" }],
        },
      },
      {
        id: ["CAEN / CAUVICOURT"],
        name: "CAUVICOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "108",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUVICOURT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:109",
    noCartridge: true,
    name: "109",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["MERY CORBON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["MOULT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / MOULT"],
        name: "MOULT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MOULT" }],
        },
      },
      {
        id: ["CAEN / MERY CORBON"],
        name: "MERY CORBON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "109",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MERY CORBON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:110",
    noCartridge: true,
    name: "110",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["CONTEVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["MOULT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAGNY / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["FRENOUVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VIMONT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["MERY CORBON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["MEZIDON CANON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CHICHEBOVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / BELLENGREVILLE"],
        name: "BELLENGREVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BELLENGREVILLE" }],
        },
      },
      {
        id: ["CAEN / CAGNY"],
        name: "CAGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAGNY" }],
        },
      },
      {
        id: ["CAEN / FRENOUVILLE"],
        name: "FRENOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FRENOUVILLE" }],
        },
      },
      {
        id: ["CAEN / MEZIDON CANON"],
        name: "MEZIDON CANON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MEZIDON CANON" }],
        },
      },
      {
        id: ["CAEN / BILLY"],
        name: "BILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BILLY" }],
        },
      },
      {
        id: ["CAEN / CONTEVILLE"],
        name: "CONTEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONTEVILLE" }],
        },
      },
      {
        id: ["CAEN / MERY CORBON"],
        name: "MERY CORBON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MERY CORBON" }],
        },
      },
      {
        id: ["CAEN / MOULT"],
        name: "MOULT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "110",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MOULT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:111R",
    noCartridge: true,
    name: "111",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["HONFLEUR / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["CABOURG / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["CAEN / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DEAUVILLE / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["CAEN / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["CAEN / LA RIVIERE SAINT SAUVEUR"],
        name: "LA RIVIERE SAINT SAUVEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LA RIVIERE SAINT-SAUVEUR" }],
        },
      },
      {
        id: ["CAEN / CABOURG"],
        name: "CABOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CABOURG" }],
        },
      },
      {
        id: ["CAEN / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["CAEN / DIVES SUR MER"],
        name: "DIVES SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIVES SUR MER" }],
        },
      },
      {
        id: ["DEAUVILLE / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["DEAUVILLE / LA RIVIERE SAINT SAUVEUR"],
        name: "LA RIVIERE SAINT SAUVEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LA RIVIERE SAINT-SAUVEUR" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:111A",
    noCartridge: true,
    name: "111",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["BAVENT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["DIVES SUR MER / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["DEAUVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["HONFLEUR / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["HONFLEUR / CABOURG"],
        name: "CABOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CABOURG" }],
        },
      },
      {
        id: ["LE HAVRE / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["LE HAVRE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["HONFLEUR / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["LA RIVIERE SAINT SAUVEUR / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["LE HAVRE / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["LE HAVRE / HONFLEUR EXPRESS"],
        name: "HONFLEUR EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR EXPRESS" }],
        },
      },
      {
        id: ["DEAUVILLE / CABOURG"],
        name: "CABOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CABOURG" }],
        },
      },
      {
        id: ["LA RIVIERE SAINT SAUVEUR / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "111",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:112",
    noCartridge: true,
    name: "112",
    colors: { background: "#0080c5", text: "#ffffff" },
    destinations: [
      {
        id: ["TOUQUES / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0080c5",
            textColor: "#ffffff",
            text: "112",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DEAUVILLE / TOUQUES"],
        name: "TOUQUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#0080c5",
            textColor: "#ffffff",
            text: "112",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOUQUES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:113",
    noCartridge: true,
    name: "113",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["TOUQUES / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "113",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DEAUVILLE / TOUQUES"],
        name: "TOUQUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "113",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOUQUES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:114",
    noCartridge: true,
    name: "114",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["BAYEUX / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["PUTOT EN BESSIN / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / PUTOT EN BESSIN"],
        name: "PUTOT EN BESSIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PUTOT EN BESSIN" }],
        },
      },
      {
        id: ["CAEN / BRETTEVILLE L'ORGUEILLEUSE"],
        name: "BRETTEVILLE L'ORGUEILLEUSE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "114",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BRETTEVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:115",
    noCartridge: true,
    name: "115",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["HOTTOT LES BAGUES / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAUMONT L'EVENTE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VILLERS BOCAGE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / VILLERS BOCAGE"],
        name: "VILLERS BOCAGE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VILLERS BOCAGE" }],
        },
      },
      {
        id: ["CAEN / CAUMONT L'EVENTE"],
        name: "CAUMONT L'EVENTE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUMONT L'EVENTE" }],
        },
      },
      {
        id: ["CAEN / HOTTOT LES BAGUES"],
        name: "HOTTOT LES BAGUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HOTTOT LES BAGUES" }],
        },
      },
      {
        id: ["CAEN / TOURNAY SUR ODON"],
        name: "TOURNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOURNAY SUR ODON" }],
        },
      },
      {
        id: ["NOYERS BOCAGE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["HOTTOT LES BAGUES"],
        name: "HOTTOT LES BAGUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "115",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "HOTTOT LES BAGUES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:116",
    noCartridge: true,
    name: "116",
    colors: { background: "#007dc5", text: "#ffffff" },
    destinations: [
      {
        id: ["AUNAY SUR ODON / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VILLERS BOCAGE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["VIRE / CAEN EXPRESS"],
        name: "CAEN EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["CAEN / VIRE EXPRESS"],
        name: "VIRE EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE EXPRESS" }],
        },
      },
      {
        id: ["CAEN / AUNAY SUR ODON"],
        name: "AUNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AUNAY SUR ODON" }],
        },
      },
      {
        id: ["CAEN / TOURNAY SUR ODON"],
        name: "TOURNAY SUR ODON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TOURNAY SUR ODON" }],
        },
      },
      {
        id: ["CAEN / VILLERS BOCAGE"],
        name: "VILLERS BOCAGE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VILLERS BOCAGE" }],
        },
      },
      {
        id: ["VIRE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / VIRE"],
        name: "VIRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "116",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:117",
    noCartridge: true,
    name: "117",
    colors: { background: "#e41e27", text: "#ffffff" },
    destinations: [
      {
        id: ["CONDE SUR NOIREAU / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["SAINT LAURENT DE CONDEL / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["THURY HARCOURT / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["FLERS / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["CAEN / CONDE SUR NOIREAU"],
        name: "CONDE SUR NOIREAU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONDE SUR NOIREAU" }],
        },
      },
      {
        id: ["CAEN / LAIZE LA VILLE"],
        name: "LAIZE LA VILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LAIZE LA VILLE" }],
        },
      },
      {
        id: ["CAEN / THURY-HARCOURT"],
        name: "THURY-HARCOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "THURY-HARCOURT" }],
        },
      },
      {
        id: ["CAEN / THURY HARCOURT"],
        name: "THURY HARCOURT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e41e27",
            textColor: "#ffffff",
            text: "117",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "THURY HARCOURT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:118",
    noCartridge: true,
    name: "118",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["FALAISE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "118",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / FALAISE"],
        name: "FALAISE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "118",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FALAISE" }],
        },
      },
      {
        id: ["FLERS / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "118",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:119",
    noCartridge: true,
    name: "119",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["BURES SUR DIVES / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["PONT L'EVEQUE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["DOZULE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["TROARN / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["ESCOVILLE / CAEN"],
        name: "CAEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN" }],
        },
      },
      {
        id: ["CAEN / PONT L'EVEQUE"],
        name: "PONT L'EVEQUE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT L'EVEQUE" }],
        },
      },
      {
        id: ["CAEN / DOZULE"],
        name: "DOZULE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DOZULE" }],
        },
      },
      {
        id: ["CAEN / ESCOVILLE"],
        name: "ESCOVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ESCOVILLE" }],
        },
      },
      {
        id: ["CAEN / TROARN"],
        name: "TROARN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "TROARN" }],
        },
      },
      {
        id: ["CAEN / BURES SUR DIVES"],
        name: "BURES SUR DIVES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "119",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BURES SUR DIVES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:120",
    noCartridge: true,
    name: "120",
    colors: { background: "#20b14a", text: "#ffffff" },
    destinations: [
      {
        id: ["COLLEVILLE SUR MER / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["GRANDCAMP MAISY / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["PORT EN BESSIN HUPPAIN / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["SAINTE HONORINE DES PERTES / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["BAYEUX / GRANDCAMP MAISY"],
        name: "GRANDCAMP MAISY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANDCAMP MAISY" }],
        },
      },
      {
        id: ["BAYEUX / SAINTE HONORINE DES PERTES"],
        name: "SAINTE HONORINE DES PERTES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "ST-HONORINE-DES-PERTES" }],
        },
      },
      {
        id: ["BAYEUX / PORT EN BESSIN HUPPAIN"],
        name: "PORT EN BESSIN HUPPAIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "PORT-EN-BESSIN-HUPPAIN" }],
        },
      },
      {
        id: ["BAYEUX / COLLEVILLE SUR MER"],
        name: "COLLEVILLE SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#20b14a",
            textColor: "#ffffff",
            text: "120",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "COLLEVILLE-SUR-MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:121",
    noCartridge: true,
    name: "121",
    colors: { background: "#8f3e97", text: "#ffffff" },
    destinations: [
      {
        id: ["TRACY SUR MER / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["COURSEULLES SUR MER / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["COLLEVILLE SUR MER / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["BAYEUX / COURSEULLES SUR MER"],
        name: "COURSEULLES SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "COURSEULLES-SUR-MER" }],
        },
      },
      {
        id: ["BAYEUX / SOMMERVIEU"],
        name: "SOMMERVIEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SOMMERVIEU" }],
        },
      },
      {
        id: ["OUISTREHAM / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["BERNIERES SUR MER / BAYEUX"],
        name: "BAYEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAYEUX" }],
        },
      },
      {
        id: ["BAYEUX / OUISTREHAM"],
        name: "OUISTREHAM",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "OUISTREHAM" }],
        },
      },
      {
        id: ["BAYEUX / LUC SUR MER"],
        name: "LUC SUR MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8f3e97",
            textColor: "#ffffff",
            text: "121",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LUC SUR MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:122",
    noCartridge: true,
    name: "122",
    colors: { background: "#007dc5", text: "#ffffff" },
    destinations: [
      {
        id: ["LE HAVRE / CAEN EXPRESS"],
        name: "CAEN EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "122",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAEN EXPRESS" }],
        },
      },
      {
        id: ["CAEN / LE HAVRE EXPRESS"],
        name: "LE HAVRE EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#007dc5",
            textColor: "#ffffff",
            text: "122",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE EXPRESS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:123",
    noCartridge: true,
    name: "123",
    colors: { background: "#f7941d", text: "#000000" },
    destinations: [
      {
        id: ["LA RIVIERE-SAINT-SAUVEUR / LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
      {
        id: ["LE HAVRE / LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
      {
        id: ["LISIEUX / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["LISIEUX / LA RIVIERE SAINT SAUVEUR"],
        name: "LA RIVIERE SAINT SAUVEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA RIVIERE SAINT-SAUVEUR" }],
        },
      },
      {
        id: ["HONFLEUR / LE HAVRE EXPRESS"],
        name: "LE HAVRE EXPRESS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE EXPRESS" }],
        },
      },
      {
        id: ["LISIEUX / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["LE HAVRE / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["HONFLEUR / LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f7941d",
            textColor: "#000000",
            text: "123",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:124",
    noCartridge: true,
    name: "124",
    colors: { background: "#808080", text: "#ffffff" },
    destinations: [
      {
        id: ["DEAUVILLE / DIVES-SUR-MER"],
        name: "DIVES-SUR-MER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#808080",
            textColor: "#ffffff",
            text: "124",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIVES-SUR-MER" }],
        },
      },
      {
        id: ["LISIEUX / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#808080",
            textColor: "#ffffff",
            text: "124",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
      {
        id: ["DIVES-SUR-MER / DEAUVILLE"],
        name: "DEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#808080",
            textColor: "#ffffff",
            text: "124",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DEAUVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:201",
    noCartridge: true,
    name: "201",
    colors: { background: "#df1614", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-OUEN-DE-THOUBERVILLE / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#df1614",
            textColor: "#ffffff",
            text: "201",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / HONGUEMARE-GUENOUVILLE"],
        name: "HONGUEMARE-GUENOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#df1614",
            textColor: "#ffffff",
            text: "201",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "HONGUEMARE-GUENOUVILLE" }],
        },
      },
      {
        id: ["HONGUEMARE-GUENOUVILLE / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#df1614",
            textColor: "#ffffff",
            text: "201",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:202",
    noCartridge: true,
    name: "202",
    colors: { background: "#32b5b0", text: "#000000" },
    destinations: [
      {
        id: ["LOUVIERS / VERNON"],
        name: "VERNON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#32b5b0",
            textColor: "#000000",
            text: "202",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / LOUVIERS"],
        name: "LOUVIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#32b5b0",
            textColor: "#000000",
            text: "202",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:203",
    noCartridge: true,
    name: "203",
    colors: { background: "#31a8df", text: "#000000" },
    destinations: [
      {
        id: ["SAINT-PIERRE-LÈS-ELBEUF / MARTOT"],
        name: "MARTOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#31a8df",
            textColor: "#000000",
            text: "203",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MARTOT" }],
        },
      },
      {
        id: ["LOUVIERS / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#31a8df",
            textColor: "#000000",
            text: "203",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / LOUVIERS"],
        name: "LOUVIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#31a8df",
            textColor: "#000000",
            text: "203",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:204",
    noCartridge: true,
    name: "204",
    colors: { background: "#e6ce08", text: "#000000" },
    destinations: [
      {
        id: ["BOURGTHEROULDE-INFREVILLE / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["LE BOSC-ROGER-EN-ROUMOIS / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / BOURGTHEROULDE-INFREVILLE"],
        name: "BOURGTHEROULDE-INFREVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOURGTHEROULDE" }],
        },
      },
      {
        id: ["BOSGUERARD-DE-MARCOUVILLE / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / LE BOSC-ROGER-EN-ROUMOIS"],
        name: "LE BOSC-ROGER-EN-ROUMOIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LE BOSC-ROGER-EN-ROUMOIS" }],
        },
      },
      {
        id: ["ELBEUF / THENOUVILLE"],
        name: "THENOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "THENOUVILLE" }],
        },
      },
      {
        id: ["ELBEUF / BOISSEY-LE-CHATEL"],
        name: "BOISSEY-LE-CHATEL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOISSEY-LE-CHATEL" }],
        },
      },
      {
        id: ["THENOUVILLE / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["BOISSEY-LE-CHATEL / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / BOSGUERARD-DE-MARCOUVILLE"],
        name: "BOSGUERARD-DE-MARCOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e6ce08",
            textColor: "#000000",
            text: "204",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOSGUERARD" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:205",
    noCartridge: true,
    name: "205",
    colors: { background: "#a31968", text: "#ffffff" },
    destinations: [
      {
        id: ["BEAUMONT-LE-ROGER / VAL-DE-REUIL"],
        name: "VAL-DE-REUIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VAL-DE-REUIL" }],
        },
      },
      {
        id: ["LE NEUBOURG / VAL-DE-REUIL"],
        name: "VAL-DE-REUIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VAL-DE-REUIL" }],
        },
      },
      {
        id: ["BEAUMONT-LE-ROGER / LE NEUBOURG"],
        name: "LE NEUBOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE NEUBOURG" }],
        },
      },
      {
        id: ["LE NEUBOURG / BEAUMONT-LE-ROGER"],
        name: "BEAUMONT-LE-ROGER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BEAUMONT-LE-ROGER" }],
        },
      },
      {
        id: ["VAL-DE-REUIL / BEAUMONT-LE-ROGER"],
        name: "BEAUMONT-LE-ROGER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BEAUMONT-LE-ROGER" }],
        },
      },
      {
        id: ["VAL-DE-REUIL / LE NEUBOURG"],
        name: "LE NEUBOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a31968",
            textColor: "#ffffff",
            text: "205",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE NEUBOURG" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:206",
    noCartridge: true,
    name: "206",
    colors: { background: "#835f34", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["GISORS / LES ANDELYS"],
        name: "LES ANDELYS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
      {
        id: ["GISORS / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["LES ANDELYS / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["ÉVREUX / LES ANDELYS"],
        name: "LES ANDELYS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
      {
        id: ["AUBEVOYE / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["LES ANDELYS / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#835f34",
            textColor: "#ffffff",
            text: "206",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:207",
    noCartridge: true,
    name: "207",
    colors: { background: "#e9a255", text: "#000000" },
    destinations: [
      {
        id: ["TOURNY / VERNON"],
        name: "VERNON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["LES ANDELYS / VERNON"],
        name: "VERNON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / LES ANDELYS"],
        name: "LES ANDELYS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
      {
        id: ["VERNON / GAILLON"],
        name: "GAILLON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GAILLON" }],
        },
      },
      {
        id: ["VERNON / TOURNY"],
        name: "TOURNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9a255",
            textColor: "#000000",
            text: "207",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TOURNY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:208",
    noCartridge: true,
    name: "208",
    colors: { background: "#afca17", text: "#000000" },
    destinations: [
      {
        id: ["ÉTRÉPAGNY / VERNON"],
        name: "VERNON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["VERNON / ÉTRÉPAGNY"],
        name: "ÉTRÉPAGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETREPAGNY" }],
        },
      },
      {
        id: ["GISORS / VERNON"],
        name: "VERNON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#afca17",
            textColor: "#000000",
            text: "208",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:209",
    noCartridge: true,
    name: "209",
    colors: { background: "#122e68", text: "#ffffff" },
    destinations: [
      {
        id: ["LES ANDELYS / AUBEVOYE"],
        name: "AUBEVOYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#122e68",
            textColor: "#ffffff",
            text: "209",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AUBEVOYE" }],
        },
      },
      {
        id: ["AUBEVOYE / LES ANDELYS"],
        name: "LES ANDELYS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#122e68",
            textColor: "#ffffff",
            text: "209",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:210",
    noCartridge: true,
    name: "210",
    colors: { background: "#eb3a4c", text: "#000000" },
    destinations: [
      {
        id: ["ÉVREUX / VERNON"],
        name: "VERNON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#000000",
            text: "210",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNON" }],
        },
      },
      {
        id: ["VERNON / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#000000",
            text: "210",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ÉVREUX / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#000000",
            text: "210",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["GISORS / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#000000",
            text: "210",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["CAILLOUET-ORGEVILLE / EVREUX"],
        name: "EVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#000000",
            text: "210",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ÉVREUX / CAILLOUET-ORGEVILLE"],
        name: "CAILLOUET-ORGEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eb3a4c",
            textColor: "#000000",
            text: "210",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "CAILLOUET-ORGEVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:211",
    noCartridge: true,
    name: "211",
    colors: { background: "#722f82", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / DREUX"],
        name: "DREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#722f82",
            textColor: "#ffffff",
            text: "211",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DREUX" }],
        },
      },
      {
        id: ["DREUX / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#722f82",
            textColor: "#ffffff",
            text: "211",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["MESNIL-SUR-L'ESTRÉE / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#722f82",
            textColor: "#ffffff",
            text: "211",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:212",
    noCartridge: true,
    name: "212",
    colors: { background: "#83d4ed", text: "#000000" },
    destinations: [
      {
        id: ["VERNEUIL-SUR-AVRE / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["DAMVILLE / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["VERNEUIL-SUR-AVRE / CONDÉ-SUR-ITON"],
        name: "CONDÉ-SUR-ITON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-ITON" }],
        },
      },
      {
        id: ["VERNEUIL-SUR-AVRE / DAMVILLE"],
        name: "DAMVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DAMVILLE" }],
        },
      },
      {
        id: ["DAMVILLE / VERNEUIL-SUR-AVRE"],
        name: "VERNEUIL-SUR-AVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
      {
        id: ["CONDÉ-SUR-ITON / VERNEUIL-SUR-AVRE"],
        name: "VERNEUIL-SUR-AVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
      {
        id: ["ÉVREUX / DAMVILLE"],
        name: "DAMVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DAMVILLE" }],
        },
      },
      {
        id: ["ÉVREUX / VERNEUIL-SUR-AVRE"],
        name: "VERNEUIL-SUR-AVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
      {
        id: ["BRETEUIL-SUR-ITON / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#83d4ed",
            textColor: "#000000",
            text: "212",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:213",
    noCartridge: true,
    name: "213",
    colors: { background: "#ef8464", text: "#000000" },
    destinations: [
      {
        id: ["ÉVREUX / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ef8464",
            textColor: "#000000",
            text: "213",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ef8464",
            textColor: "#000000",
            text: "213",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:214",
    noCartridge: true,
    name: "214",
    colors: { background: "#e7adcf", text: "#000000" },
    destinations: [
      {
        id: ["LE NEUBOURG / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["HONFLEUR / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["HONFLEUR / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["BRIONNE / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["PONT-AUDEMER / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["ÉVREUX / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["ÉVREUX / HONFLEUR"],
        name: "HONFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HONFLEUR" }],
        },
      },
      {
        id: ["ÉVREUX / LE NEUBOURG"],
        name: "LE NEUBOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7adcf",
            textColor: "#000000",
            text: "214",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE NEUBOURG" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:215",
    noCartridge: true,
    name: "215",
    colors: { background: "#719152", text: "#ffffff" },
    destinations: [
      {
        id: ["ÉVREUX / LOUVIERS"],
        name: "LOUVIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
      {
        id: ["ÉVREUX / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["LOUVIERS / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["PONT-DE-L'ARCHE / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["VAL-DE-REUIL / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ÉVREUX / ELBEUF"],
        name: "ELBEUF",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF" }],
        },
      },
      {
        id: ["ELBEUF / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["LOUVIERS / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ROUEN / EVREUX"],
        name: "EVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ROUEN / ÉVREUX"],
        name: "ÉVREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EVREUX" }],
        },
      },
      {
        id: ["ELBEUF / LOUVIERS"],
        name: "LOUVIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
      {
        id: ["ELBEUF / PONT-DE-L'ARCHE"],
        name: "PONT-DE-L'ARCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT-DE-L'ARCHE" }],
        },
      },
      {
        id: ["ROUEN / LOUVIERS"],
        name: "LOUVIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#719152",
            textColor: "#ffffff",
            text: "215",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LOUVIERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:217",
    noCartridge: true,
    name: "217",
    colors: { background: "#b72a41", text: "#ffffff" },
    destinations: [
      {
        id: ["BERNAY / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b72a41",
            textColor: "#ffffff",
            text: "217",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BERNAY"],
        name: "BERNAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b72a41",
            textColor: "#ffffff",
            text: "217",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BERNAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:218",
    noCartridge: true,
    name: "218",
    colors: { background: "#b26bc1", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / CHARLEVAL"],
        name: "CHARLEVAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#000000",
            text: "218",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CHARLEVAL" }],
        },
      },
      {
        id: ["CHARLEVAL / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#000000",
            text: "218",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["VASCOEUIL / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#000000",
            text: "218",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / VASCOEUIL"],
        name: "VASCOEUIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b26bc1",
            textColor: "#000000",
            text: "218",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VASCOEUIL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:219",
    noCartridge: true,
    name: "219",
    colors: { background: "#7a79b6", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["LE MESNIL-ESNARD / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["GISORS / FLEURY-SUR-ANDELLE"],
        name: "FLEURY-SUR-ANDELLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLEURY-SUR-ANDELLE" }],
        },
      },
      {
        id: ["GISORS / SAUSSAY-LA-CAMPAGNE"],
        name: "SAUSSAY-LA-CAMPAGNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAUSSAY-LA-CAMPAGNE" }],
        },
      },
      {
        id: ["GISORS / ÉTRÉPAGNY"],
        name: "ÉTRÉPAGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETREPAGNY" }],
        },
      },
      {
        id: ["GISORS / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["SAUSSAY-LA-CAMPAGNE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["SAUSSAY-LA-CAMPAGNE / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["FLEURY-SUR-ANDELLE / GISORS"],
        name: "GISORS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GISORS" }],
        },
      },
      {
        id: ["ROUEN / FLEURY-SUR-ANDELLE"],
        name: "FLEURY-SUR-ANDELLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a79b6",
            textColor: "#000000",
            text: "219",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLEURY-SUR-ANDELLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:220",
    noCartridge: true,
    name: "220",
    colors: { background: "#fdcb36", text: "#000000" },
    destinations: [
      {
        id: ["LES ANDELYS / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fdcb36",
            textColor: "#000000",
            text: "220",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / LES ANDELYS"],
        name: "LES ANDELYS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fdcb36",
            textColor: "#000000",
            text: "220",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES ANDELYS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:221",
    noCartridge: true,
    name: "221",
    colors: { background: "#ed1d8a", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / ALIZAY"],
        name: "ALIZAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ed1d8a",
            textColor: "#000000",
            text: "221",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALIZAY" }],
        },
      },
      {
        id: ["ALIZAY / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ed1d8a",
            textColor: "#000000",
            text: "221",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:222",
    noCartridge: true,
    name: "222",
    colors: { background: "#33a739", text: "#ffffff" },
    destinations: [
      {
        id: ["LE BOSC-ROGER-EN-ROUMOIS / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a739",
            textColor: "#ffffff",
            text: "222",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / LE BOSC-ROGER-EN-ROUMOIS"],
        name: "LE BOSC-ROGER-EN-ROUMOIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a739",
            textColor: "#ffffff",
            text: "222",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LE BOSC-ROGER-EN-ROUMOIS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:223",
    noCartridge: true,
    name: "223",
    colors: { background: "#5688c6", text: "#000000" },
    destinations: [
      {
        id: ["PONT-AUDEMER / BOURG-ACHARD"],
        name: "BOURG-ACHARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOURG-ACHARD" }],
        },
      },
      {
        id: ["PONT-AUDEMER / ST-OUEN-DE-THOUBERVILLE"],
        name: "ST-OUEN-DE-THOUBERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-OUEN-DE-THOUBERVILLE" }],
        },
      },
      {
        id: ["PONT-AUDEMER / LA HAYE-DE-ROUTOT"],
        name: "LA HAYE-DE-ROUTOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA HAYE-DE-ROUTOT" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BARNEVILLE-SUR-SEINE"],
        name: "BARNEVILLE-SUR-SEINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "BARNEVILLE-SUR-SEINE" }],
        },
      },
      {
        id: ["PONT-AUDEMER / BOUQUETOT"],
        name: "BOUQUETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOUQUETOT" }],
        },
      },
      {
        id: ["LA HAYE-DE-ROUTOT / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["BOURG-ACHARD / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["ST-OUEN-DE-THOUBERVILLE / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["ROUTOT / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["BARNEVILLE-SUR-SEINE / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5688c6",
            textColor: "#000000",
            text: "223",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:224",
    noCartridge: true,
    name: "224",
    colors: { background: "#a9b76a", text: "#000000" },
    destinations: [
      {
        id: ["LISIEUX / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a9b76a",
            textColor: "#000000",
            text: "224",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
      {
        id: ["PONT-AUDEMER / LISIEUX"],
        name: "LISIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a9b76a",
            textColor: "#000000",
            text: "224",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISIEUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:225",
    noCartridge: true,
    name: "225",
    colors: { background: "#512b0f", text: "#ffffff" },
    destinations: [
      {
        id: ["MARCILLY-SUR-EURE / EZY-SUR-EURE"],
        name: "EZY-SUR-EURE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EZY-SUR-EURE" }],
        },
      },
      {
        id: ["IVRY-LA-BATAILLE / BUEIL"],
        name: "BUEIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BUEIL" }],
        },
      },
      {
        id: ["GARENNES-SUR-EURE / BUEIL"],
        name: "BUEIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BUEIL" }],
        },
      },
      {
        id: ["BUEIL / EZY-SUR-EURE"],
        name: "EZY-SUR-EURE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "EZY-SUR-EURE" }],
        },
      },
      {
        id: ["BUEIL / MARCILLY-SUR-EURE"],
        name: "MARCILLY-SUR-EURE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MARCILLY-SUR-EURE" }],
        },
      },
      {
        id: ["BUEIL / GARENNES-SUR-EURE"],
        name: "GARENNES-SUR-EURE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GARENNES-SUR-EURE" }],
        },
      },
      {
        id: ["BUEIL / IVRY-LA-BATAILLE"],
        name: "IVRY-LA-BATAILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "IVRY-LA-BATAILLE" }],
        },
      },
      {
        id: ["EZY-SUR-EURE / MARCILLY-SUR-EURE"],
        name: "MARCILLY-SUR-EURE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MARCILLY-SUR-EURE" }],
        },
      },
      {
        id: ["BREVAL / MARCILLY-SUR-EURE"],
        name: "MARCILLY-SUR-EURE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MARCILLY-SUR-EURE" }],
        },
      },
      {
        id: ["MARCILLY-SUR-EURE / BRÉVAL"],
        name: "BRÉVAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BREVAL" }],
        },
      },
      {
        id: ["EZY-SUR-EURE / BUEIL"],
        name: "BUEIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BUEIL" }],
        },
      },
      {
        id: ["MARCILLY-SUR-EURE / BUEIL"],
        name: "BUEIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#512b0f",
            textColor: "#ffffff",
            text: "225",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BUEIL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:226",
    noCartridge: true,
    name: "226",
    colors: { background: "#b75858", text: "#ffffff" },
    destinations: [
      {
        id: ["BOURTH / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["VERNEUIL-SUR-AVRE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / VERNEUIL-SUR-AVRE"],
        name: "VERNEUIL-SUR-AVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VERNEUIL-SUR-AVRE" }],
        },
      },
      {
        id: ["L'AIGLE / CHANDAI"],
        name: "CHANDAI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b75858",
            textColor: "#ffffff",
            text: "226",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CHANDAI" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:227",
    noCartridge: true,
    name: "227",
    colors: { background: "#b3549a", text: "#000000" },
    destinations: [
      {
        id: ["PONT-AUDEMER / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b3549a",
            textColor: "#000000",
            text: "227",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["LE HAVRE / PONT-AUDEMER"],
        name: "PONT-AUDEMER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b3549a",
            textColor: "#000000",
            text: "227",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PONT-AUDEMER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:301",
    noCartridge: true,
    name: "301",
    colors: { background: "#7ab929", text: "#ffffff" },
    destinations: [
      {
        id: ["CARENTAN / CHERBOURG"],
        name: "CHERBOURG",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7ab929",
            textColor: "#ffffff",
            text: "301",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CHERBOURG" }],
        },
      },
      {
        id: ["CHERBOURG / CARENTAN"],
        name: "CARENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7ab929",
            textColor: "#ffffff",
            text: "301",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CARENTAN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:302",
    noCartridge: true,
    name: "302",
    colors: { background: "#ecce00", text: "#000000" },
    destinations: [
      {
        id: ["SANT-LO / CARENTAN"],
        name: "CARENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ecce00",
            textColor: "#000000",
            text: "302",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CARENTAN" }],
        },
      },
      {
        id: ["CARENTAN / SAINT-LO"],
        name: "SAINT-LO",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ecce00",
            textColor: "#000000",
            text: "302",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:303",
    noCartridge: true,
    name: "303",
    colors: { background: "#ff0009", text: "#000000" },
    destinations: [
      {
        id: ["SAINT-SAUVEUR / COUTANCES"],
        name: "COUTANCES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["LA HAYE-DU-PUITS / COUTANCES"],
        name: "COUTANCES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["COUTANCES / SAINT-SAUVEUR"],
        name: "SAINT-SAUVEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-SAUVEUR" }],
        },
      },
      {
        id: ["COUTANCES (WOOD) / LA HAYE"],
        name: "LA HAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA HAYE" }],
        },
      },
      {
        id: ["VALOGNES / COUTANCES"],
        name: "COUTANCES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["COUTANCES / VALOGNES"],
        name: "VALOGNES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VALOGNES" }],
        },
      },
      {
        id: ["LA HAYE-DU-PUITS / VALOGNES"],
        name: "VALOGNES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VALOGNES" }],
        },
      },
      {
        id: ["COUTANCES (SNCF) / LESSAY"],
        name: "LESSAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ff0009",
            textColor: "#000000",
            text: "303",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LESSAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:304",
    noCartridge: true,
    name: "304",
    colors: { background: "#209645", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-LO / VIRE"],
        name: "VIRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#209645",
            textColor: "#ffffff",
            text: "304",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
      {
        id: ["VIRE / SAINT-LO"],
        name: "SAINT-LO",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#209645",
            textColor: "#ffffff",
            text: "304",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:305",
    noCartridge: true,
    name: "305",
    colors: { background: "#f39200", text: "#000000" },
    destinations: [
      {
        id: ["GRANVILLE / SAINT-LO [MDD]"],
        name: "SAINT-LO [MDD]",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO [MDD]" }],
        },
      },
      {
        id: ["GRANVILLE / SAINT-LO"],
        name: "SAINT-LO",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
      {
        id: ["GRANVILLE / COUTANCES"],
        name: "COUTANCES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
      {
        id: ["GRANVILLE / LISON"],
        name: "LISON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISON" }],
        },
      },
      {
        id: ["COUTANCES / GRANVILLE"],
        name: "GRANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["LISON / GRANVILLE"],
        name: "GRANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["SAINT-LO / GRANVILLE"],
        name: "GRANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["COUTANCES / LISON"],
        name: "LISON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LISON" }],
        },
      },
      {
        id: ["LISON / COUTANCES"],
        name: "COUTANCES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f39200",
            textColor: "#000000",
            text: "305",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTANCES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:306",
    noCartridge: true,
    name: "306",
    colors: { background: "#a0519a", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-LO / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["AVRANCHES / SAINT-LO [MDD]"],
        name: "SAINT-LO [MDD]",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO [MDD]" }],
        },
      },
      {
        id: ["VILLEDIEU-LES-POELES / SAINT-LO [MDD]"],
        name: "SAINT-LO [MDD]",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO [MDD]" }],
        },
      },
      {
        id: ["SAINT-LO / PERCY"],
        name: "PERCY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PERCY" }],
        },
      },
      {
        id: ["AVRANCHES / SAINT-LO"],
        name: "SAINT-LO",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a0519a",
            textColor: "#ffffff",
            text: "306",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-LO" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:307",
    noCartridge: true,
    name: "307",
    colors: { background: "#e52725", text: "#ffffff" },
    destinations: [
      {
        id: ["SARTILLY / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52725",
            textColor: "#ffffff",
            text: "307",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["AVRANCHES / GRANVILLE"],
        name: "GRANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52725",
            textColor: "#ffffff",
            text: "307",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["GRANVILLE / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52725",
            textColor: "#ffffff",
            text: "307",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:308",
    noCartridge: true,
    name: "308",
    colors: { background: "#907d24", text: "#ffffff" },
    destinations: [
      {
        id: ["GRANVILLE / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["AVRANCHES / GRANVILLE"],
        name: "GRANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["BEAUVOIR / GRANVILLE"],
        name: "GRANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GRANVILLE" }],
        },
      },
      {
        id: ["GRANVILLE / BEAUVOIR"],
        name: "BEAUVOIR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#907d24",
            textColor: "#ffffff",
            text: "308",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BEAUVOIR" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:309",
    noCartridge: true,
    name: "309",
    colors: { background: "#c44e23", text: "#ffffff" },
    destinations: [
      {
        id: ["SAINT-HILAIRE-DU-HARCOUET / VIRE"],
        name: "VIRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
      {
        id: ["MORTAIN / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["SAINT-HILAIRE-DU-HARCOUET / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["DUCEY / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["AVRANCHES / VIRE"],
        name: "VIRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VIRE" }],
        },
      },
      {
        id: ["AVRANCHES / DUCEY"],
        name: "DUCEY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DUCEY" }],
        },
      },
      {
        id: ["AVRANCHES / PONTAUBAULT"],
        name: "PONTAUBAULT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "PONTAUBAULT" }],
        },
      },
      {
        id: ["AVRANCHES / MORTAIN"],
        name: "MORTAIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAIN" }],
        },
      },
      {
        id: ["VIRE / AVRANCHES"],
        name: "AVRANCHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "AVRANCHES" }],
        },
      },
      {
        id: ["VIRE / SAINT-HILAIRE-DU-HARCOUET"],
        name: "SAINT-HILAIRE-DU-HARCOUET",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c44e23",
            textColor: "#ffffff",
            text: "309",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "ST-HILAIRE-DU-HARCOUET" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:310",
    noCartridge: true,
    name: "310",
    colors: { background: "#8cc4d1", text: "#000000" },
    destinations: [
      {
        id: ["COUTANCES / LES PLAGES"],
        name: "LES PLAGES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#8cc4d1",
            textColor: "#000000",
            text: "310",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES PLAGES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:401",
    noCartridge: true,
    name: "401",
    colors: { background: "#f18665", text: "#000000" },
    destinations: [
      {
        id: ["PUTANGES / BRIOUZE / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f18665",
            textColor: "#000000",
            text: "401",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["FLERS / BRIOUZE / PUTANGES"],
        name: "PUTANGES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f18665",
            textColor: "#000000",
            text: "401",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PUTANGES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:402",
    noCartridge: true,
    name: "402",
    colors: { background: "#d1b706", text: "#000000" },
    destinations: [
      {
        id: ["FLERS / LANDISACQ"],
        name: "LANDISACQ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LANDISACQ" }],
        },
      },
      {
        id: ["LANDISACQ / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["TINCHEBRAY / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["TINCHEBRAY / LANDISACQ"],
        name: "LANDISACQ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LANDISACQ" }],
        },
      },
      {
        id: ["LANDISACQ / TINCHEBRAY"],
        name: "TINCHEBRAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#d1b706",
            textColor: "#000000",
            text: "402",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TINCHEBRAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:403",
    noCartridge: true,
    name: "403",
    colors: { background: "#e8afd0", text: "#000000" },
    destinations: [
      {
        id: ["FLERS / MESSEI / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["SAINT-DENIS-SUR-SARTHON / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["FLERS / LA FERTÉ MACÉ / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["MESSEI / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["FLERS / BAGNOLES DE L'ORNE"],
        name: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / BAGNOLES DE L'ORNE"],
        name: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
      {
        id: ["ALENÇON / CONDE-SUR-SARTHE"],
        name: "CONDE-SUR-SARTHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-SARTHE" }],
        },
      },
      {
        id: ["ALENÇON / LA FERTÉ MACÉ / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["ALENÇON / PACE / LALACELLE"],
        name: "LALACELLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LALACELLE" }],
        },
      },
      {
        id: ["ALENÇON / PACE / SAINT-DENIS-SUR-SARTHON"],
        name: "SAINT-DENIS-SUR-SARTHON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-DENIS-SUR-SARTHON" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / MESSEI / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["COUTERNE / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / COUTERNE"],
        name: "COUTERNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "COUTERNE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / MEHOUDIN"],
        name: "MEHOUDIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MEHOUDIN" }],
        },
      },
      {
        id: ["FLERS / BAGNOLES DE L'ORNE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["FLERS / MESSEI / LA FERRIÈRE AUX ETANGS"],
        name: "LA FERRIÈRE AUX ETANGS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA FERRIERE AUX ETANGS" }],
        },
      },
      {
        id: ["FLERS / LA FERTÉ MACÉ / MEHOUDIN"],
        name: "MEHOUDIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MEHOUDIN" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE / LA FERTÉ / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["LALACELLE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / LA SAUVAGÈRE"],
        name: "LA SAUVAGÈRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA SAUVAGERE" }],
        },
      },
      {
        id: ["FLERS / MESSEI"],
        name: "MESSEI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MESSEI" }],
        },
      },
      {
        id: ["LA SAUVAGÈRE / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["ALENÇON / COUTERNE / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE / MESSEI / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["ALENÇON / BAGNOLES / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["COUTERNE / LA FERTÉ MACÉ / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e8afd0",
            textColor: "#000000",
            text: "403",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:404",
    noCartridge: true,
    name: "404",
    colors: { background: "#845f34", text: "#ffffff" },
    destinations: [
      {
        id: ["CUISSAI / LONRAI / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / LONRAI / CUISSAI"],
        name: "CUISSAI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CUISSAI" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / CARROUGES / SEES"],
        name: "SEES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SEES" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / CARROUGES / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / CARROUGES / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / DAMIGNY / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / LONRAI / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / LONRAI / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["SEES / CARROUGES / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#845f34",
            textColor: "#ffffff",
            text: "404",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:405",
    noCartridge: true,
    name: "405",
    colors: { background: "#abb96b", text: "#000000" },
    destinations: [
      {
        id: ["DOMFRONT / BAGNOLES / LA FERTÉ-MACÉ"],
        name: "LA FERTÉ-MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE-MACE" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / BAGNOLES / DOMFRONT"],
        name: "DOMFRONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOMFRONT" }],
        },
      },
      {
        id: ["LA FERTÉ MACÉ / CHAMPSECRET / DOMFRONT"],
        name: "DOMFRONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOMFRONT" }],
        },
      },
      {
        id: ["DOMFRONT / BAGNOLES / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#abb96b",
            textColor: "#000000",
            text: "405",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:406",
    noCartridge: true,
    name: "406",
    colors: { background: "#7a7ab8", text: "#000000" },
    destinations: [
      {
        id: ["LONLAY-L'ABBAYE / DOMFRONT / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["LONLAY-L'ABBAYE / DOMFRONT"],
        name: "DOMFRONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOMFRONT" }],
        },
      },
      {
        id: ["FLERS / LE CHATELLIER / LONLAY-L'ABBAYE"],
        name: "LONLAY-L'ABBAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LONLAY-L'ABBAYE" }],
        },
      },
      {
        id: ["FLERS / DOMFRONT / LONLAY-L'ABBAYE"],
        name: "LONLAY-L'ABBAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LONLAY-L'ABBAYE" }],
        },
      },
      {
        id: ["FLERS / LE CHATELLIER / DOMFRONT"],
        name: "DOMFRONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOMFRONT" }],
        },
      },
      {
        id: ["DOMFRONT / LONLAY-L'ABBAYE"],
        name: "LONLAY-L'ABBAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LONLAY-L'ABBAYE" }],
        },
      },
      {
        id: ["DOMFRONT / LE CHATELLIER / FLERS"],
        name: "FLERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLERS" }],
        },
      },
      {
        id: ["DOMFRONT / ST-BOMER-LES-FORGES"],
        name: "ST-BOMER-LES-FORGES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7a7ab8",
            textColor: "#000000",
            text: "406",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-BOMER-LES-FORGES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:407",
    noCartridge: true,
    name: "407",
    colors: { background: "#c69615", text: "#000000" },
    destinations: [
      {
        id: ["LA FERTÉ MACÉ / SAINT-GEORGES-D'ANNEBECQ"],
        name: "SAINT-GEORGES-D'ANNEBECQ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ST-GEORGES-D'ANNEBECQ" }],
        },
      },
      {
        id: ["BAGNOLES DE L'ORNE / LA FERTÉ / ARGENTAN"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / RANES / BAGNOLES DE L'ORNE"],
        name: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
      {
        id: ["ARGENTAN / ÉCOUCHÉ"],
        name: "ÉCOUCHÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ECOUCHE" }],
        },
      },
      {
        id: ["ARGENTAN / LA FERTÉ MACÉ"],
        name: "LA FERTÉ MACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE MACE" }],
        },
      },
      {
        id: ["ARGENTAN / BAGNOLES DE L'ORNE"],
        name: "BAGNOLES DE L'ORNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c69615",
            textColor: "#000000",
            text: "407",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAGNOLES DE L'ORNE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:408",
    noCartridge: true,
    name: "408",
    colors: { background: "#f87479", text: "#000000" },
    destinations: [
      {
        id: ["FALAISE / OCCAGNES / ARGENTAN"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "408",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / OCCAGNES / FALAISE", "ARGENTANT-OCCAGNES-FALAISE"],
        name: "FALAISE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "408",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FALAISE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:409",
    noCartridge: true,
    name: "409",
    colors: { background: "#b0cb1d", text: "#000000" },
    destinations: [
      {
        id: ["VIMOUTIERS / GACÉ"],
        name: "GACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GACE" }],
        },
      },
      {
        id: ["VIMOUTIERS / SEES / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["CHAILLOUÉ / SEES"],
        name: "SEES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SEES" }],
        },
      },
      {
        id: ["GACÉ / NEUVILLE-SUR-TOUQUES / VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["SÉES / GACÉ / VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["ALENÇON / SEES / VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["SEES / CHAILLOUÉ"],
        name: "CHAILLOUÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CHAILLOUE" }],
        },
      },
      {
        id: ["ALENÇON / GACÉ / VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["SEES / NONANT-LE-PIN"],
        name: "NONANT-LE-PIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NONANT-LE-PIN" }],
        },
      },
      {
        id: ["NONANT-LE-PIN / CHAILLOUÉ / SEES"],
        name: "SEES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b0cb1d",
            textColor: "#000000",
            text: "409",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SEES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:410",
    noCartridge: true,
    name: "410",
    colors: { background: "#eba457", text: "#000000" },
    destinations: [
      {
        id: ["VIMOUTIERS / TRUN / ARGENTAN"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / TRUN / VIMOUTIERS"],
        name: "VIMOUTIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIMOUTIERS" }],
        },
      },
      {
        id: ["ARGENTAN / BAILLEUL / TRUN"],
        name: "TRUN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TRUN" }],
        },
      },
      {
        id: ["TRUN / ARGENTAN"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / BAILLEUL"],
        name: "BAILLEUL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#eba457",
            textColor: "#000000",
            text: "410",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BAILLEUL" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:411",
    noCartridge: true,
    name: "411",
    colors: { background: "#fecd38", text: "#000000" },
    destinations: [
      {
        id: ["GACÉ / EXMES / ARGENTAN"],
        name: "ARGENTAN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fecd38",
            textColor: "#000000",
            text: "411",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ARGENTAN" }],
        },
      },
      {
        id: ["ARGENTAN / EXMES / GACÉ"],
        name: "GACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fecd38",
            textColor: "#000000",
            text: "411",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GACE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:412",
    noCartridge: true,
    name: "412",
    colors: { background: "#b4569b", text: "#000000" },
    destinations: [
      {
        id: ["GACÉ / SAINTE-GAUBURGE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["RAI / AUBE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["AUBE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["SAINTE-GAUBURGE-SAINTE-COLOMBE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / RAI / AUBE"],
        name: "AUBE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AUBE" }],
        },
      },
      {
        id: ["L'AIGLE / SAINTE-GAUBURGE / GACÉ"],
        name: "GACÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GACE" }],
        },
      },
      {
        id: ["L'AIGLE / SAINTE-GAUBURGE-SAINTE-COLOMBE"],
        name: "SAINTE-GAUBURGE-SAINTE-COLOMBE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b4569b",
            textColor: "#000000",
            text: "412",
            outlineColor: "#FFFFFF",
          },
          pages: [[{ text: "SAINTE-GAUBURGE" }, { text: "SAINTE-COLOMBE" }]],
        },
      },
    ],
  },
  {
    id: "NOMAD:413",
    noCartridge: true,
    name: "413",
    colors: { background: "#ea5984", text: "#000000" },
    destinations: [
      {
        id: ["LA FERTÉ-EN-OUCHE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5984",
            textColor: "#000000",
            text: "413",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / LA FERTÉ-EN-OUCHE"],
        name: "LA FERTÉ-EN-OUCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5984",
            textColor: "#000000",
            text: "413",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA FERTE-EN-OUCHE" }],
        },
      },
      {
        id: ["VIMOUTIERS / LA FERTÉ-EN-OUCHE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5984",
            textColor: "#000000",
            text: "413",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:414",
    noCartridge: true,
    name: "414",
    colors: { background: "#e96c0f", text: "#000000" },
    destinations: [
      {
        id: ["TOUROUVRE AU PERCHE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / TOUROUVRE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LA VENTROUZE"],
        name: "LA VENTROUZE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA VENTROUZE" }],
        },
      },
      {
        id: ["L'AIGLE / TOUROUVRE / RANDONNAI"],
        name: "RANDONNAI",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "RANDONNAI" }],
        },
      },
      {
        id: ["L'AIGLE / TOUROUVRE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["LA VENTROUZE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / TOUROUVRE"],
        name: "TOUROUVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TOUROUVRE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / CRULAI / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["L'AIGLE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["L'AIGLE / SAINT-LANGIS-LES-MORTAGNE"],
        name: "SAINT-LANGIS-LES-MORTAGNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e96c0f",
            textColor: "#000000",
            text: "414",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-LANGIS-LES-MORTAGNE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:415",
    noCartridge: true,
    name: "415",
    colors: { background: "#588ac7", text: "#000000" },
    destinations: [
      {
        id: ["MOULINS-LA-MARCHE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["ALENÇON / MOULINS-LA-MARCHE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["ALENÇON / LARRE / MENIL-ERREUX"],
        name: "MENIL-ERREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MENIL-ERREUX" }],
        },
      },
      {
        id: ["ALENÇON / LARRE / ESSAY"],
        name: "ESSAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ESSAY" }],
        },
      },
      {
        id: ["L'AIGLE / MOULINS-LA-MARCHE"],
        name: "MOULINS-LA-MARCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MOULINS-LA-MARCHE" }],
        },
      },
      {
        id: ["L'AIGLE / ESSAY / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / LARRE / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
      {
        id: ["MENIL-ERREUX / SEMALLE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["COURTOMER / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#588ac7",
            textColor: "#000000",
            text: "415",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:416",
    noCartridge: true,
    name: "416",
    colors: { background: "#33a8e0", text: "#000000" },
    destinations: [
      {
        id: ["L'AIGLE / SAINT-MAURICE-LÈS-CHARENCEY"],
        name: "SAINT-MAURICE-LÈS-CHARENCEY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a8e0",
            textColor: "#000000",
            text: "416",
            outlineColor: "#FFFFFF",
          },
          pages: [[{ text: "SAINT-MAURICE" }, { text: "LES-CHARENCEY" }]],
        },
      },
      {
        id: ["SAINT-MAURICE-LÈS-CHARENCEY / L'AIGLE"],
        name: "L'AIGLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#33a8e0",
            textColor: "#000000",
            text: "416",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "L'AIGLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:417",
    noCartridge: true,
    name: "417",
    colors: { background: "#7bb92d", text: "#ffffff" },
    destinations: [
      {
        id: ["MORTAGNE-AU-PERCHE / LE MÊLE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / LE MÊLE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["ALENÇON / MORTAGNE / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["MORTAGNE / REMALARD / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / MORTAGNE / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / REMALARD"],
        name: "REMALARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "REMALARD" }],
        },
      },
      {
        id: ["LA CHAPELLE-MONTLIGEON / MORTAGNE"],
        name: "MORTAGNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE" }],
        },
      },
      {
        id: ["REMALARD / CONDE / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["LE MÊLE-SUR-SARTHE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LE MÊLE"],
        name: "LE MÊLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE MELE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / CONDE-SUR-HUISNE"],
        name: "CONDE-SUR-HUISNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-HUISNE" }],
        },
      },
      {
        id: ["REMALARD / CONDE-SUR-HUISNE"],
        name: "CONDE-SUR-HUISNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CONDE-SUR-HUISNE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-P / LA CHAPELLE-MONTLIGEON"],
        name: "LA CHAPELLE-MONTLIGEON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "LA CHAPELLE-MONTLIGEON" }],
        },
      },
      {
        id: ["ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#7bb92d",
            textColor: "#ffffff",
            text: "417",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:418",
    noCartridge: true,
    name: "418",
    colors: { background: "#e5d461", text: "#000000" },
    destinations: [
      {
        id: ["BELLÊME / MAMERS / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / BELLEME / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["ALENÇON / MAMERS / BELLÊME"],
        name: "BELLÊME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
      {
        id: ["ALENÇON / MAMERS"],
        name: "MAMERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MAMERS" }],
        },
      },
      {
        id: ["ALENÇON / MAMERS / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["MAMERS / ALENÇON"],
        name: "ALENÇON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
      {
        id: ["MAMERS / BELLÊME / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / BERD'HUIS"],
        name: "BERD'HUIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERD'HUIS" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / NOCE"],
        name: "NOCE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOCE" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / BELLÊME / MAMERS"],
        name: "MAMERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MAMERS" }],
        },
      },
      {
        id: ["BERD'HUIS / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["BELLÊME / NOGENT-LE-ROTROU"],
        name: "NOGENT-LE-ROTROU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOGENT-LE-ROTROU" }],
        },
      },
      {
        id: ["NOGENT-LE-ROTROU / BERD'HUIS / BELLÊME"],
        name: "BELLÊME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e5d461",
            textColor: "#000000",
            text: "418",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:419",
    noCartridge: true,
    name: "419",
    colors: { background: "#147684", text: "#ffffff" },
    destinations: [
      {
        id: ["CETON / BELLÊME / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["IGÉ / BELLÊME / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["LE GUÉ-DE-LA-CHÂINE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / BELLÊME / CETON"],
        name: "CETON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CETON" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LE GUÉ-DE-LA-CHÂINE"],
        name: "LE GUÉ-DE-LA-CHÂINE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE GUE-DE-LA-CHAINE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / BELLÊME"],
        name: "BELLÊME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#147684",
            textColor: "#ffffff",
            text: "419",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:420",
    noCartridge: true,
    name: "420",
    colors: { background: "#b82b41", text: "#ffffff" },
    destinations: [
      {
        id: ["IGE / BELLÊME"],
        name: "BELLÊME",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b82b41",
            textColor: "#ffffff",
            text: "420",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BELLEME" }],
        },
      },
      {
        id: ["BELLÊME / IGE"],
        name: "IGE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b82b41",
            textColor: "#ffffff",
            text: "420",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "IGE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:421",
    noCartridge: true,
    name: "421",
    colors: { background: "#35b6b2", text: "#000000" },
    destinations: [
      {
        id: ["SERIGNY / MAMERS"],
        name: "MAMERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#35b6b2",
            textColor: "#000000",
            text: "421",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MAMERS" }],
        },
      },
      {
        id: ["MAMERS / SERIGNY"],
        name: "SERIGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#35b6b2",
            textColor: "#000000",
            text: "421",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SERIGNY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:422",
    noCartridge: true,
    name: "422",
    colors: { background: "#164194", text: "#ffffff" },
    destinations: [
      {
        id: ["LONGNY-AU-PERCHE / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["LA LOUPE / LONGNY-AU-PERCHE"],
        name: "LONGNY-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LONGNY-AU-PERCHE" }],
        },
      },
      {
        id: ["LA LOUPE / LONGNY / MORTAGNE-AU-PERCHE"],
        name: "MORTAGNE-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MORTAGNE-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LONGNY-AU-PERCHE"],
        name: "LONGNY-AU-PERCHE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LONGNY-AU-PERCHE" }],
        },
      },
      {
        id: ["MORTAGNE-AU-PERCHE / LA LOUPE"],
        name: "LA LOUPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA LOUPE" }],
        },
      },
      {
        id: ["LONGNY-AU-PERCHE / LA LOUPE"],
        name: "LA LOUPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#164194",
            textColor: "#ffffff",
            text: "422",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA LOUPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:425",
    noCartridge: true,
    name: "425",
    colors: { background: "#f87479", text: "#000000" },
    destinations: [
      {
        id: ["L'AIGLE / DREUX"],
        name: "DREUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DREUX" }],
        },
      },
      {
        id: ["L'AIGLE / SURDON"],
        name: "SURDON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SURDON" }],
        },
      },
      {
        id: ["ALENCON / SURDON"],
        name: "SURDON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SURDON" }],
        },
      },
      {
        id: ["SURDON / ALENCON"],
        name: "ALENCON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f87479",
            textColor: "#000000",
            text: "425",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALENCON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:501",
    noCartridge: true,
    name: "501",
    colors: { background: "#42539e", text: "#ffffff" },
    destinations: [
      {
        id: ["DIEPPE / LUNERAY"],
        name: "LUNERAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LUNERAY" }],
        },
      },
      {
        id: ["DIEPPE / CRASVILLE-LA-R"],
        name: "CRASVILLE-LA-R",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "CRASVILLE-LA-ROCQUEFORT" }],
        },
      },
      {
        id: ["DIEPPE / BRACHY"],
        name: "BRACHY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BRACHY" }],
        },
      },
      {
        id: ["LUNERAY / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["LA GAILLARDE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["BRACHY / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["FONTAINE-LE-DUN / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / LA GAILLARDE"],
        name: "LA GAILLARDE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA GAILLARDE" }],
        },
      },
      {
        id: ["DIEPPE / ST-PIERRE-LE-VIEUX"],
        name: "ST-PIERRE-LE-VIEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "ST-PIERRE-LE-VIEUX" }],
        },
      },
      {
        id: ["DIEPPE / FONTAINE-LE-DUN"],
        name: "FONTAINE-LE-DUN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#42539e",
            textColor: "#ffffff",
            text: "501",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FONTAINE-LE-DUN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:502",
    noCartridge: true,
    name: "502",
    colors: { background: "#e4ca12", text: "#000000" },
    destinations: [
      {
        id: ["LE TRÉPORT / LE TRÉPORT"],
        name: "LE TRÉPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e4ca12",
            textColor: "#000000",
            text: "502",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE TREPORT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:503",
    noCartridge: true,
    name: "503",
    colors: { background: "#cab100", text: "#000000" },
    destinations: [
      {
        id: ["YVETOT / VILLEQUIER"],
        name: "VILLEQUIER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VILLEQUIER" }],
        },
      },
      {
        id: ["YVETOT / CAUDEBEC-EN-C"],
        name: "CAUDEBEC-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAUDEBEC-EN-CAUX" }],
        },
      },
      {
        id: ["YVETOT / BOIS-HIMONT"],
        name: "BOIS-HIMONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOIS-HIMONT" }],
        },
      },
      {
        id: ["ANQUETIERVILLE / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["SAINT-WANDRILLE-R / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["CAUDEBEC-EN-C / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["VILLEQUIER / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["BOIS-HIMONT / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "503",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:504",
    noCartridge: true,
    name: "504",
    colors: { background: "#dcadcd", text: "#000000" },
    destinations: [
      {
        id: ["BRÉAUTÉ / ÉTRETAT"],
        name: "ÉTRETAT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#dcadcd",
            textColor: "#000000",
            text: "504",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETRETAT" }],
        },
      },
      {
        id: ["ÉTRETAT / BRÉAUTÉ"],
        name: "BRÉAUTÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#dcadcd",
            textColor: "#000000",
            text: "504",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:505",
    noCartridge: true,
    name: "505",
    colors: { background: "#f58966", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / BOISSAY"],
        name: "BOISSAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f58966",
            textColor: "#000000",
            text: "505",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOISSAY" }],
        },
      },
      {
        id: ["BOISSAY / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f58966",
            textColor: "#000000",
            text: "505",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:506",
    noCartridge: true,
    name: "506",
    colors: { background: "#5665ab", text: "#ffffff" },
    destinations: [
      {
        id: ["LE HAVRE / CAUDEBEC-EN-C"],
        name: "CAUDEBEC-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUDEBEC-EN-CAUX" }],
        },
      },
      {
        id: ["LE HAVRE / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["LE HAVRE / NOTRE-DAME-DE-GRAVENCHON"],
        name: "NOTRE-DAME-DE-GRAVENCHON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "N.-D.-DE-GRAVENCHON" }],
        },
      },
      {
        id: ["LE HAVRE / LILLEBONNE"],
        name: "LILLEBONNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LILLEBONNE" }],
        },
      },
      {
        id: ["LE HAVRE / LA FRÉNAYE"],
        name: "LA FRÉNAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FRENAYE" }],
        },
      },
      {
        id: ["LILLEBONNE / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["CAUDEBEC-EN-C / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["BOLBEC / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["NOTRE-DAME-DE-GRAVENCHON / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "506",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:507",
    noCartridge: true,
    name: "507",
    colors: { background: "#9ab36c", text: "#000000" },
    destinations: [
      {
        id: ["BOLBEC / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["BRETTEVILLE-DU-GRAND-CAUX / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["HOUQUETOT / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["MANNEVILLE-LA-G / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FÉCAMP / AUBERVILLE-LA-R"],
        name: "AUBERVILLE-LA-R",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "AUBERVILLE-LA-RENAULT" }],
        },
      },
      {
        id: ["FÉCAMP / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["FÉCAMP / BRÉAUTÉ"],
        name: "BRÉAUTÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
      {
        id: ["FÉCAMP / BRETTEVILLE-DU-GRAND-CAUX"],
        name: "BRETTEVILLE-DU-GRAND-CAUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BRETTEVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / HOUQUETOT"],
        name: "HOUQUETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HOUQUETOT" }],
        },
      },
      {
        id: ["FÉCAMP / VATTETOT-SOUS-B"],
        name: "VATTETOT-SOUS-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "VATTETOT-SOUS-BEAUMONT" }],
        },
      },
      {
        id: ["FÉCAMP / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["GODERVILLE / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["ANNOUVILLE-VILMESNIL / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["VATTETOT-SOUS-B / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "507",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:508",
    noCartridge: true,
    name: "508",
    colors: { background: "#ec413d", text: "#000000" },
    destinations: [
      {
        id: ["FÉCAMP / ÉPREVILLE"],
        name: "ÉPREVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EPREVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / HERMEVILLE"],
        name: "HERMEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HERMEVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["FÉCAMP / MONTIVILLIERS"],
        name: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS" }],
        },
      },
      {
        id: ["FÉCAMP / TURRETOT"],
        name: "TURRETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TURRETOT" }],
        },
      },
      {
        id: ["GODERVILLE / MONTIVILLIERS"],
        name: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS" }],
        },
      },
      {
        id: ["ST-SAUVEUR-D'ÉMALLEVILLE / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["VALMONT / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["ANGERVILLE-L'ORCHER / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["GODERVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["HERMEVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LE HAVRE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LE HAVRE / VALMONT"],
        name: "VALMONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VALMONT" }],
        },
      },
      {
        id: ["MANIQUERVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["MONTIVILLIERS / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["MONTIVILLIERS / ST-SAUVEUR-D'ÉMALLEVILLE"],
        name: "ST-SAUVEUR-D'ÉMALLEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [[{ text: "SAINT-SAUVEUR" }, { text: "D'EMALLEVILLE" }]],
        },
      },
      {
        id: ["ST-MARTIN-DU-BEC / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["TURRETOT / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FÉCAMP / ANGERVILLE-L'ORCHER"],
        name: "ANGERVILLE-L'ORCHER",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec413d",
            textColor: "#000000",
            text: "508",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ANGERVILLE-L'ORCHER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:509R",
    noCartridge: true,
    name: "509",
    colors: { background: "#bf922a", text: "#000000" },
    destinations: [
      {
        id: ["BEAUREPAIRE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["BÉNOUVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["GERVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["CRIQUEBEUF-EN-C / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["CUVERVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["ÉTRETAT / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["HEUQUEVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LE HAVRE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LES LOGES / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["VATTETOT-SUR-M / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["VILLAINVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["YPORT / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FROBERVILLE / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["LE HAVRE / VATTETOT-SUR-M"],
        name: "VATTETOT-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VATTETOT-SUR-MER" }],
        },
      },
      {
        id: ["LE HAVRE / YPORT"],
        name: "YPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YPORT" }],
        },
      },
      {
        id: ["OCTEVILLE-SUR-M / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:509A",
    noCartridge: true,
    name: "509",
    colors: { background: "#bf922a", text: "#000000" },
    destinations: [
      {
        id: ["FÉCAMP / BÉNOUVILLE"],
        name: "BÉNOUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BENOUVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / CUVERVILLE"],
        name: "CUVERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CUVERVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / ÉCRAINVILLE"],
        name: "ÉCRAINVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ECRAINVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / GONNEVILLE-LA-MALLET"],
        name: "GONNEVILLE-LA-MALLET",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "GONNEVILLE-LA-MALLET" }],
        },
      },
      {
        id: ["FÉCAMP / HEUQUEVILLE"],
        name: "HEUQUEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HEUQUEVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / LE HAVRE"],
        name: "LE HAVRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE HAVRE" }],
        },
      },
      {
        id: ["FÉCAMP / LES LOGES"],
        name: "LES LOGES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES LOGES" }],
        },
      },
      {
        id: ["FÉCAMP / VATTETOT-SUR-M"],
        name: "VATTETOT-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VATTETOT-SUR-MER" }],
        },
      },
      {
        id: ["FÉCAMP / VILLAINVILLE"],
        name: "VILLAINVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VILLAINVILLE" }],
        },
      },
      {
        id: ["FÉCAMP / YPORT"],
        name: "YPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YPORT" }],
        },
      },
      {
        id: ["FÉCAMP / FROBERVILLE"],
        name: "FROBERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FROBERVILLE" }],
        },
      },
      {
        id: ["FROBERVILLE / MONTIVILLIERS"],
        name: "MONTIVILLIERS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#bf922a",
            textColor: "#000000",
            text: "509",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTIVILLIERS" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:510",
    noCartridge: true,
    name: "510",
    colors: { background: "#864595", text: "#ffffff" },
    destinations: [
      {
        id: ["FÉCAMP / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#864595",
            textColor: "#ffffff",
            text: "510",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["YVETOT / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#864595",
            textColor: "#ffffff",
            text: "510",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:511",
    noCartridge: true,
    name: "511",
    colors: { background: "#ba4d95", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / ROUMARE"],
        name: "ROUMARE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ba4d95",
            textColor: "#000000",
            text: "511",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUMARE" }],
        },
      },
      {
        id: ["ROUMARE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ba4d95",
            textColor: "#000000",
            text: "511",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:512",
    noCartridge: true,
    name: "512",
    colors: { background: "#5665ab", text: "#ffffff" },
    destinations: [
      {
        id: ["FRESNE-LE-PLAN / LE MESNIL-ESNARD"],
        name: "LE MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE MESNIL-ESNARD" }],
        },
      },
      {
        id: ["PERRIERS-SUR-A / LE MESNIL-ESNARD"],
        name: "LE MESNIL-ESNARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE MESNIL-ESNARD" }],
        },
      },
      {
        id: ["LE MESNIL-ESNARD / PERRIERS-SUR-A"],
        name: "PERRIERS-SUR-A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "PERRIERS-SUR-ANDELLE" }],
        },
      },
      {
        id: ["LE MESNIL-ESNARD / MESNIL-RAOUL"],
        name: "MESNIL-RAOUL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MESNIL-RAOUL" }],
        },
      },
      {
        id: ["FRANQUEVILLE-ST-PIERRE / PERRIERS-SUR-A"],
        name: "PERRIERS-SUR-A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "PERRIERS-SUR-ANDELLE" }],
        },
      },
      {
        id: ["PERRIERS-SUR-A / FRANQUEVILLE-ST-PIERRE"],
        name: "FRANQUEVILLE-ST-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5665ab",
            textColor: "#ffffff",
            text: "512",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "FRANQUEVILLE-ST-PIERRE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:513",
    noCartridge: true,
    name: "513",
    colors: { background: "#9ac63f", text: "#000000" },
    destinations: [
      {
        id: ["ST-VALÉRY-EN-C / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63f",
            textColor: "#000000",
            text: "513",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FÉCAMP / ST-VALÉRY-EN-C"],
        name: "ST-VALÉRY-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63f",
            textColor: "#000000",
            text: "513",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VALERY-EN-CAUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:514",
    noCartridge: true,
    name: "514",
    colors: { background: "#ea5284", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / ST-VALÉRY-EN-C"],
        name: "ST-VALÉRY-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5284",
            textColor: "#000000",
            text: "514",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VALERY-EN-CAUX" }],
        },
      },
      {
        id: ["ST-VALÉRY-EN-C / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ea5284",
            textColor: "#000000",
            text: "514",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:515",
    noCartridge: true,
    name: "515",
    colors: { background: "#ec7223", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / BELLENCOMBRE"],
        name: "BELLENCOMBRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLENCOMBRE" }],
        },
      },
      {
        id: ["DIEPPE / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["ST-AUBIN-SUR-S / LA CHAPELLE-DU-BOURGAY"],
        name: "LA CHAPELLE-DU-BOURGAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA CHAPELLE-DU-BOURGAY" }],
        },
      },
      {
        id: ["MONTREUIL-EN-C / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / NOTRE-DAME-DU-PARC"],
        name: "NOTRE-DAME-DU-PARC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOTRE-DAME-DU-PARC" }],
        },
      },
      {
        id: ["TORCY-LE-PETIT / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / LA CHAPELLE-DU-BOURGAY"],
        name: "LA CHAPELLE-DU-BOURGAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "LA CHAPELLE-DU-BOURGAY" }],
        },
      },
      {
        id: ["ST-SAËNS / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["BELLENCOMBRE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / LES GDES-VENTES"],
        name: "LES GDES-VENTES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LES GDES-VENTES" }],
        },
      },
      {
        id: ["DIEPPE / ST-SAËNS"],
        name: "ST-SAËNS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-SAENS" }],
        },
      },
      {
        id: ["ST-SAËNS / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["LA CHAUSSÉE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / TOURVILLE-SUR-ARQUES"],
        name: "TOURVILLE-SUR-ARQUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "TOURVILLE-SUR-ARQUES" }],
        },
      },
      {
        id: ["DIEPPE / LA CHAUSSÉE"],
        name: "LA CHAUSSÉE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA CHAUSSEE" }],
        },
      },
      {
        id: ["DIEPPE / MONTREUIL-EN-C"],
        name: "MONTREUIL-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#ec7223",
            textColor: "#000000",
            text: "515",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTREUIL-EN-CAUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:516",
    noCartridge: true,
    name: "516",
    colors: { background: "#73bb45", text: "#ffffff" },
    destinations: [
      {
        id: ["DIEPPE / ST-OUEN-SOUS-BAILLY"],
        name: "ST-OUEN-SOUS-BAILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-OUEN-SOUS-BAILLY" }],
        },
      },
      {
        id: ["DIEPPE / BAILLY-EN-R"],
        name: "BAILLY-EN-R",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BAILLY-EN-RIVIERE" }],
        },
      },
      {
        id: ["DIEPPE / ENVERMEU"],
        name: "ENVERMEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ENVERMEU" }],
        },
      },
      {
        id: ["DIEPPE / FRESNOY-FOLNY"],
        name: "FRESNOY-FOLNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FRESNOY-FOLNY" }],
        },
      },
      {
        id: ["DIEPPE / LONDINIÈRES"],
        name: "LONDINIÈRES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LONDINIERES" }],
        },
      },
      {
        id: ["DIEPPE / BRUNVILLE"],
        name: "BRUNVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BRUNVILLE" }],
        },
      },
      {
        id: ["BRUNVILLE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ENVERMEU / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ENVERMEU / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["LONDINIÈRES / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ST-OUEN-SOUS-BAILLY / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["FRESNOY-FOLNY / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["FRESNOY-FOLNY / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#73bb45",
            textColor: "#ffffff",
            text: "516",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:517",
    noCartridge: true,
    name: "517",
    colors: { background: "#e9d461", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / DERCHIGNY"],
        name: "DERCHIGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DERCHIGNY" }],
        },
      },
      {
        id: ["DIEPPE / BELLEVILLE-SUR-M"],
        name: "BELLEVILLE-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELLEVILLE-SUR-MER" }],
        },
      },
      {
        id: ["DIEPPE / BERNEVAL-LE-GRAND"],
        name: "BERNEVAL-LE-GRAND",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERNEVAL-LE-GRAND" }],
        },
      },
      {
        id: ["DIEPPE / PENLY"],
        name: "PENLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PENLY" }],
        },
      },
      {
        id: ["ST-AUBIN-SUR-S / PENLY"],
        name: "PENLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PENLY" }],
        },
      },
      {
        id: ["DIEPPE / ST-MARTIN-EN-C"],
        name: "ST-MARTIN-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-MARTIN-EN-CAUX" }],
        },
      },
      {
        id: ["BELLEVILLE-SUR-M / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["BERNEVAL-LE-GRAND / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["BRACQUEMONT / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["PENLY / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ST-MARTIN-EN-C / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DERCHIGNY / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ST-MARTIN-EN-C / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e9d461",
            textColor: "#000000",
            text: "517",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:518",
    noCartridge: true,
    name: "518",
    colors: { background: "#e7accc", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / ENVERMEU"],
        name: "ENVERMEU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ENVERMEU" }],
        },
      },
      {
        id: ["DIEPPE / ST-JACQUES-D'A"],
        name: "ST-JACQUES-D'A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-JACQUES-D'A" }],
        },
      },
      {
        id: ["DIEPPE / ST-NICOLAS-D'A"],
        name: "ST-NICOLAS-D'A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-NICOLAS-D'A" }],
        },
      },
      {
        id: ["ST-AUBIN-SUR-S / ST-NICOLAS-D'A"],
        name: "ST-NICOLAS-D'A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-NICOLAS-D'A" }],
        },
      },
      {
        id: ["ST-JACQUES-D'A / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["ST-JACQUES-D'A / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ST-NICOLAS-D'A / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["ENVERMEU / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e7accc",
            textColor: "#000000",
            text: "518",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:519",
    noCartridge: true,
    name: "519",
    colors: { background: "#af599e", text: "#000000" },
    destinations: [
      {
        id: ["BIVILLE-SUR-M / EU"],
        name: "EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EU" }],
        },
      },
      {
        id: ["BIVILLE-SUR-M / LE TRÉPORT"],
        name: "LE TRÉPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE TREPORT" }],
        },
      },
      {
        id: ["CRIEL-SUR-M / LE TRÉPORT"],
        name: "LE TRÉPORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE TREPORT" }],
        },
      },
      {
        id: ["TOCQUEVILLE-SUR-EU / EU"],
        name: "EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EU" }],
        },
      },
      {
        id: ["DIEPPE / EU"],
        name: "EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EU" }],
        },
      },
      {
        id: ["EU / BIVILLE-SUR-M"],
        name: "BIVILLE-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BIVILLE-SUR-MER" }],
        },
      },
      {
        id: ["EU / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["LE TRÉPORT / BIVILLE-SUR-M"],
        name: "BIVILLE-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BIVILLE-SUR-MER" }],
        },
      },
      {
        id: ["LE TRÉPORT / CRIEL-SUR-M"],
        name: "CRIEL-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CRIEL-SUR-MER" }],
        },
      },
      {
        id: ["LE TRÉPORT / FLOCQUES"],
        name: "FLOCQUES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FLOCQUES" }],
        },
      },
      {
        id: ["LE TRÉPORT / TOCQUEVILLE-SUR-EU"],
        name: "TOCQUEVILLE-SUR-EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "519",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "TOCQUEVILLE-SUR-EU" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:520",
    noCartridge: true,
    name: "520",
    colors: { background: "#5187c2", text: "#000000" },
    destinations: [
      {
        id: ["MAUCOMBLE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["NEUFCHÂTEL-EN-B / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / NEUFCHÂTEL-EN-B"],
        name: "NEUFCHÂTEL-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NEUFCHATEL-EN-BRAY" }],
        },
      },
      {
        id: ["FONTAINE-LE-B / ST-GEORGES-SUR-F"],
        name: "ST-GEORGES-SUR-F",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-GEORGES-SUR-FONTAINE" }],
        },
      },
      {
        id: ["ST-SAËNS / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["BUCHY / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["CAILLY / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["LA RUE-ST-PIERRE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["QUINCAMPOIX / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / BUCHY"],
        name: "BUCHY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BUCHY" }],
        },
      },
      {
        id: ["ROUEN / CAILLY"],
        name: "CAILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CAILLY" }],
        },
      },
      {
        id: ["ROUEN / FONTAINE-LE-B"],
        name: "FONTAINE-LE-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FONTAINE-LE-BOURG" }],
        },
      },
      {
        id: ["ROUEN / LA RUE-ST-PIERRE"],
        name: "LA RUE-ST-PIERRE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LA RUE-ST-PIERRE" }],
        },
      },
      {
        id: ["ROUEN / QUINCAMPOIX"],
        name: "QUINCAMPOIX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "QUINCAMPOIX" }],
        },
      },
      {
        id: ["ROUEN / ST-MARTIN-O"],
        name: "ST-MARTIN-O",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ST-MARTIN-OSMONVILLE" }],
        },
      },
      {
        id: ["ROUEN / ST-SAËNS"],
        name: "ST-SAËNS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ST-SAENS" }],
        },
      },
      {
        id: ["ESTEVILLE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#5187c2",
            textColor: "#000000",
            text: "520",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:521",
    noCartridge: true,
    name: "521",
    colors: { background: "#c895bf", text: "#000000" },
    destinations: [
      {
        id: ["NEUFCHÂTEL-EN-B / BLANGY-SUR-BRESLE"],
        name: "BLANGY-SUR-BRESLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c895bf",
            textColor: "#000000",
            text: "521",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BLANGY-SUR-BRESLE" }],
        },
      },
      {
        id: ["GAMACHES / NEUFCHÂTEL-EN-B"],
        name: "NEUFCHÂTEL-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c895bf",
            textColor: "#000000",
            text: "521",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "NEUFCHATEL-EN-BRAY" }],
        },
      },
      {
        id: ["NEUFCHÂTEL-EN-B / GAMACHES"],
        name: "GAMACHES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c895bf",
            textColor: "#000000",
            text: "521",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GAMACHES" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:522",
    noCartridge: true,
    name: "522",
    colors: { background: "#e52227", text: "#ffffff" },
    destinations: [
      {
        id: ["ELBEUF-SUR-A / MARTAINVILLE-É"],
        name: "MARTAINVILLE-É",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "MARTAINVILLE-EPREVILLE" }],
        },
      },
      {
        id: ["ROUEN / CROISY-SUR-A"],
        name: "CROISY-SUR-A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CROISY-SUR-ANDELLE" }],
        },
      },
      {
        id: ["ROUEN / GOURNAY-EN-B"],
        name: "GOURNAY-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOURNAY-EN-BRAY" }],
        },
      },
      {
        id: ["ELBEUF-SUR-A / SERVAVILLE-S"],
        name: "SERVAVILLE-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SERVAVILLE-SALMONVILLE" }],
        },
      },
      {
        id: ["GRAINVILLE-SUR-R / SERVAVILLE-S"],
        name: "SERVAVILLE-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SERVAVILLE-SALMONVILLE" }],
        },
      },
      {
        id: ["SERVAVILLE-S / ELBEUF-SUR-A"],
        name: "ELBEUF-SUR-A",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ELBEUF-SUR-ANDELLE" }],
        },
      },
      {
        id: ["CROISY-SUR-A / SERVAVILLE-S"],
        name: "SERVAVILLE-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1407SUPX", text: "SERVAVILLE-SALMONVILLE" }],
        },
      },
      {
        id: ["ROUEN / LA FEUILLIE"],
        name: "LA FEUILLIE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LA FEUILLIE" }],
        },
      },
      {
        id: ["CROISY-SUR-A / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["VASCOEUIL / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / VASCOEUIL"],
        name: "VASCOEUIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "VASCOEUIL" }],
        },
      },
      {
        id: ["GOURNAY-EN-B / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e52227",
            textColor: "#ffffff",
            text: "522",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:523",
    noCartridge: true,
    name: "523",
    colors: { background: "#9ac63d", text: "#000000" },
    destinations: [
      {
        id: ["DIEPPE / ST-MACLOU-DE-FOLLEVILLE"],
        name: "ST-MACLOU-DE-FOLLEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-MACLOU-DE-FOLLEVILLE" }],
        },
      },
      {
        id: ["ST-MACLOU-DE-FOLLEVILLE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / ST-VICTOR l'ABBAYE"],
        name: "ST-VICTOR l'ABBAYE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VICTOR-L'ABBAYE" }],
        },
      },
      {
        id: ["DIEPPE / ST MACLOU DE FOLLEVILLE"],
        name: "ST MACLOU DE FOLLEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "ST-MACLOU-DE-FOLLEVILLE" }],
        },
      },
      {
        id: ["VAL-DE-SAÂNE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / ETAIMPUIS"],
        name: "ETAIMPUIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ETAIMPUIS" }],
        },
      },
      {
        id: ["BERTRIMONT / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / BERTRIMONT"],
        name: "BERTRIMONT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERTRIMONT" }],
        },
      },
      {
        id: ["DIEPPE / ST-DENIS-SUR-S"],
        name: "ST-DENIS-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-DENIS-SUR-SCIE" }],
        },
      },
      {
        id: ["DIEPPE / VAL-DE-SAÂNE"],
        name: "VAL-DE-SAÂNE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VAL-DE-SAANE" }],
        },
      },
      {
        id: ["DIEPPE / AUFFAY"],
        name: "AUFFAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "AUFFAY" }],
        },
      },
      {
        id: ["HEUGLEVILLE SUR SCIE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac63d",
            textColor: "#000000",
            text: "523",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:524",
    noCartridge: true,
    name: "524",
    colors: { background: "#fbc134", text: "#000000" },
    destinations: [
      {
        id: ["BACQUEVILLE-EN-C / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / BACQUEVILLE-EN-C"],
        name: "BACQUEVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "BACQUEVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["DIEPPE / BELMESNIL"],
        name: "BELMESNIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BELMESNIL" }],
        },
      },
      {
        id: ["ST-OUEN-LE-M / ST-AUBIN-SUR-S"],
        name: "ST-AUBIN-SUR-S",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-AUBIN-SUR-SCIE" }],
        },
      },
      {
        id: ["LONGUEVILLE-SUR-S / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["VÉNESTANVILLE / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["BELMESNIL / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["SAÂNE-ST-JUST / DIEPPE"],
        name: "DIEPPE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DIEPPE" }],
        },
      },
      {
        id: ["DIEPPE / LAMMERVILLE"],
        name: "LAMMERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LAMMERVILLE" }],
        },
      },
      {
        id: ["DIEPPE / VÉNESTANVILLE"],
        name: "VÉNESTANVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VENESTANVILLE" }],
        },
      },
      {
        id: ["DIEPPE / SAÂNE-ST-JUST"],
        name: "SAÂNE-ST-JUST",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#fbc134",
            textColor: "#000000",
            text: "524",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAANE-SAINT-JUST" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:525",
    noCartridge: true,
    name: "525",
    colors: { background: "#292f6a", text: "#ffffff" },
    destinations: [
      {
        id: ["YVETOT / ST-VALÉRY-EN-C"],
        name: "ST-VALÉRY-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#292f6a",
            textColor: "#ffffff",
            text: "525",
            outlineColor: "#000000",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-VALERY-EN-CAUX" }],
        },
      },
      {
        id: ["ST-VALÉRY-EN-C / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#292f6a",
            textColor: "#ffffff",
            text: "525",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:526",
    noCartridge: true,
    name: "526",
    colors: { background: "#a6cc3a", text: "#000000" },
    destinations: [
      {
        id: ["ROUEN / PAVILLY"],
        name: "PAVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PAVILLY" }],
        },
      },
      {
        id: ["PAVILLY / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["BARENTIN / YERVILLE"],
        name: "YERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YERVILLE" }],
        },
      },
      {
        id: ["PAVILLY / YERVILLE"],
        name: "YERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YERVILLE" }],
        },
      },
      {
        id: ["YVETOT / PAVILLY"],
        name: "PAVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PAVILLY" }],
        },
      },
      {
        id: ["PAVILLY / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["YERVILLE / BARENTIN"],
        name: "BARENTIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }],
        },
      },
      {
        id: ["MOTTEVILLE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ST-JEAN-DU-CARDONNAY / ROUMARE"],
        name: "ROUMARE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUMARE" }],
        },
      },
      {
        id: ["ROUMARE / ST-JEAN-DU-CARDONNAY"],
        name: "ST-JEAN-DU-CARDONNAY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1407SUPX", text: "SAINT-JEAN-DU-CARDONNAY" }],
        },
      },
      {
        id: ["YERVILLE / PAVILLY"],
        name: "PAVILLY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#a6cc3a",
            textColor: "#000000",
            text: "526",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "PAVILLY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:528",
    noCartridge: true,
    name: "528",
    colors: { background: "#78bbe1", text: "#000000" },
    destinations: [
      {
        id: ["BOLBEC / BRÉAUTÉ"],
        name: "BRÉAUTÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
      {
        id: ["BRÉAUTÉ / FAUVILLE-EN-CAUX"],
        name: "FAUVILLE-EN-CAUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["BRÉAUTÉ / NOINTOT"],
        name: "NOINTOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "NOINTOT" }],
        },
      },
      {
        id: ["NOINTOT / BRÉAUTÉ"],
        name: "BRÉAUTÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BREAUTE" }],
        },
      },
      {
        id: ["BRÉAUTÉ / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#78bbe1",
            textColor: "#000000",
            text: "528",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:529",
    noCartridge: true,
    name: "529",
    colors: { background: "#f4a94e", text: "#000000" },
    destinations: [
      {
        id: ["GRUGNY / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / MONTVILLE"],
        name: "MONTVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "MONTVILLE" }],
        },
      },
      {
        id: ["ROUEN / FONTAINE-LE-B"],
        name: "FONTAINE-LE-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FONTAINE-LE-BOURG" }],
        },
      },
      {
        id: ["ROUEN / CLÈRES"],
        name: "CLÈRES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CLERES" }],
        },
      },
      {
        id: ["FONTAINE-LE-B / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / LE BOCASSE"],
        name: "LE BOCASSE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "LE BOCASSE" }],
        },
      },
      {
        id: ["ROUEN / GRUGNY"],
        name: "GRUGNY",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GRUGNY" }],
        },
      },
      {
        id: ["CLÈRES / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / BOSC-LE-HARD"],
        name: "BOSC-LE-HARD",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOSC-LE-HARD" }],
        },
      },
      {
        id: ["BOSC-LE-HARD / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["MONTVILLE / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#f4a94e",
            textColor: "#000000",
            text: "529",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:530",
    noCartridge: true,
    name: "530",
    colors: { background: "#e30613", text: "#ffffff" },
    destinations: [
      {
        id: ["DUCLAIR / CAUDEBEC-EN-C"],
        name: "CAUDEBEC-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e30613",
            textColor: "#ffffff",
            text: "530",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUDEBEC-EN-CAUX" }],
        },
      },
      {
        id: ["CAUDEBEC-EN-C / ROUEN"],
        name: "ROUEN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e30613",
            textColor: "#ffffff",
            text: "530",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "ROUEN" }],
        },
      },
      {
        id: ["ROUEN / CAUDEBEC-EN-C"],
        name: "CAUDEBEC-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e30613",
            textColor: "#ffffff",
            text: "530",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "CAUDEBEC-EN-CAUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:531",
    noCartridge: true,
    name: "531",
    colors: { background: "#c56927", text: "#ffffff" },
    destinations: [
      {
        id: ["BARENTIN / BARENTIN"],
        name: "BARENTIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c56927",
            textColor: "#ffffff",
            text: "531",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }],
        },
      },
      {
        id: ["LE TRAIT / BARENTIN"],
        name: "BARENTIN",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c56927",
            textColor: "#ffffff",
            text: "531",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "BARENTIN" }],
        },
      },
      {
        id: ["BARENTIN / LE TRAIT"],
        name: "LE TRAIT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#c56927",
            textColor: "#ffffff",
            text: "531",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE TRAIT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:532",
    noCartridge: true,
    name: "532",
    colors: { background: "#b5c069", text: "#000000" },
    destinations: [
      {
        id: ["HATTENVILLE / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "532",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["YÉBLERON / BOLBEC"],
        name: "BOLBEC",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "532",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BOLBEC" }],
        },
      },
      {
        id: ["BOLBEC / FAUVILLE-EN-C"],
        name: "FAUVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "532",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["BOLBEC / HATTENVILLE"],
        name: "HATTENVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "532",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HATTENVILLE" }],
        },
      },
      {
        id: ["BOLBEC / YÉBLERON"],
        name: "YÉBLERON",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "532",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YEBLERON" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:533",
    noCartridge: true,
    name: "533",
    colors: { background: "#3eacdd", text: "#000000" },
    destinations: [
      {
        id: ["OUAINVILLE / CANY-BARVILLE"],
        name: "CANY-BARVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#3eacdd",
            textColor: "#000000",
            text: "533",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CANY-BARVILLE" }],
        },
      },
      {
        id: ["CANY-BARVILLE / VITTEFLEUR"],
        name: "VITTEFLEUR",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#3eacdd",
            textColor: "#000000",
            text: "533",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VITTEFLEUR" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:534",
    noCartridge: true,
    name: "534",
    colors: { background: "#af599e", text: "#000000" },
    destinations: [
      {
        id: ["CRIEL-SUR-M / TOUFFREVILLE-SUR-EU"],
        name: "TOUFFREVILLE-SUR-EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "534",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "TOUFFREVILLE-SUR-EU" }],
        },
      },
      {
        id: ["TOUFFREVILLE-SUR-EU / CRIEL-SUR-M"],
        name: "CRIEL-SUR-M",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "534",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "CRIEL-SUR-MER" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:535",
    noCartridge: true,
    name: "535",
    colors: { background: "#af599e", text: "#000000" },
    destinations: [
      {
        id: ["EU / GUERVILLE"],
        name: "GUERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "535",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GUERVILLE" }],
        },
      },
      {
        id: ["GUERVILLE / EU"],
        name: "EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "535",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EU" }],
        },
      },
      {
        id: ["EU / TOUFFREVILLE-SUR-EU"],
        name: "TOUFFREVILLE-SUR-EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "535",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "TOUFFREVILLE-SUR-EU" }],
        },
      },
      {
        id: ["TOUFFREVILLE-SUR-EU / EU"],
        name: "EU",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#af599e",
            textColor: "#000000",
            text: "535",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "EU" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:536",
    noCartridge: true,
    name: "536",
    colors: { background: "#b5c069", text: "#000000" },
    destinations: [
      {
        id: ["FAUVILLE-EN-C / HATTENVILLE"],
        name: "HATTENVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "536",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HATTENVILLE" }],
        },
      },
      {
        id: ["HATTENVILLE / FAUVILLE-EN-C"],
        name: "FAUVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "536",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["FAUVILLE-EN-C / HAUTOT-LE-VATOIS"],
        name: "HAUTOT-LE-VATOIS",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "536",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HAUTOT-LE-VATOIS" }],
        },
      },
      {
        id: ["FAUVILLE-EN-C / BERMONVILLE"],
        name: "BERMONVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "536",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERMONVILLE" }],
        },
      },
      {
        id: ["HAUTOT-LE-VATOIS / FAUVILLE-EN-C"],
        name: "FAUVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "536",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["BERMONVILLE / FAUVILLE-EN-C"],
        name: "FAUVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#b5c069",
            textColor: "#000000",
            text: "536",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:537",
    noCartridge: true,
    name: "537",
    colors: { background: "#e61e28", text: "#ffffff" },
    destinations: [
      {
        id: ["FORGES-LES-E / LONGMESNIL"],
        name: "LONGMESNIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "537",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LONGMESNIL" }],
        },
      },
      {
        id: ["HAUCOURT / FORGES-LES-E"],
        name: "FORGES-LES-E",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "537",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FORGES-LES-EAUX" }],
        },
      },
      {
        id: ["FORGES-LES-E / SERQUEUX"],
        name: "SERQUEUX",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "537",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "SERQUEUX" }],
        },
      },
      {
        id: ["GAILLEFONTAINE / FORGES-LES-E"],
        name: "FORGES-LES-E",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "537",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FORGES-LES-EAUX" }],
        },
      },
      {
        id: ["FORGES-LES-E / LE FOSSÉ"],
        name: "LE FOSSÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "537",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "LE FOSSE" }],
        },
      },
      {
        id: ["RONCHEROLLES-EN-B / FORGES-LES-E"],
        name: "FORGES-LES-E",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "537",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FORGES-LES-EAUX" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:538",
    noCartridge: true,
    name: "538",
    colors: { background: "#9ab36c", text: "#000000" },
    destinations: [
      {
        id: ["GODERVILLE / VIRVILLE"],
        name: "VIRVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "VIRVILLE" }],
        },
      },
      {
        id: ["GODERVILLE / SAUSSEUZEMARE"],
        name: "SAUSSEUZEMARE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "SAUSSEUZEMARE" }],
        },
      },
      {
        id: ["GODERVILLE / HATTENVILLE"],
        name: "HATTENVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "HATTENVILLE" }],
        },
      },
      {
        id: ["GODERVILLE / BERNIÈRES"],
        name: "BERNIÈRES",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "BERNIERES" }],
        },
      },
      {
        id: ["GODERVILLE / ANNOUVILLE-VILMESNIL"],
        name: "ANNOUVILLE-VILMESNIL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "ANNOUVILLE-VILMESNIL" }],
        },
      },
      {
        id: ["VIRVILLE / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["SAUSSEUZEMARE / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["HATTENVILLE / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["BERNIÈRES / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
      {
        id: ["ANNOUVILLE-VILMESNIL / GODERVILLE"],
        name: "GODERVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ab36c",
            textColor: "#000000",
            text: "538",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "GODERVILLE" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:539",
    noCartridge: true,
    name: "539",
    colors: { background: "#e61e28", text: "#ffffff" },
    destinations: [
      {
        id: ["GOURNAY-EN-B / NEUF-MARCHÉ"],
        name: "NEUF-MARCHÉ",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "NEUF-MARCHE" }],
        },
      },
      {
        id: ["GOURNAY-EN-B / MÉNERVAL"],
        name: "MÉNERVAL",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "MENERVAL" }],
        },
      },
      {
        id: ["GOURNAY-EN-B / FERRIÈRES-EN-B"],
        name: "FERRIÈRES-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "FERRIERES-EN-BRAY" }],
        },
      },
      {
        id: ["GOURNAY-EN-B / DOUDEAUVILLE"],
        name: "DOUDEAUVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "DOUDEAUVILLE" }],
        },
      },
      {
        id: ["NEUF-MARCHÉ / GOURNAY-EN-B"],
        name: "GOURNAY-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOURNAY-EN-BRAY" }],
        },
      },
      {
        id: ["MÉNERVAL / GOURNAY-EN-B"],
        name: "GOURNAY-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOURNAY-EN-BRAY" }],
        },
      },
      {
        id: ["FERRIÈRES-EN-B / GOURNAY-EN-B"],
        name: "GOURNAY-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOURNAY-EN-BRAY" }],
        },
      },
      {
        id: ["DOUDEAUVILLE / GOURNAY-EN-B"],
        name: "GOURNAY-EN-B",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#e61e28",
            textColor: "#ffffff",
            text: "539",
            outlineColor: "#000000",
          },
          pages: [{ font: "1508SUPX", text: "GOURNAY-EN-BRAY" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:540",
    noCartridge: true,
    name: "540",
    colors: { background: "#cab100", text: "#000000" },
    destinations: [
      {
        id: ["YVETOT / DOUDEVILLE"],
        name: "DOUDEVILLE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "540",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "DOUDEVILLE" }],
        },
      },
      {
        id: ["DOUDEVILLE / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "540",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["YVETOT / FAUVILLE-EN-C"],
        name: "FAUVILLE-EN-C",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "540",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FAUVILLE-EN-CAUX" }],
        },
      },
      {
        id: ["YVETOT / ALVIMARE"],
        name: "ALVIMARE",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "540",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "ALVIMARE" }],
        },
      },
      {
        id: ["FAUVILLE-EN-C / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "540",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
      {
        id: ["ALVIMARE / YVETOT"],
        name: "YVETOT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#cab100",
            textColor: "#000000",
            text: "540",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "YVETOT" }],
        },
      },
    ],
  },
  {
    id: "NOMAD:541",
    noCartridge: true,
    name: "541",
    colors: { background: "#9ac36f", text: "#000000" },
    destinations: [
      {
        id: ["ST-PIERRE-EN-PORT / FÉCAMP"],
        name: "FÉCAMP",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac36f",
            textColor: "#000000",
            text: "541",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1508SUPX", text: "FECAMP" }],
        },
      },
      {
        id: ["FÉCAMP / ST-PIERRE-EN-PORT"],
        name: "ST-PIERRE-EN-PORT",
        girouette: {
          routeNumber: {
            font: "1508SUPX",
            backgroundColor: "#9ac36f",
            textColor: "#000000",
            text: "541",
            outlineColor: "#FFFFFF",
          },
          pages: [{ font: "1507SUPX", text: "SAINT-PIERRE-EN-PORT" }],
        },
      },
    ],
  },
];

const network: Network = {
  slug: "nomad",
  name: "Nomad – Région Normandie",
  routes: nomadRegionRoutes,
  color: "#ef434d",
  textColor: "#ffffff",
};

export default network;
