import checkedCircle from "../assets/check-circle.svg";
import image from "../assets/Screen mockup (REPLACE FILL).png";

import Button from "./Button";

function ClearPath() {
  return (
    <div className="flex gap-10 lg:flex-col xl:gap-0 lg:gap-5 md:gap-3">
      <div className="flex w-1/2 lg:mx-auto md:w-full md:mx-0">
        <div className="max-w-[725px] flex-1 ml-auto pl-10 py-[96px] lg:pl-0 md:px-4 lg:max-w-[1100px] lg:py-6 ">
          <h3 className="text-[#101828] font-semibold text-[48px] leading-[60px] mb-[32px] xl:text-2xl xl:max-w-lg md:xl sm:lg">
            Ready to clear the path to perfect communication?
          </h3>
          <ul className="pl-4 mb-[20px]">
            <li className="flex gap-3 items-center text-[#475467] text-2xl mb-3 xl:text-xl md:text-lg">
              <span className="">
                <img src={checkedCircle} alt="checked circle" />
              </span>
              30 days free trial
            </li>
            <li className="flex gap-3 items-center text-[#475467] text-2xl mb-3 xl:text-xl md:text-lg">
              <span className="">
                <img src={checkedCircle} alt="checked circle" />
              </span>
              Cancel at any time
            </li>
            <li className="flex gap-3 items-center text-[#475467] text-2xl mb-3 xl:text-xl md:text-lg">
              <span className="">
                <img src={checkedCircle} alt="checked circle" />
              </span>
              Access to all features
            </li>
            <li className="flex gap-3 items-center text-[#475467] text-2xl mb-3 xl:text-xl md:text-lg">
              <span className="">
                <img src={checkedCircle} alt="checked circle" />
              </span>
              Peronalized onboarding
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 pt-10">
            <Button type="secondary">Talk to sales</Button>
            <Button type="small">Start your free trial</Button>
          </div>
        </div>
      </div>
      <div className="flex-1 lg:w-full xl:my-auto">
        <img
          src={image}
          alt="screen mockup"
          className="items-center w-full my-auto"
        />
      </div>
    </div>
  );
}

export default ClearPath;
