import Image from "next/image";
import React from "react";
import ProductImage from "@/public/product-image.png";
import PyramidImage from "@/public/pyramid.png";
import TubeImage from "@/public/tube.png";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text ">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#001e80] ">
            Efforlesslt turn your ideas into fully functional, responsive, Saas website in just
            minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product Image" className="mt-10" />
          <Image src={PyramidImage} alt="Pyramide" className="absolute -right-36 -top-32 hidden md:block" width={262} height={262}/>
          <Image src={TubeImage} alt="Tube" className="absolute bottom-24 -left-36 hidden md:block" height={248}/>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
