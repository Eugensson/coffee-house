import Image from "next/image";

import { Badge } from "@/components/badge";
import { Separator } from "@/components/separator";

export const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      <div className="relative hidden xl:flex flex-1 justify-center items-center">
        <div className="w-full h-full absolute z-40 top-0 bg-black/60" />
        <Image
          src="/assets/opening-hours/img.png"
          alt="Opening hours"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-full h-full absolute z-10 top-0 bg-black/[0.85]" />
        <div className="z-20 flex flex-col justify-center items-center">
          <h2 className="h2 text-white mb-4">Opening hours</h2>
          <Separator bg="accent" />
          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              alt="Opening hours"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
