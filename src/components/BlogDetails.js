import React, { useEffect, useState } from "react";

import { CiUser } from "react-icons/ci";
import { TfiComments } from "react-icons/tfi";
import { LuCalendarDays } from "react-icons/lu";
import { useParams } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";
import Categories from "./Categories";
import SearchField from "./SearchField";
import PopularBlogs from "./PopularBlogs";
import SocialMedia from "./SocialMedia";
import Instragram from "./Instragram";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const base_url = process.env.BASE_URL || "https://bloger-server-topaz.vercel.app";
  useEffect(() => {
    setLoading(true);
    fetch(`${base_url}/blogs/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [base_url, slug]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="grid grid-cols-8 gap-5">
        {/* left side */}
        <div className="col-span-5 py-10">
          <div className="col-span-8 bg-slate-50 p-5 rounded">
            <figure className="mb-7">
              <img
                src={blog?.thumbnail}
                alt={blog?.title}
                className="group-hover:scale-110 w-full h-full transition-all duration-200"
              />
            </figure>
            <div className="flex items-center gap-x-4">
              <p className="flex items-center">
                <span>
                  <CiUser />
                </span>
                <span>By</span>
                <span className="underline cursor-pointer text-blue-500">
                  {blog?.authorName}
                </span>
              </p>
              <p className="flex items-center gap-x-1">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>
                  <TfiComments />
                </span>
                <span>5</span>
                <span>Comments</span>
              </p>
              <p className="flex items-center gap-x-1">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>
                  <LuCalendarDays />
                </span>
                <span>{blog?.publishDate}</span>
              </p>
            </div>
            <h1 className="text-4xl font-bold leading-8 my-8">{blog?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
          </div>
        </div>
        {/* right side */}
        <div className="col-span-3 py-10">
          {/* categories section */}
          <Categories />
          {/* search section */}
          <SearchField />
          {/* popular blog */}
          <PopularBlogs />
          {/* Social Media */}
          <SocialMedia />
          {/* instragram section*/}
          <Instragram />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
