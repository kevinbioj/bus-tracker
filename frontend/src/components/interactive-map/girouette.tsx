"use client";

const defaultBgColor = "#1D1D1B";

const hanoverFonts = {
  "1513B3E1": {
    id: "1513B3E1",
    fontFamily: "Hanover 1513B3E1",
    height: 15,
    spacing: 2,
  },
  "1510N2E1": {
    id: "1510N2E1",
    fontFamily: "Hanover 1510N2E1",
    height: 15,
    spacing: 2,
  },
  "1508C2E1": {
    id: "1508C2E1",
    fontFamily: "Hanover 1508C2E1",
    height: 15,
    spacing: 2,
  },
  "1310C2E1": {
    id: "1310C2E1",
    fontFamily: "Hanover 1310C2E1",
    height: 13,
    spacing: 2,
  },
  "0808B2E1": {
    id: "0808B2E1",
    fontFamily: "Hanover 0808B2E1",
    height: 8,
    spacing: 1,
  },
  "SX-17-NORMAL": {
    id: "17-N",
    fontFamily: "Hanover SX-17-NORMAL",
    height: 17,
    spacing: 2,
  },
  "SX-15-NORMAL": {
    id: "15-N",
    fontFamily: "Hanover SX-15-NORMAL",
    height: 15,
    spacing: 1,
  },
  "SX-15-CONDENSED": {
    id: "15-C",
    fontFamily: "Hanover SX-15-CONDENSED",
    height: 15,
    spacing: 1,
  },
  "SX-14-CONDENSED": {
    id: "14-C",
    fontFamily: "Hanover SX-14-CONDENSED",
    height: 15,
    spacing: 1,
  },
} as const;

const lumiplanFonts = {
  "2": {
    id: "2",
    fontFamily: "Lumiplan 2",
    height: 8,
    spacing: 1,
  },
  A: {
    id: "A",
    fontFamily: "Lumiplan A",
    height: 16,
    spacing: 1,
  },
  G: {
    id: "G",
    fontFamily: "Lumiplan G",
    height: 22,
    spacing: 1,
  },
} as const;

const metroFonts = {
  M: {
    id: "M",
    fontFamily: "Metro M",
    height: 16,
    spacing: 0,
  },
  T: {
    id: "T",
    fontFamily: "Metro T",
    height: 16,
    spacing: 1,
  },
} as const;

const ledColors = {
  YELLOW: "#FF8000",
  WHITE: "#F2FBFF",
} as const;

export const models = {
  "HANOVER-192x17-RNCOLOR-YELLOW-GRM": {
    height: 17,
    ledColor: ledColors.YELLOW,
    fonts: [
      hanoverFonts["0808B2E1"],
      hanoverFonts["1310C2E1"],
      hanoverFonts["1508C2E1"],
      hanoverFonts["1510N2E1"],
      hanoverFonts["1513B3E1"],
    ],
    routeNumber: { extraOutline: true, width: 32 },
    destination: { width: 160 },
  },
  "HANOVER-192x17-RNCOLOR-YELLOW-SXM": {
    height: 17,
    ledColor: ledColors.YELLOW,
    fonts: [
      hanoverFonts["SX-14-CONDENSED"],
      hanoverFonts["SX-15-CONDENSED"],
      hanoverFonts["SX-15-NORMAL"],
      hanoverFonts["SX-17-NORMAL"],
    ],
    routeNumber: { extraOutline: true, width: 32 },
    destination: { width: 160 },
  },
  "HANOVER-192x17-RNCOLOR-WHITE-GRM": {
    height: 17,
    ledColor: ledColors.WHITE,
    fonts: [
      hanoverFonts["0808B2E1"],
      hanoverFonts["1310C2E1"],
      hanoverFonts["1508C2E1"],
      hanoverFonts["1510N2E1"],
      hanoverFonts["1513B3E1"],
    ],
    routeNumber: { extraOutline: true, width: 32 },
    destination: { width: 160 },
  },
  "LUMIPLAN-24x180": {
    height: 24,
    ledColor: ledColors.WHITE,
    fonts: [lumiplanFonts["2"], lumiplanFonts.A, lumiplanFonts.G],
    routeNumber: { extraOutline: true, width: 40 },
    destination: { width: 140 },
  },
  "ROUEN-METRO": {
    height: 16,
    ledColor: ledColors.YELLOW,
    fonts: [metroFonts.M, metroFonts.T],
    routeNumber: { extraOutline: true, width: 16 },
    destination: { width: 98 },
  },
} as const;

type Model = (typeof models)[keyof typeof models];

type TextData<M extends Model> = { font: M["fonts"][number]["id"]; spacing?: number; text: string };

type RouteNumberData<M extends Model> = TextData<M> & { bgColor?: string; fgColor?: string; olColor?: string };

type PageData<M extends Model> = TextData<M> | [TextData<M>, TextData<M>];

type GirouetteData<M extends Model> = {
  model: M;
  routeNumber: RouteNumberData<M>;
  pages: PageData<M>[];
};

type GirouetteProps<M extends Model> = {
  girouette: GirouetteData<M>;
  width: number;
};

export function Girouette<M extends Model>({ girouette, width }: GirouetteProps<M>) {
  return null;
}

// ---

type RouteNumberProps<M extends Model> = {
  model: M;
  routeNumber: RouteNumberData<M>;
  width: number;
};

function RouteNumber<M extends Model>({ model, routeNumber, width }: RouteNumberProps<M>) {
  const font = model.fonts.find((f) => f.id === routeNumber.font)!;
  const onePixel = width / (model.routeNumber.width + model.destination.width);
  const spacing =
    (routeNumber.spacing ?? font.spacing) + (model.routeNumber.extraOutline && routeNumber.olColor ? 1 : 0);
  return (
    <div
      className="flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: routeNumber.text }}
      style={{
        //- General properties
        fontFamily: font.fontFamily,
        width: `${model.routeNumber.width}px`,
        //- Define correct character size & position
        fontSize: `${onePixel * font.height}px`,
        lineHeight: `${onePixel * font.height}px`,
        letterSpacing: `${onePixel * spacing}px`,
        paddingLeft: `${onePixel * spacing}px`,
        //- Apply color properties
        color: routeNumber.fgColor ?? model.ledColor,
        backgroundColor: routeNumber.bgColor ?? defaultBgColor,
      }}
    />
  );
}
