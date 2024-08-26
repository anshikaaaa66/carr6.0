import styles from "@/contants/styles";
import React from "react";
import TitleText from "./TitleText";
import { exploreWorlds } from "@/contants/appdata";
import ExploreCard from "./ExploreCard";

const Explore = () => {
  return (
    <section className="relative px-6 py-10 bg-gradient-to-br from-black via-gray-800 to-black overflow-hidden">
      {/* Sparkling effect */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('/path-to-sparkling-effect.svg')] bg-no-repeat bg-cover opacity-20"></div>
      
      <div className={`${styles.innerWidth} mx-auto flex flex-col relative z-20`}>
        <TitleText
          title={
            <span className="text-yellow-100 font-extrabold">
              Why Ride With Us?
            </span>
          }
        />
        <div className="my-9 flex lg:flex-row flex-col min-h-[50vh] gap-8 lg:mx-32">
          {exploreWorlds?.map((world, index) => (
            <ExploreCard key={index} world={world} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
