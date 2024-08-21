import Image from "next/image";
import React from "react";
import ProductImage from "@/public/product-image.png";
import PyramidImage from "@/public/pyramid.png";
import TubeImage from "@/public/tube.png";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-wrapper">
          <div className="flex justify-center">
            <div className="tag">Boost Your Productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-desc mt-5">
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
