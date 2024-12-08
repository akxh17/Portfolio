import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
