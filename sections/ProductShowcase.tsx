"use client"
import Image from "next/image";
import React, { useRef } from "react";
import ProductImage from "@/public/product-image.png";
import PyramidImage from "@/public/pyramid.png";
import TubeImage from "@/public/tube.png";
import { motion, useScroll , useTransform} from "framer-motion"

const ProductShowcase = () => {

  const sectionRef = useRef(null)

  const { scrollYProgress} = useScroll({
target : sectionRef,
offset : ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0,1], [150, -150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
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
          <motion.img src={PyramidImage.src} style={{
            translateY : translateY
          }} alt="Pyramide" className="absolute -right-36 -top-32 hidden md:block" width={262} height={262}/>
          <motion.img src={TubeImage.src} style={{
            translateY : translateY
          }} alt="Tube" className="absolute bottom-24 -left-36 hidden md:block" height={248} width={248}/>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
