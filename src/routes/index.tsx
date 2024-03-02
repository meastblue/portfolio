import About from "~/components/About";
import Header from "~/components/Header";
import Intro from "~/components/Intro";
import Journey from "~/components/Journey";
import Projects from "~/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Journey />
      <Projects />
    </>
  );
}
