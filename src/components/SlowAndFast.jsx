import React from "react";
import { Parallax } from "react-scroll-parallax";

export const SlowAndFast = () => {
  return (
    <div>
      <Parallax speed={-5}>
        <div className="slow">John</div>
      </Parallax>
      <Parallax speed={5}>
        <div className="fast">John</div>
      </Parallax>
    </div>
  );
};
