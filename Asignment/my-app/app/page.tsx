"use client"
import Featurd from "./Components/MiddleHero";
import Featuredproducts from "./Components/Featuredproducts";
import Herosection from "./Components/Herosection";
import Featuredproducts2 from "./Components/AllProducts";
import MiddleHero from "./Components/MiddleHero2";
import Intro from "./Components/Intro";
import List from "./Components/List";

export default function Home() {
  return (
    <div className="bg-white">
      <Herosection />
      <div className="py-6 place-items-center">
      <Featuredproducts />
      </div>
      <Featurd />
      <div className="place-items-center">
      <Featuredproducts2 />
      </div>
      <MiddleHero />
      <div className="place-items-center">
      <Intro />
      </div>
      <div className="place-items-center">
      <List />
      </div>
    </div>
  );
}
