import React from "react";
import { useParams } from "react-router-dom";
import { articleData } from "../data/articleData";
import BottomTab from "../components/BottomTab";

const ArticlePage = () => {
  const { id } = useParams();
  console.log(parseInt(id));
  const article = articleData.find((article) => article.id === parseInt(id));

  if (!article) {
    return (
      <h2 className="mt-8 text-center text-3xl underline ">
        Article Not Found!
      </h2>
    );
  }

  return (
    <>
        <div
      className="relative min-h-[100vh] bg-cover bg-center pt-24"
      style={{
        backgroundImage: `url(${article.img})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover', 
      }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="rounded-md relative whitespace-pre-wrap indent-8 max-w-[600px] md:max-w-[800px] mx-auto text-justify leading-8 text-lg font-serif px-8 py-6 bg-beige">
        {article.text}
        <br></br>
        <p className="mt-6">-{article.author}</p>
      </div>
    </div>
      <div className="-mt-12"><BottomTab /></div>
    </>
)};

export default ArticlePage;
