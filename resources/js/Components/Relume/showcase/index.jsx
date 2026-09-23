import React, { useState } from "react";
import { Navbar1 } from "../Shared/Navbar1";
import { ProjectsHero } from "./components/ProjectsHero";
import { ProjectGrid } from "./components/ProjectGrid";
import { Footer7 } from "../Shared/Footer7";

export default function Page() {
  const [canAnimate] = useState({
    grid: true,
  });

  return (
    <div>
      <Navbar1 />
      <ProjectsHero />
      <ProjectGrid canAnimate={canAnimate.grid} onAnimationComplete={() => {}} />
      <Footer7 />
    </div>
  );
}
