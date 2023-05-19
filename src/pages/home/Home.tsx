import React, { useState, useEffect } from "react";
import Mobile from "./layout/mobile/Mobile";
import Desktop from "./layout/desktop/Desktop";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{windowWidth < 720 ? <Mobile /> : <Desktop />}</>;
};

export default Home;
