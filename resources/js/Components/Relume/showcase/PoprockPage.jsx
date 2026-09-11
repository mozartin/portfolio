import React, { useState } from "react";
import { Navbar1 } from "../Shared/Navbar1";
import { PoprockHero } from "./components/PoprockHero";
import { PoprockTechAndFeatures } from "./components/PoprockTechAndFeatures";
import { PoprockGallery } from "./components/PoprockGallery";
import { Cta25 } from "../Shared/Cta25";
import { Footer7 } from "../Shared/Footer7";

export default function PoprockPage() {
  const [canAnimate, setCanAnimate] = useState({
    techAndFeatures: true,
    gallery: false,
    cta: false,
  });

  const handleAnimationComplete = (section) => {
    const flow = {
      techAndFeatures: "gallery",
      gallery: "cta",
    };
    const next = flow[section];
    if (next) {
      setCanAnimate((prev) => ({ ...prev, [next]: true }));
    }
  };

  return (
    <div>
      <Navbar1 />
      <PoprockHero />
      <PoprockTechAndFeatures
        canAnimate={canAnimate.techAndFeatures}
        onAnimationComplete={() => handleAnimationComplete("techAndFeatures")}
      />
      <PoprockGallery
        canAnimate={canAnimate.gallery}
        onAnimationComplete={() => handleAnimationComplete("gallery")}
      />
      <Cta25
        canAnimate={canAnimate.cta}
        onAnimationComplete={() => handleAnimationComplete("cta")}
      />
      <Footer7 />
    </div>
  );
}
