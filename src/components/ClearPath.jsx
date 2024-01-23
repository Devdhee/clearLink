import checkedCircle from "../assets/check-circle.svg";
import image from "../assets/Screen mockup (REPLACE FILL).png";

import Button from "./Button";

function ClearPath() {
  return (
    <div className="flex gap-10 ">
      <div className="w-1/2 flex">
        <div className="max-w-[725px] flex-1 ml-auto pl-10 py-[96px]">
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

          <div className=" flex gap-4 pt-10">
            <Button type="secondary">Talk to sales</Button>
            <Button type="small">Start your free trial</Button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex">
        <img
          src={image}
          alt="screen mockup"
          className="w-full my-auto items-center"
        />
      </div>
    </div>
  );
}

export default ClearPath;
