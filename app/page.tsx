"use client";

import { useEffect } from "react";

import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";
import { About } from "@/components/about";
import { Explore } from "@/components/explore";
import { Testimonials } from "@/components/testimonials";
import { OpeningHours } from "@/components/opening-hours";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
    </div>
  );
};

export default Home;
