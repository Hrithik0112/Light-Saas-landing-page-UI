import React from "react";
import LogoSaas from "../public/logosaas.png";
import SocialX from "../public/social-x.svg";
import SocialInsta from "../public/social-insta.svg";
import SocialLinkedin from "../public/social-linkedin.svg";
import SocialPin from "../public/social-pin.svg";
import SocialYoutube from "../public/social-youtube.svg";
import Image from "next/image";
import { log } from "console";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-center py-10 text-sm">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:h-full before:absolute before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdb9b,#c2f0b1,#2fd8fe)]">

        <Image src={LogoSaas} alt="Logo Saas" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 your company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
