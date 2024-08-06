"use client";

import { useState } from "react";
import Particles from "@/components/magicui/particles";

export const ParticlesHeading = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <Particles
      className="absolute inset-0"
      quantity={100}
      ease={80}
      color={color}
      refresh
    />
  );
};
