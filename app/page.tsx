import ABOUT from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <div className=" relative bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={[{name: 'home', link : '/'}]} />
        <Hero/>
        <ABOUT/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
