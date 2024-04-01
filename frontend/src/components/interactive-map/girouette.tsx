"use client";

import { clsx } from "clsx";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

const paneBgColor = "#1D1D1B";

const fontProperties = {
  // Hanover Graphic fonts
  "0808B2E1": { height: 8, spacing: 1, extraSpacing: false },
  "1310C2E1": { height: 13, spacing: 2, extraSpacing: false },
  "1508C2E1": { height: 15, spacing: 2, extraSpacing: false },
  "1510N2E1": { height: 15, spacing: 2, extraSpacing: false },
  "1513B3E1": { height: 15, spacing: 2, extraSpacing: false },
  // Hanover Super-X fonts
  "1407SUPX": { height: 14, spacing: 1, extraSpacing: true },
  "1507SUPX": { height: 15, spacing: 1, extraSpacing: true },
  "1508SUPX": { height: 15, spacing: 1, extraSpacing: true },
  "1710SUPX": { height: 17, spacing: 2, extraSpacing: true },
  // Lumiplan/Duhamel fonts
  "14LUPLAN": { height: 14, spacing: 1, extraSpacing: false },
  // Special fonts
  METRO: { height: 16, spacing: 0, extraSpacing: false },
} as const;

type Font = keyof typeof fontProperties;
type TextSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const ledColors = {
  YELLOW: "#FF8000",
  WHITE: "#F2FBFF",
} as const;
type LedColor = keyof typeof ledColors;

type GirouetteDimensions = { height: number; rnWidth: number; destinationWidth: number };
const defaultDimensions: GirouetteDimensions = { height: 17, rnWidth: 32, destinationWidth: 160 };

export type RouteNumberData = {
  text: string;
  //- Font & spacing
  font?: Font;
  spacing?: TextSpacing;
  //- Colors
  backgroundColor?: string;
  outlineColor?: string;
  textColor?: string;
};

type PagesData = {
  text: string | [string] | [string, string];
  //- Font & spacing
  font?: Font;
  spacing?: TextSpacing;
};

export type GirouetteData = {
  dimensions?: GirouetteDimensions;
  ledColor?: "YELLOW" | "WHITE";
  routeNumber?: RouteNumberData;
  pages?: PagesData[];
  width?: number;
};

type GirouetteProps = ComponentPropsWithoutRef<"div"> &
  GirouetteData & {
    width: number;
  };

export function Girouette({
  className,
  dimensions = defaultDimensions,
  ledColor = "WHITE",
  pages = [],
  routeNumber = { text: "" },
  width,
  ...props
}: GirouetteProps) {
  return (
    <div
      className={clsx("border-white flex", className)}
      style={{
        aspectRatio: (dimensions.rnWidth + dimensions.destinationWidth) / dimensions.height,
        backgroundColor: paneBgColor,
        width: `${width}px`,
      }}
      {...props}
    >
      <RouteNumber dimensions={dimensions} ledColor={ledColor} routeNumber={routeNumber} width={width} />
      <Pages dimensions={dimensions} ledColor={ledColor} pages={pages} width={width} />
    </div>
  );
}

// ---

type RouteNumberProps = {
  dimensions: GirouetteDimensions;
  ledColor: LedColor;
  routeNumber: RouteNumberData;
  width: number;
};

function RouteNumber({ dimensions, ledColor, routeNumber, width }: RouteNumberProps) {
  const fontFamily = routeNumber.font ?? "1513B3E1";
  const height = (dimensions.height * width) / (dimensions.rnWidth + dimensions.destinationWidth);
  const onePixel = width / (dimensions.rnWidth + dimensions.destinationWidth);
  const spacing =
    onePixel * (routeNumber.spacing ?? fontProperties[fontFamily].spacing) +
    onePixel * (fontProperties[fontFamily].extraSpacing && routeNumber.outlineColor ? 2 : 0);
  const virtualHeight = (height / dimensions.height) * fontProperties[fontFamily].height;
  return (
    <div
      className="flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: routeNumber.text.trimEnd().replaceAll(" ", "&nbsp;") }}
      style={{
        width: `${onePixel * dimensions.rnWidth}px`,
        //- Font, placement & spacing
        fontFamily: `"${fontFamily}"`,
        fontSize: `${virtualHeight}px`,
        letterSpacing: `${spacing}px`,
        lineHeight: `${virtualHeight}px`,
        paddingLeft: `${spacing}px`,
        //- Colors
        backgroundColor: routeNumber.backgroundColor ?? paneBgColor,
        color: routeNumber.textColor ?? ledColors[ledColor],
        //- Outline (if applicable)
        ...(routeNumber.outlineColor
          ? {
              textShadow: `
                ${onePixel}px 0px 0 ${routeNumber.outlineColor},
                -${onePixel}px 0px 0 ${routeNumber.outlineColor},
                0px ${onePixel}px 0 ${routeNumber.outlineColor},
                0px -${onePixel}px 0 ${routeNumber.outlineColor}`,
            }
          : {}),
      }}
    />
  );
}

// ---

type PagesProps = {
  dimensions: GirouetteDimensions;
  ledColor: LedColor;
  pages: PagesData[];
  width: number;
};

function Pages({ dimensions, ledColor, pages, width }: PagesProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  useEffect(() => {
    const nextPage = () => {
      setCurrentPageIndex((i) => (i < pages.length - 1 ? i + 1 : 0));
    };
    const interval = setInterval(nextPage, 3000);
    return () => clearInterval(interval);
  }, [pages]);

  const activePage = pages[currentPageIndex];

  const lines = Array.isArray(activePage.text) ? activePage.text : [activePage.text];

  const fontFamily = activePage?.font ?? (lines.length === 1 ? "1513B3E1" : "0808B2E1");
  const height = (dimensions.height * width) / (dimensions.rnWidth + dimensions.destinationWidth);
  const onePixel = width / (dimensions.rnWidth + dimensions.destinationWidth);
  const spacing = onePixel * (activePage?.spacing ?? fontProperties[fontFamily].spacing);
  const virtualHeight = (height / dimensions.height) * fontProperties[fontFamily].height;

  return (
    <div
      className="flex flex-col items-center"
      style={{
        color: ledColors[ledColor],
        width: `${onePixel * dimensions.destinationWidth}px`,
        //- Font, placement & spacing
        fontFamily: `"${fontFamily}"`,
        fontSize: `${virtualHeight}px`,
        letterSpacing: `${spacing}px`,
        lineHeight: `${virtualHeight}px`,
        paddingLeft: `${spacing}px`,
        //- Lines alignment
        justifyContent: lines.length === 1 ? "center" : "space-between",
      }}
    >
      {lines.map((line) => (
        <span dangerouslySetInnerHTML={{ __html: line.trimEnd().replaceAll(" ", "&nbsp;") }} key={line} />
      ))}
    </div>
  );
}
