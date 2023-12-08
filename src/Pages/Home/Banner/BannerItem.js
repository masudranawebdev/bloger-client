import React from "react";
import "./BannerItem.css";
import { Link } from "react-router-dom";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item rounded-none relative w-full">
      <div className="carousel-img rounded-none w-full min-h-[70vh] relative">
        <img src={image} alt="" className="w-full h-[100vh] object-cover rounded-none" />
        <div className="absolute w-full h-full bg-black top-0 bg-opacity-30 rounded-none"></div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-5xl font-bold text-white">
          Welcome To
          <br /> Blogar site
          <br />
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-5/12	 mt-12">
        <p className="text-white text-lg">
          Calling book lovers and avid readers of all ages! Have you ever
          wondered what the benefits of reading are aside from leisure and
          education? From learning new words to maintaining your mental health,
          books can do it all!
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
        <Link to="/login" className="btn bg-orange-500  font-bold mr-5">Login</Link>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-orange-500  mr-5"
        >
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-orange-500">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
