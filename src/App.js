import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";

import Navbar from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import InputField from "./Components/InputField";
import LiveSection from "./Components/LiveSection";
import MarketingRecipes from "./Components/MarketingRecipes";
import MarketingTools from "./Components/MarketingTools";
import ValueSection from "./Components/ValueSection";

function App() {
  const [islive, setLive] = useState("true");
  return (
    <div className="App ">
      <div className="fixed w-full bg-white top-0 ">
        <Navbar islive={islive} setLive={setLive} />
      </div>
      <section className="lg:ml-32 mt-28 sm:ml-4 md:mx-6 md:ml-6">
        <LiveSection islive={islive} setLive={setLive} />
      </section>
      <section className="mt-24 ">
        <HeroSection />
      </section>
      <section className="lg:mx-10 mt-20 lg:mt-0 bg-[#FFF1F1] rounded-3xl p-5 mx-0">
        <MarketingRecipes />
      </section>
      <section className="ml-10 mr-10 my-32 sm:my-12 sm:mx-4 md:mx-6">
        <ValueSection />
      </section>
      <section className="bg-[#DEFBE6] lg:mx-10 mt-10 lg:rounded-3xl p-5 pb-0 mx-0 md:mt-14 rounded-none ">
        <MarketingTools />
      </section>
      <section>
        <InputField />
      </section>
      <section className=" bg-[#262626] sm:mt-16">
        <Footer />
      </section>
    </div>
  );
}

export default App;
