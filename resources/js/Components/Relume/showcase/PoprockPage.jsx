import React, { useState } from "react";
import { Navbar1 } from "../Shared/Navbar1";
import { PoprockHero } from "./components/PoprockHero";
import { PoprockTechAndFeatures } from "./components/PoprockTechAndFeatures";
import { PoprockGallery } from "./components/PoprockGallery";
import { Footer7 } from "../Shared/Footer7";

export default function PoprockPage() {
  const [canAnimate, setCanAnimate] = useState({
    techAndFeatures: true,
    gallery: false,
  });

  const handleAnimationComplete = (section) => {
    if (section === "techAndFeatures") {
      setCanAnimate((prev) => ({ ...prev, gallery: true }));
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
        onAnimationComplete={() => {}}
      />
      <Footer7 />
    </div>
  );
}
