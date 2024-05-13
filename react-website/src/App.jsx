import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavbarTop from "./components/navbar/NavbarTop";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Education from "./components/Education";
import RegisterFreeContent from "./components/RegisterFreeContent";
import Service from "./components/Service";
import CurriculumSystems from "./components/CurriculumSystems";
import TeachingExperience from "./components/TeachingExperience";
import Companies from "./components/Companies";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div>
        <div className="sticky left-0 right-0 bottom-0 top-0 z-50">
          <NavbarTop />
          <Navbar />
        </div>
        <Header />
        <Education />
        <RegisterFreeContent />
        <Service />
        <CurriculumSystems />
        <TeachingExperience />
        <Companies />
        <Footer />
      </div>
    </>
  );
}

export default App;
