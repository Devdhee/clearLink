import Button from "./Button";
import bot from "../assets/bot.svg";

function HeroText() {
  return (
    <div className="">
      <h1 className="font-semibold text-[64px] leading-[72px] text-[#1D2939] font-inter mb-[24px]">
        Uniting the world, <br />
        one video call at a time
      </h1>

      <p className=" text-[#667085] text-2xl mb-[48px]">
        Experience the future of communication with ClearLink - <br />
        where crystal-clear video conferencing meets <br />
        unparalleled simplicity.
      </p>

      <div className="flex gap-[20px]">
        <Button type="primary">Start your free trial</Button>
        <div className="flex gap-[12px] items-center hover:cursor-pointer">
          <img src={bot} alt="bot" />{" "}
          <p className="font-inter font-semibold text-lg text-[#175CD3]">
            Discover AI assistant
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
