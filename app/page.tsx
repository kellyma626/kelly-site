import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

const Page = () => {
  return (
    <div>
      <Hero />
      <Blog />
      <Wave topColor="#2f6c73" bottomColor="#77b7d1" variant={1} />
      <Experience />
      <Wave topColor="#77b7d1" bottomColor="#2f6c73" variant={1} />
      <Projects />
      <Footer />
    </div>
  );
};

export default Page;
