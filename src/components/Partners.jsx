import brand1 from "../assets/Shopify.com svg.svg";
import brand2 from "../assets/Coinbase svg.svg";
import brand3 from "../assets/Dropbox svg.svg";
import brand4 from "../assets/Intercom svg.svg";
import brand5 from "../assets/Marvel svg.svg";
import brand6 from "../assets/Automattic svg.svg";

function Partners() {
  return (
    <section className="flex flex-col gap-12 py-[96px] w-full lg:py-16">
      <h3 className="font-medium text-xl text-[#475467] text-center md:text-lg lg:text-left">
        Join 1,500+ companies already video conferencing the ClearLink way
      </h3>
      <div className="flex gap-[55px] justify-center flex-wrap lg:gap-6">
        <img src={brand1} alt="shopify logo" />
        <img src={brand2} alt="coinbase logo" />
        <img src={brand3} alt="dropbox logo" />
        <img src={brand4} alt="intercom logo" />
        <img src={brand5} alt="marvel logo" />
        <img src={brand6} alt="automatic logo" />
      </div>
    </section>
  );
}

export default Partners;
