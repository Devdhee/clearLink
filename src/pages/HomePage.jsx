import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function HomePage() {
  return (
    <section className="">
      <main className="max-w-[1450px] px-4 mx-auto bg-rows bg-no-repeat bg-cover h-screen pt-[40px]">
        <Navbar />
        <Hero />
      </main>

      <div className="max-w-[1450px] px-4 mx-auto ">
        <Partners />
        <WhyChooseUs />
      </div>

      <section className="bg-[#F9FAFB]">
        <Testimonials />
      </section>
    </section>
  );
}

export default HomePage;
