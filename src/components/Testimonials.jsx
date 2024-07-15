import Rating from "./Rating";
import shopifyLogo from "../assets/Shopify.svg";
import avatar from "../assets/AvatarTestimonial.png";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import image from "../assets/Image.png";
import image1 from "../assets/Image (1).png";
import image2 from "../assets/Image (2).png";
import image3 from "../assets/Image (3).png";
import image4 from "../assets/Image (4).png";

function Testimonials() {
  return (
    <div className="py-[96px] max-w-[1450px] px-10 mx-auto flex gap-[64px] lg:flex-col lg:gap-5 sm:px-4">
      <div className="flex gap-[48px] flex-col flex-1 lg:gap-5">
        <img src={shopifyLogo} alt="shopify logo" className="w-[113px]" />
        <Rating />
        <h3 className="text-[#101828] text-[44px] xl:leading-[60px] font-medium lg:text-2xl md:text-xl lg:max-w-lg">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h3>

        <div className="flex justify-between sm:flex-col lg:gap-10">
          <div className="flex items-center gap-4 lg:max-w-lg">
            <img src={avatar} alt="avatar for testimonial" />
            <div>
              <h6 className="text-[#101828] font-semibold text-xl">
                Sarah Thompson
              </h6>
              <p className="text-[#475467] text-lg">Project Manager, Shopify</p>
            </div>
          </div>
          <div className="flex gap-[32px] sm:gap-4 sm:mx-auto ">
            <img
              src={arrowLeft}
              alt="arrow left"
              className="p-4 rounded-full border-[1px] border-[#D1E9FF] bg-[#FFFFFFE5] hover:cursor-pointer lg:p-2 lg:size-10"
            />
            <img
              src={arrowRight}
              alt="arrow right"
              className="p-4 rounded-full border-[1px] border-[#D1E9FF] bg-[#FFFFFFE5] hover:cursor-pointer lg:p-2 lg:size-10"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 relative max-w-[700px] h-[558px] lg:hidden">
        <img src={image4} alt="" className="absolute top-[20%] left-[25%]" />
        <img src={image} alt="" className="absolute  right-[23%] top-[6%]" />
        <img src={image1} alt="" className="absolute top-[53%] right-[5%]" />
        <img src={image2} alt="" className="absolute top-[53%] left-[6%] " />
        <img src={image3} alt="" className="absolute top-[53%]  left-[38%]" />
      </div>
    </div>
  );
}

export default Testimonials;
