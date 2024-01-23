import Logo from "./Logo";
import googlePlay from "../assets/Mobile app store badge.png";
import appStore from "../assets/Mobile app store badge.svg";

function Footer() {
  return (
    <footer className="flex max-w-[1450px] px-10 mx-auto pt-[96px] pb-[48px] gap-[100px]">
      <div className="flex flex-col gap-8 max-w-[400px]">
        <Logo />
        <p className="text-lg text-[#475467]">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>
      <div className="flex gap-6 justify-between w-full">
        <div className="flex flex-col gap-4">
          <p className="text-[#667085] font-semibold">Product</p>
          <ul className="flex flex-col gap-4">
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Overview
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Features
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Solutions
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Tutorials
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#667085] font-semibold">Company</p>
          <ul className="flex flex-col gap-4">
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              About us
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Careers
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Press
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              News
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#667085] font-semibold">Resources</p>
          <ul className="flex flex-col gap-4">
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Blog
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Events
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Help centre
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Tutorials
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#667085] font-semibold">Legal</p>
          <ul className="flex flex-col gap-4">
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Terms
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Privacy
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Cookies
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Licenses
            </li>
            <li className="text-[#475467] text-lg font-semibold hover:cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[#004EEB] font-semibold">Get the app</p>
          <img src={appStore} alt="" className="hover:cursor-pointer" />
          <img src={googlePlay} alt="" className="hover:cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
