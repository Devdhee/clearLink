import dropDown from "../assets/chevron-down.svg";

function NavItems() {
  return (
    <ul className="flex gap-[40px]">
      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="font-inter text-base">Products</p>
        <img src={dropDown} alt="" />
      </li>

      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="font-inter text-base">Solutions</p>
        <img src={dropDown} alt="" />
      </li>

      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="font-inter text-base">Resources</p>
        <img src={dropDown} alt="" />
      </li>

      <li className="flex gap-[6px] items-center hover:cursor-pointer">
        <p className="font-inter text-base">Pricing</p>
      </li>
    </ul>
  );
}

export default NavItems;
