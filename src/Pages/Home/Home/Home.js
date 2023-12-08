import React from "react";
import Banner from "../Banner/Banner";
import Writter from "../Writter/Writter";
import Review from "./Review/Review";
import Blogs from "../../../components/Blogs";

const Home = () => {
  return (
    <>
      <Banner />
      <Blogs />
      <Writter />
      <Review />
    </>
  );
};

export default Home;
