import { ImageResponse } from "next/og";

export function renderBrandIcon(size: number) {
  const border = Math.max(3, Math.round(size * 0.055));

  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        color: "#ffffff",
        background: "#090909",
        border: `${border}px solid #ef006f`,
        fontFamily: "Arial Black, Arial, sans-serif",
        fontSize: Math.round(size * 0.43),
        fontWeight: 900,
        letterSpacing: "-0.09em",
      }}
    >
      RR
      <span
        style={{
          position: "absolute",
          right: Math.round(size * 0.2),
          width: Math.max(4, Math.round(size * 0.085)),
          height: Math.round(size * 0.78),
          background: "#ef006f",
          transform: "rotate(21deg)",
        }}
      />
    </div>,
    { width: size, height: size },
  );
}
