import ClearPath from "../components/ClearPath";
import Copy from "../components/Copy";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MobileNavBar from "../components/MobileNavBar";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function HomePage() {
  return (
    <div className="relative">
      <MobileNavBar />
      <main className="max-w-[1450px] px-4 mx-auto bg-hero-pattern bg-no-repeat bg-cover h-screen lg:h-fit pt-[40px] lg:mt-10">
        <Navbar />
        <Hero />
      </main>

      <div className="max-w-[1450px] px-10 mx-auto sm:px-4">
        <Partners />
      </div>

      <div className="max-w-[1450px] px-10 mx-auto sm:px-4">
        <WhyChooseUs />
      </div>

      <section className="bg-[#F9FAFB]">
        <Testimonials />
      </section>

      <section>
        <Faqs />
      </section>

      <section className="relative">
        <ClearPath />
      </section>

      <Footer />
      <Copy />
    </div>
  );
}

export default HomePage;
