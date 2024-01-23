import checkedCircle from "../assets/check-circle.svg";
import image from "../assets/Screen mockup (REPLACE FILL).png";

import Button from "./Button";

function ClearPath() {
  return (
    <div className="max-w-[1450px] px-4 mx-auto py-[96px]">
      <div className="w-[600px]">
        <h3 className="text-[#101828] font-semibold text-[48px] leading-[60px] mb-[32px]">
          Ready to clear the path to perfect communication?
        </h3>
        <ul className="pl-4 mb-[20px]">
          <li className="flex gap-3 items-center text-[#475467] text-2xl mb-5">
            <span className="">
              <img src={checkedCircle} alt="checked circle" />
            </span>
            30 days free trial
          </li>
          <li className="flex gap-3 items-center text-[#475467] text-2xl mb-5">
            <span className="">
              <img src={checkedCircle} alt="checked circle" />
            </span>
            Cancel at any time
          </li>
          <li className="flex gap-3 items-center text-[#475467] text-2xl mb-5">
            <span className="">
              <img src={checkedCircle} alt="checked circle" />
            </span>
            Access to all features
          </li>
          <li className="flex gap-3 items-center text-[#475467] text-2xl mb-5">
            <span className="">
              <img src={checkedCircle} alt="checked circle" />
            </span>
            Peronalized onboarding
          </li>
        </ul>

        <div className="mt-5 flex gap-4">
          <Button type="secondary" className="mt-5">
            Talk to sales
          </Button>
          <Button type="small" className="mt-5">
            Start your free trial
          </Button>
        </div>
      </div>

      <img
        src={image}
        alt="screen mockup"
        className="absolute right-0 bottom-[0px] max-w-[724px]"
      />
    </div>
  );
}

export default ClearPath;
