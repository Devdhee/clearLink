import dropDown from "../assets/chevron-down.svg";

function NavItems() {
  return (
    <ul className="flex gap-[40px] xl:gap-5">
      <li className="flex gap-[6px] xl:gap-1 items-center hover:cursor-pointer">
        <p className="text-base font-inter">Products</p>
        <img src={dropDown} alt="" />
      </li>

      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="text-base font-inter">Solutions</p>
        <img src={dropDown} alt="" />
      </li>

      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="text-base font-inter">Resources</p>
        <img src={dropDown} alt="" />
      </li>

      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="text-base font-inter">Pricing</p>
      </li>
    </ul>
  );
}

export default NavItems;
