import './App.css'
import HomeHeader from "./components/HomeHeader";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testinomials";
import FeaturesBlocks from "./components/FeaturesBlocks";
import Newsletter from "./components/Newsletter";

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <HomeHeader />
        <Hero />
        <Features />
        <Testimonials />
        <FeaturesBlocks />
        <Newsletter />
      </div>
    </>
  )
}

export default App
