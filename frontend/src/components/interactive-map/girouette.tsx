"use client";

import { clsx } from "clsx";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

const getFontHeight = (font: string) => (font === "METRO" ? 24 : +font.substring(0, 2));

const paneBackgroundColor = "#1D1D1B";
const ledBackgroundColor = "#FF8000";

const defaultRouteNumber = {
  backgroundColor: paneBackgroundColor,
  color: ledBackgroundColor,
  size: "lg",
  text: "",
} as const;

export type RouteNumber = {
  backgroundColor?: string;
  outlineColor?: string;
  textColor?: string;
  paddingLeft?: number;
  font?:
    | "1310C2E1"
    | "1407SUPX"
    | "1507SUPX"
    | "1508C2E1"
    | "1508SUPX"
    | "1510N2E1"
    | "1513B3E1"
    | "1710SUPX"
    | "2409C3E1"
    | "METRO";
  textSpacing?: TextSpacing;
  wordSpacing?: WordSpacing;
  text: string;
};

export type GirouetteData = {
  dimensions?: { height: number; rnWidth: number; textWidth: number };
  routeNumber?: RouteNumber;
  pages: Page[];
  width?: number;
};

type Page = {
  textSpacing?: TextSpacing;
  wordSpacing?: WordSpacing;
} & (
  | {
      font?:
        | "1310C2E1"
        | "1407SUPX"
        | "1507SUPX"
        | "1508C2E1"
        | "1508SUPX"
        | "1510N2E1"
        | "1513B3E1"
        | "1710SUPX"
        | "2409C3E1";
      text: string;
    }
  | { font?: "0808B2E1"; text: [string, string] }
);

export type TextSpacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type WordSpacing = -1 | 0 | 1;

type GirouetteProps = ComponentPropsWithoutRef<"div"> &
  GirouetteData & {
    width: number;
  };

const defaultDimensions = { height: 17, rnWidth: 32, textWidth: 160 };

export function Girouette({
  className,
  dimensions = defaultDimensions,
  pages,
  routeNumber = defaultRouteNumber,
  width,
  ...props
}: GirouetteProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const updateCount = () => setCount((c) => (c >= pages.length - 1 ? 0 : c + 1));
    const interval = setInterval(updateCount, 3000);
    return () => clearInterval(interval);
  }, [pages]);
  const currentPage = pages[count % pages.length];
  const height = (dimensions.height * width) / (dimensions.rnWidth + dimensions.textWidth);
  const onePixel = width / (dimensions.rnWidth + dimensions.textWidth);
  const widerRnSpacing = routeNumber.font?.endsWith("SUPX") && typeof routeNumber.outlineColor !== "undefined";
  return (
    <div
      className={clsx("border-white flex", className)}
      style={{
        backgroundColor: paneBackgroundColor,
        height: `${height}px`,
        width: `${width}px`,
      }}
      {...props}
    >
      <div
        className="flex items-center justify-center overflow-hidden whitespace-nowrap"
        style={{
          backgroundColor: routeNumber.backgroundColor ?? paneBackgroundColor,
          color: routeNumber.textColor ?? ledBackgroundColor,
          fontFamily: `"${routeNumber.font ?? "1513B3E1"}"`,
          fontSize: `${(height / dimensions.height) * getFontHeight(routeNumber.font ?? "1513B3E1")}px`,
          letterSpacing: `${onePixel * (routeNumber.textSpacing ?? widerRnSpacing ? 3 : 2)}px`,
          lineHeight: `${(height / dimensions.height) * getFontHeight(routeNumber.font ?? "1513B3E1")}px`,
          paddingLeft: `${
            onePixel * (routeNumber.textSpacing ?? widerRnSpacing ? 3 : 2) + onePixel * (routeNumber.paddingLeft ?? 0)
          }px`,
          width: `${onePixel * dimensions.rnWidth}px`,
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
      >
        {routeNumber.text}
      </div>
      {Array.isArray(currentPage?.text) ? (
        <div
          className="flex flex-col justify-between overflow-hidden text-center whitespace-nowrap"
          style={{
            color: ledBackgroundColor,
            fontFamily: `"${currentPage.font ?? "0808B2E1"}"`,
            fontSize: `${(height / dimensions.height) * getFontHeight(currentPage.font ?? "0808B2E1")}px`,
            rowGap: `${onePixel}px`,
            letterSpacing: `${onePixel * (currentPage.textSpacing ?? 1)}px`,
            lineHeight: `${(height / dimensions.height) * getFontHeight(currentPage.font ?? "0808B2E1")}px`,
            paddingLeft: `${onePixel * (currentPage.textSpacing ?? 1)}px`,
            width: `${onePixel * dimensions.textWidth}px`,
          }}
        >
          <span>{currentPage.text[0]}</span>
          <span>{currentPage.text[1]}</span>
        </div>
      ) : (
        <div
          className="flex items-center justify-center overflow-hidden text-center whitespace-nowrap"
          style={{
            color: ledBackgroundColor,
            fontFamily: `"${currentPage?.font ?? "1513B3E1"}"`,
            fontSize: `${(height / dimensions.height) * getFontHeight(currentPage?.font ?? "1513B3E1")}px`,
            letterSpacing: `${onePixel * (currentPage?.textSpacing ?? 2)}px`,
            lineHeight: `${(height / dimensions.height) * getFontHeight(currentPage?.font ?? "1513B3E1")}px`,
            paddingLeft: `${onePixel * (currentPage?.textSpacing ?? 2)}px`,
            width: `${onePixel * dimensions.textWidth}px`,
            wordSpacing: `${onePixel * (currentPage?.wordSpacing ?? 0)}px`,
          }}
        >
          {currentPage?.text}
        </div>
      )}
    </div>
  );
}
