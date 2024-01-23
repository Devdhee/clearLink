import Rating from "./Rating";
import shopify from "../assets/Shopify.svg";
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
    <div className="py-[96px] max-w-[1450px] px-4 mx-auto flex gap-[64px]">
      <div className="flex gap-[48px] flex-col flex-1">
        <img src={shopify} alt="shopify logo" className="w-[113px]" />
        <Rating />
        <h3 className="text-[#101828] text-[44px] leading-[60px] font-medium">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and <br /> top-notch security make it essential for our team.
        </h3>
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <img src={avatar} alt="avatar for testimonial" />
            <div>
              <h6 className="text-[#101828] font-semibold text-xl">
                Sarah Thompson
              </h6>
              <p className="text-[#475467] text-lg">Project Manager, Shopify</p>
            </div>
          </div>
          <div className="flex gap-[32px]">
            <img
              src={arrowLeft}
              alt="arrow left"
              className="p-4 rounded-full border-[1px] border-[#D1E9FF] bg-[#FFFFFFE5] hover:cursor-pointer"
            />
            <img
              src={arrowRight}
              alt="arrow right"
              className="p-4 rounded-full border-[1px] border-[#D1E9FF] bg-[#FFFFFFE5] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 relative max-w-[640px]">
        <img
          src={image4}
          alt=""
          className="absolute top-[120px] left-[152px]"
        />
        <img src={image} alt="" className="absolute  left-[328px] top-[40px]" />
        <img
          src={image1}
          alt=""
          className="absolute top-[300px] right-[60px]"
        />
        <img
          src={image2}
          alt=""
          className="absolute top-[300px] left-[40px] "
        />
        <img
          src={image3}
          alt=""
          className="absolute bottom-[20px]  left-[250px]"
        />
      </div>
    </div>
  );
}

export default Testimonials;
