import React, { useState } from "react";
import { Navbar1 } from "../Shared/Navbar1";
import { Header78 } from "./components/Header78";
import { Layout36 } from "./components/Layout36";
import { Layout267 } from "./components/Layout267";
import { Cta25 } from "../Shared/Cta25";
import { Footer7 } from "../Shared/Footer7";

export default function Page() {
  const [canAnimate, setCanAnimate] = useState({
    layout36: true,
    layout267: false,
    cta25: false,
  });

  const handleAnimationComplete = (section) => {
    if (section === "layout36") {
      setCanAnimate(prev => ({ ...prev, layout267: true }));
    } else if (section === "layout267") {
      setCanAnimate(prev => ({ ...prev, cta25: true }));
    }
  };

  return (
    <div>
      <Navbar1 />
      <Header78 />
      <Layout36 
        canAnimate={canAnimate.layout36} 
        onAnimationComplete={() => handleAnimationComplete("layout36")} 
      />
      <Layout267 
        canAnimate={canAnimate.layout267} 
        onAnimationComplete={() => handleAnimationComplete("layout267")} 
      />
      <Cta25 
        canAnimate={canAnimate.cta25} 
        onAnimationComplete={() => handleAnimationComplete("cta25")} 
      />
      <Footer7 />
    </div>
  );
}
