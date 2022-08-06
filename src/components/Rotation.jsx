import React from "react";
import { useParallax } from "react-scroll-parallax";

export const Rotation = () => {
  //   const parallax = useParallax();
  const { ref } = useParallax({ rotate: [0, 360] });

  return (
    <div ref={ref} className="spinner">
      😵‍💫 <div className="diamond">💎</div>
      <div className="clown">🤡</div>
      <div className="money">💰</div>
      <div className="hand">👌🏻</div>
    </div>
  );
};
