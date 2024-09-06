"use client";

import gsap from "gsap";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";

const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.",
  },
];

export const About = () => {
  const scrollTriggerRef = useRef<HTMLDivElement>(null);
  const scrollableSectionRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: "top top",
          end: "1000vw top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <ul
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {data.map((item, index) => (
            <li
              key={index}
              className="relative w-screen h-screen flex flex-col justify-center items-center"
            >
              <div className="container mx-auto">
                <div className="relative flex gap-[30px]">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[100px] h-[100px]" />
                    <div className="max-w-[560px] text-center">
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">
                          {item.title.split(" ")[1]}
                        </span>
                      </h2>
                      <Separator className="mb-8" />
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      <button type="button" className="btn">
                        See more
                      </button>
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      alt="Coffee maker process"
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
