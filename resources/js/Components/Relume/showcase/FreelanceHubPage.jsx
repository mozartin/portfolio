import React, { useState } from "react";
import { Navbar1 } from "../Shared/Navbar1";
import { ShowcaseHero } from "./components/ShowcaseHero";
import { ShowcaseTechAndFeatures } from "./components/ShowcaseTechAndFeatures";
import { ShowcaseGallery } from "./components/ShowcaseGallery";
import { Footer7 } from "../Shared/Footer7";

export default function FreelanceHubPage() {
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
      <ShowcaseHero />
      <ShowcaseTechAndFeatures
        canAnimate={canAnimate.techAndFeatures}
        onAnimationComplete={() => handleAnimationComplete("techAndFeatures")}
      />
      <ShowcaseGallery
        canAnimate={canAnimate.gallery}
        onAnimationComplete={() => {}}
      />
      <Footer7 />
    </div>
  );
}
