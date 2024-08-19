import acmeLogo from "@/public/logo-acme.png";
import quantumLogo from "@/public/logo-quantum.png";
import echoLogo from "@/public/logo-echo.png";
import celestialLogo from "@/public/logo-celestial.png";
import pulseLogo from "@/public/logo-pulse.png";
import apexLogo from "@/public/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="AcmeLogo" className="logo-ticker" />
            <Image src={quantumLogo} alt="quantumLogo" className="logo-ticker" />
            <Image src={echoLogo} alt="echoLogo" className="logo-ticker" />
            <Image src={celestialLogo} alt="celestialLogo" className="logo-ticker" />
            <Image src={pulseLogo} alt="pulseLogo" className="logo-ticker" />
            <Image src={apexLogo} alt="apexLogo" className="logo-ticker" />
          </div>
        </div>
      </div>
    </div>
  );
};
