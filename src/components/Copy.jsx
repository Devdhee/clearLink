import socialIcon1 from "../assets/Social icon.svg";
import socialIcon2 from "../assets/Social icon (1).svg";
import socialIcon3 from "../assets/Social icon (2).svg";
import socialIcon4 from "../assets/Lozenge.svg";
import socialIcon5 from "../assets/Group (1).svg";
import socialIcon6 from "../assets/Group (2).svg";

function Copy() {
  return (
    <div className="bg-[#F9FAFB] ">
      <div className="flex max-w-[1450px] px-4 mx-auto pt-[96px] pb-[48px] justify-between">
        <p className="text-[#667085]">© 2023 ClearLink. All rights reserved.</p>
        <div className="flex gap-6">
          <img src={socialIcon5} alt="" className="hover:cursor-pointer" />
          <img src={socialIcon1} alt="" className="hover:cursor-pointer" />
          <img src={socialIcon2} alt="" className="hover:cursor-pointer" />
          <img src={socialIcon6} alt="" className="hover:cursor-pointer" />
          <img src={socialIcon3} alt="" className="hover:cursor-pointer" />
          <img src={socialIcon4} alt="" className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Copy;
