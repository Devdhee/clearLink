import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <section className="">
      <div className="max-w-[1450px] px-4 mx-auto bg-rows bg-no-repeat bg-cover h-screen pt-[40px]">
        <Navbar />
        <Hero />
      </div>
    </section>
  );
}

export default HomePage;
