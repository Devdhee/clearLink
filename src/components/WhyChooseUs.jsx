import groupOfAvatars from "../assets/Rectangle 1 (1).png";
import arrow from "../assets/Hand-drawn arrow.svg";
import { features } from "../../data/content";

function WhyChooseUs() {
  return (
    <section className="py-[96px] relative lg:py-16">
      <img
        src={arrow}
        alt="hand drawn arrow"
        className="absolute right-[200px] top-[136px] lg:hidden"
      />
      <h3 className="text-[#175CD3] font-semibold text-lg mb-3 max-w-[300px]">
        The ClearLink Advantage
      </h3>
      <h4 className="text-[#1D2939] text-[48px] leading-[60px] font-semibold mb-5 max-w-[600px] lg:text-3xl md:text-2xl">
        Why choose ClearLink?
      </h4>
      <p className="max-w-[700px] text-2xl font-normal text-[#667085] mb-[80px] text-wrap lg:text-xl md:text-lg md:mb-10 lg:max-w-lg">
        In a world where connection is everything, ClearLink takes the lead. Our
        cutting-edge video conferencing app offers:
      </p>
      <div className="flex items-center justify-between gap-6 lg:flex-col lg:gap-20 md:gap-10 lg:flex-start lg:justify-start">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-[40px] gap-y-[60px] lg:gap-x-10 md:grid-cols-1 md:grid-rows-4 md:gap-y-4">
          {features.map((feature) => (
            <div key={feature.title} className="max-w-[360px] h-[228px]">
              <img
                src={feature.image}
                alt={feature.altText}
                className="p-4 rounded-full bg-[#F9FAFB] border-[1px] border-[#EAECF0] mb-5"
              />
              <h4 className="text-[#101828] font-semibold text-2xl mb-2">
                {feature.title}
              </h4>
              <p className="text-[#475467] text-lg">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="">
          <img
            src={groupOfAvatars}
            alt=""
            className="max-w-[544px] lg:w-full lg:size-full"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
