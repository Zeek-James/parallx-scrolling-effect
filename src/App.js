import { ParallaxProvider } from "react-scroll-parallax";
import { Rotation } from "./components/Rotation";
// import { Component } from "./components/Advanced";

import { Home } from "./components/Home";
// import { SlowAndFast } from "./components/SlowAndFast";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Home />
        <Rotation />
        {/* <Component />
        <SlowAndFast /> */}
      </div>
    </ParallaxProvider>
  );
}

export default App;
