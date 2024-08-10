import Image from "next/image";
import ArrowRight from "../public/arrow-right.svg";
import Logo from "../public/logosaas.png";
import MenuIcon from "../public/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="bg-black text-white flex items-center justify-center py-3 gap-3">
        <p className="text-white/60 hidden md:block">StreamLine your workflow and boost your productivity</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get Started For Free</p>
          <Image
            src={ArrowRight}
            alt="arrow"
            className="size-4 inline-flex justify-center items-center"
          />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="saas logo" className="size-10" />
            <Image src={MenuIcon} alt="Menu icon" className="size-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-white/60 items-center">
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Customers</a>
                <a href="#">Updates</a>
                <a href="#">Help</a>
                <button className="bg-black text-white px-4 py-2 font-medium tracking-tight rounded-lg inline-flex justify-center items-center">Get for Free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
