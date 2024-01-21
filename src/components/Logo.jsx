import logo from "../assets/logo.svg";

function Logo() {
  return (
    <div className="flex gap-[10px] items-center">
      <img src={logo} alt="logo" />
      <h3 className="font-semibold text-[24px] font-inter text-[#101828]">
        ClearLink<span className="text-[#528BFF]">.</span>
      </h3>
    </div>
  );
}

export default Logo;
