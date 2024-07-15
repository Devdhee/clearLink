import Button from "./Button";
import bot from "../assets/bot.svg";
import avatar1 from "../assets/Avatar.png";
import avatar2 from "../assets/Avatar (1).png";
import avatar3 from "../assets/Avatar (2).png";
import avatar4 from "../assets/Avatar (3).png";
import avatar5 from "../assets/Avatar (4).png";

import Rating from "./Rating";

function HeroText() {
  return (
    <div className="bg-stone-50/40 py-12 pl-8 max-w-[780px] lg:py-6 lg:pl-0">
      <h1 className="font-semibold text-6xl max-w-[680px] leading-[72px] text-[#1D2939] font-inter mb-[24px] lg:text-5xl md:text-4xl">
        Uniting the world,
        <br /> one video call at a time
      </h1>

      <p className=" text-[#667085] text-2xl mb-[48px] max-w-[662px] lg:text-xl lg:max-w-lg md:text-lg">
        Experience the future of communication with ClearLink where
        crystal-clear video conferencing meets unparalleled simplicity.
      </p>

      <div className="flex gap-[20px] mb-[48px] flex-wrap md:gap-3 md:mb-3">
        <Button type="primary">Start your free trial</Button>
        <div className="flex gap-[12px] items-center hover:cursor-pointer">
          <img src={bot} alt="bot" />
          <p className="font-inter font-semibold text-lg text-[#175CD3]">
            Discover AI assistant
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 md:gap-3">
        <div className="flex py-3">
          <img src={avatar1} alt="avatar" className="p-1  mr-[-25px]" />
          <img src={avatar2} alt="avatar" className="p-1  mr-[-25px]" />
          <img src={avatar5} alt="avatar" className="p-1  mr-[-25px]" />
          <img src={avatar3} alt="avatar" className="p-1  mr-[-25px]" />
          <img src={avatar4} alt="avatar" className="p-1" />
        </div>

        <div>
          <div className="flex gap-4 mb-1 lg:gap-2">
            <Rating />
            <p className="font-medium text-[#344054] lg:text-sm">5.0</p>
          </div>
          <div>
            <p className="font-medium text-[#475467] lg:text-sm">
              from 3,000+ reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
