import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

function MobileNavBar() {
  return (
    <nav className="top-2 hidden w-full px-4  py-4 rounded-[100px] bg-[#F2F4F7] border-[#D0D5DD] border mb-8  lg:flex justify-between items-center z-50 fixed">
      <Logo />
      <GiHamburgerMenu className="text-xl" />
    </nav>
  );
}

export default MobileNavBar;
