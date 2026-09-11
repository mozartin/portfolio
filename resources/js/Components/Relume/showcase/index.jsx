import React, { useState } from "react";
import { Navbar1 } from "../Shared/Navbar1";
import { ProjectsHero } from "./components/ProjectsHero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Cta25 } from "../Shared/Cta25";
import { Footer7 } from "../Shared/Footer7";

export default function Page() {
  const [canAnimate, setCanAnimate] = useState({
    grid: true,
    cta: false,
  });

  return (
    <div>
      <Navbar1 />
      <ProjectsHero />
      <ProjectGrid
        canAnimate={canAnimate.grid}
        onAnimationComplete={() =>
          setCanAnimate((prev) => ({ ...prev, cta: true }))
        }
      />
      <Cta25
        canAnimate={canAnimate.cta}
        onAnimationComplete={() => {}}
      />
      <Footer7 />
    </div>
  );
}
