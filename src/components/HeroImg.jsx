import image1 from "../assets/image 21.png";
import image2 from "../assets/image 100.png";
import image3 from "../assets/image 8.png";
import image4 from "../assets/image 72.png";
import image5 from "../assets/image 108.png";
import image6 from "../assets/image 103.png";
import mic from "../assets/microphone-01.svg";
import recorder from "../assets/video-recorder.svg";
import monitor from "../assets/monitor-01.svg";
import smile from "../assets/face-smile.svg";
import message from "../assets/message-text-circle-02.svg";
import setting from "../assets/settings-01.svg";

function HeroImg() {
  return (
    <div className="py-12 pr-8 bg-stone-50/40 lg:py-6 lg:pr-0">
      <div className="p-[32px] max-w-[584px] bg-[#EFF8FF] border-[1px] border-[#B2DDFF] rounded-2xl shadow-[0px_32px_64px_-12px_#10182824] lg:p-4">
        <div className="grid grid-rows-2 grid-cols-3 gap-5 mb-[40px] lg:mb-4">
          <div className="bg-[#FF9C66]  rounded-2xl  max-w-[160px]">
            <img src={image1} alt="avatar" />
          </div>
          <div className="bg-[#D6BBFB]  rounded-2xl  max-w-[160px]">
            <img src={image2} alt="avatar" />
          </div>
          <div className="bg-[#ACDC79]  rounded-2xl  max-w-[160px]">
            <img src={image3} alt="avatar" />
          </div>
          <div className="bg-[#B3B8DB]  rounded-2xl  max-w-[160px]">
            <img src={image4} alt="avatar" />
          </div>
          <div className="bg-[#FEC84B]  rounded-2xl  max-w-[160px]">
            <img src={image5} alt="avatar" className="w-[94%] mx-auto" />
          </div>
          <div className="bg-[#FEA3B4]  rounded-2xl  max-w-[160px]">
            <img src={image6} alt="avatar" />
          </div>
        </div>

        <div className="flex justify-center gap-[16px] lg:flex-wrap lg:gap-3 md:gap-2 sm:gap-1">
          <div className="bg-white border-[1px] border-[#D1E9FF] p-[12px] rounded-full">
            <img src={mic} alt="microphone" />
          </div>
          <div className="bg-white border-[1px] border-[#D1E9FF] p-[12px] rounded-full">
            <img src={recorder} alt="microphone" />
          </div>
          <div className="bg-white border-[1px] border-[#D1E9FF] p-[12px] rounded-full">
            <img src={monitor} alt="microphone" />
          </div>
          <div className="bg-white border-[1px] border-[#D1E9FF] p-[12px] rounded-full">
            <img src={smile} alt="microphone" />
          </div>
          <div className="bg-white border-[1px] border-[#D1E9FF] p-[12px] rounded-full">
            <img src={message} alt="microphone" />
          </div>
          <div className="bg-white border-[1px] border-[#D1E9FF] p-[12px] rounded-full">
            <img src={setting} alt="microphone" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
