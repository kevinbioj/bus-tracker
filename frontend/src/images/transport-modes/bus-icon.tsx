import { ComponentPropsWithoutRef } from "react";

type BusIconProps = Omit<ComponentPropsWithoutRef<"svg">, "xmlns" | "version" | "viewBox">;

export function BusIcon(props: BusIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 100.00 100.00" {...props}>
      <path
        d="
  M 21.82 0.00
  L 82.04 0.00
  C 91.67 1.08 93.99 8.15 94.00 16.75
  Q 94.01 50.09 93.99 83.44
  Q 93.99 85.16 92.24 87.71
  Q 91.95 88.13 91.97 88.64
  C 92.10 93.84 92.65 98.75 86.64 100.00
  L 76.95 100.00
  Q 71.50 98.24 72.04 92.56
  A 0.51 0.51 0.0 0 0 71.53 92.00
  L 28.72 92.00
  Q 28.06 92.00 28.07 92.66
  Q 28.14 98.53 22.95 100.00
  L 13.00 100.00
  C 9.07 98.90 8.22 96.63 8.04 92.56
  C 7.85 88.10 6.19 84.27 6.15 80.00
  Q 5.95 56.59 6.04 17.00
  C 6.06 4.59 10.00 1.38 21.82 0.00
  Z
  M 74.00 10.20
  A 2.20 2.20 0.0 0 0 71.80 8.00
  L 30.20 8.00
  A 2.20 2.20 0.0 0 0 28.00 10.20
  L 28.00 13.80
  A 2.20 2.20 0.0 0 0 30.20 16.00
  L 71.80 16.00
  A 2.20 2.20 0.0 0 0 74.00 13.80
  L 74.00 10.20
  Z
  M 83.9484 27.5707
  A 5.65 5.65 0.0 0 0 78.2886 21.9306
  L 21.6087 22.0295
  A 5.65 5.65 0.0 0 0 15.9685 27.6893
  L 16.0116 52.3493
  A 5.65 5.65 0.0 0 0 21.6714 57.9894
  L 78.3513 57.8905
  A 5.65 5.65 0.0 0 0 83.9915 52.2307
  L 83.9484 27.5707
  Z
  M 29.93 75.01
  A 6.93 6.93 0.0 0 0 23.00 68.08
  A 6.93 6.93 0.0 0 0 16.07 75.01
  A 6.93 6.93 0.0 0 0 23.00 81.94
  A 6.93 6.93 0.0 0 0 29.93 75.01
  Z
  M 83.93 75.01
  A 6.93 6.93 0.0 0 0 77.00 68.08
  A 6.93 6.93 0.0 0 0 70.07 75.01
  A 6.93 6.93 0.0 0 0 77.00 81.94
  A 6.93 6.93 0.0 0 0 83.93 75.01
  Z"
      />
      <path
        d="
  M 0.00 44.65
  L 0.00 27.23
  Q 0.95 24.69 3.20 24.09
  A 0.65 0.65 0.0 0 1 4.02 24.72
  L 3.99 47.33
  Q 3.99 48.03 3.30 47.90
  Q 0.85 47.45 0.00 44.65
  Z"
      />
      <path
        d="
  M 100.00 27.38
  L 100.00 44.75
  Q 99.01 47.51 96.71 47.91
  Q 96.00 48.03 96.00 47.31
  L 96.00 24.69
  Q 96.00 23.98 96.70 24.09
  Q 99.08 24.48 100.00 27.38
  Z"
      />
    </svg>
  );
}
