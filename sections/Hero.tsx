import Image from "next/image";
import ArrowRight from "../public/arrow-right.svg";
import CogImage from "../public/cog.png";
import cylinderImage from "../public/cylinder.png";
import noodleImage from "../public/noodle.png";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">

        {/* content */}
        <div className="md:w-[478px] ">
          <div className="text-sm border border-[#222]/10 inline-flex rounded-lg tracking-tight px-3 py-1">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl tracking-tight mt-6 text-[#010d3e]">
            Celebrate the joy of accompolishment with and app designed to track your progress,
            motivate your efforts , and celebrate your successes.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
        {/* image */}
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative ">
          <Image src={CogImage} alt="Cog image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" />
          <Image src={cylinderImage} width={220} height={220} alt="cylinder image" className="hidden md:block -top-8 -left-32 md:absolute"/>
          <Image src={noodleImage} alt="noodle image" width={220} className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"/>
        </div>
        </div>
      </div>
    </section>
  );
};
