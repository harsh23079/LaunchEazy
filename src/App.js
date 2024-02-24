import "./App.css";

import Navbar from "./Components/Header";
import LiveSection from "./Components/LiveSection";
import MarketingRecipes from "./Components/MarketingRecipes";
import ValueSection from "./Components/ValueSection";

function App() {
  return (
    <div className="App ">
      <div>
        <Navbar />
      </div>
      <section className="ml-32 mt-10">
        <LiveSection />
      </section>
      <section className="mx-10 mt-10 bg-[#FFF1F1] rounded-3xl p-5">
        <MarketingRecipes />
      </section>
      <section className="ml-10 mr-10 mt-10">
        <ValueSection />
      </section>
    </div>
  );
}

export default App;
