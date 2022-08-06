import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
export const ParallaxImg = ({
  opacity,
  imgsrc,
  imgsrc2,
  height,
  children,
  speed,
  speed2,
}) => {
  let contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "#fff",
    backgroundColor: `rgba(0,0,0,${opacity == null && "0"})`,
    WebkitFilter: "blur(0px) saturate(2)",
  };

  return (
    <ParallaxBanner
      layers={[
        { image: imgsrc, speed: speed, scale: [1, 1.2] },
        { image: imgsrc2, speed: speed2, scale: [1, 1.2] },
      ]}
      style={{ height: height }}
    >
      <div style={contentStyle}>{children}</div>
    </ParallaxBanner>
  );
};
