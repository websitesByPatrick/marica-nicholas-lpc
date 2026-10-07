import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero/hero";
import Qualifications from "./components/qualifications";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Qualifications />
      <Contact />


    </>
  );
}
