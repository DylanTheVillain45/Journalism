import React from "react";
import { team } from "../data/data";
import BottomTab from "../components/BottomTab";

const AboutPage = () => {
  return (
    <>
      <div className="-mt-12 -mb-10 pb-12 pt-24 min-h-[85vh] bg-beige w-full">
        <h1 className="mb-12 text-4xl font-serif text-center underline">
          Meet our People:
        </h1>
        <div className="grid grid-cols-2 gap-8 mx-auto max-w-[600px] md:max-w-[1200px]">
          {team.map((article, index) => (
            <div key={index} className="text-center mt-8 max-w-[40vw] ">
              <h1 className="text-2xl font-serif underline capitalize mb-4">
                {article.name}
              </h1>
              <p className="text-xl font-serif text-slate-700 capitalize">
                {article.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BottomTab />
    </>
  );
};

export default AboutPage;
