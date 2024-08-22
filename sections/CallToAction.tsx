import React from "react";
import ArrowRight from "../public/arrow-right.svg";
import starImage from "../public/star.png"
import springImage from "../public/spring.png"
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#d2dcff] overflow-x-clip ">
      <div className="container">
        <div className="section-wrapper relative">

        <h2 className="section-title">Sign up free today</h2>
        <p className="section-desc mt-5">
          Celebrate the joy of accompolishment with an app designed to track your progress nad
          motivate your efforts.
        </p>
        <Image src={starImage} alt="star image" width={360} className="absolute -left-[350px] -top-[137px]"/>
        <Image src={springImage} alt="spring image" width={360} className="absolute -right-[331px] -top-[19px]"/>
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">

            <span>Learn more</span>
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
