import React from "react";
import { homeArticles } from "../data/data.js";
import ArticleThumbNail from "../components/ArticleThumbNail.jsx";
import SignUp from "../components/SignUp.jsx";
import BenjiHeadshot from "../assets/BenjiHeadshot.jpg";
import { memberPos } from "../data/data.js";
import BottomTab from '../components/BottomTab';
import { articleData } from "../data/articleData.js";

function Home() {
  return (
    <div className="-z-50 bg-beige w-full pt-10">
      <div className="max-w-[1200px] mx-auto">
        {/* <div className="flex flex-col-reverse items-center md:flex-row md:mb-10 md:px-10 md:h-128 ">
          <div className="hidden md:w-[50%] md:flex justify-center mt-6">
            <img
              src={BenjiHeadshot}
              className="w-1/2 h-full object-cover"
              alt="Glorious Leader"
            />
          </div>
          <div className="md:w-[50%] mb-6 text-justify font-serif">
            <h2 className="text-center text-3xl font-serif font-bold mb-4">
              Our Mission
            </h2>
            <ul className="text-2xl list-disc list-inside md:pl-4 mt-4">
              <li className=" mr-24">School News</li>
              <li className="mt-1 mr-24">Relevant Topics</li>
              <li className="mt-1 mr-24">Student Spotlights</li>
              <li className="mt-1 mr-24">Teacher Profiles</li>
              <li className="mt-1 mr-24">And More!</li>
            </ul>
          </div>
        </div>
        <hr className="bg-black mx-6 border-none h-1 rounded-xl" />
        <div>
          <h2 className="font-serif text-3xl my-8 text-center underline">CHOOSE YOUR POSITION</h2>
          <div className="grid grid-cols-2 gap-4 px-4">
            {memberPos.map((position, index) => (
              <div id={index} className="border p-4 shadow-lg rounded-lg bg-white hover:shadow-2xl hover:bg-slate-100 transition-all duration-200 ease-in">
                <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                <p>{position.desc}</p>
              </div>
            ))}
          </div>
        </div> */}
        <div>
          <h1 className="text-center text-4xl font-serif">
            Today's Top Stories
          </h1>
        </div>
        <div className="mt-12 grid md:grid-cols-2 md:grid-rows-2 px-10 mx-auto max-w-[450px] md:max-w-[900px] gap-y-12 gap-x-12">
          {articleData.map((article, index) => (
            <ArticleThumbNail
              key={index}
              id={index}
              title={article.title}
              author={article.author}
              img={article.img}
            />
          ))}
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Home;
