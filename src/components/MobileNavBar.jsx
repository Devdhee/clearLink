import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import dropDown from "../assets/chevron-down.svg";
import { useState, useEffect, useRef } from "react";

function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="hidden fixed top-0 w-full px-6 md:p-4 py-5 bg-[#F2F4F7] border border-[#D0D5DD]  z-50 lg:block"
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button onClick={handleToggle} className="focus:outline-none">
          <GiHamburgerMenu className="text-xl" />
        </button>
      </div>
      {isOpen && (
        <ul className="absolute left-0 right-0 flex flex-col gap-6 mt-4 bg-[#F2F4F7] border-t border-[#D0D5DD] px-4 py-10">
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <p className="text-base font-inter">Products</p>
            <img src={dropDown} alt="" className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <p className="text-base font-inter">Solutions</p>
            <img src={dropDown} alt="" className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <p className="text-base font-inter">Resources</p>
            <img src={dropDown} alt="" className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <p className="text-base font-inter">Pricing</p>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default MobileNavBar;
