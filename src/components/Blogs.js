import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";
import Categories from "./Categories";
import SearchField from "./SearchField";
import PopularBlogs from "./PopularBlogs";
import SocialMedia from "./SocialMedia";
import {
  FaBriefcase,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Instragram from "./Instragram";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_url = process.env.BASE_URL || "https://bloger-server-topaz.vercel.app";
  useEffect(() => {
    setLoading(true);
    fetch(`${base_url}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [base_url]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container">
      <div className="grid grid-cols-8 gap-5">
        {/* left side */}
        <div className="col-span-5 space-y-5 py-10">
          {blogs.map((blog) => (
            <div key={blog?._id} className="flex gap-3 group">
              <div className="w-[330px] overflow-hidden rounded-lg border">
                <img
                  className="h-full w-full rounded group-hover:scale-105 transition-all duration-300 object-fill"
                  alt={blog?.title}
                  src={blog?.thumbnail}
                />
              </div>
              <div className="border py-5 px-8 flex-1 rounded">
                <button className="text-red-400 mb-3">{blog?.category}</button>
                <br />
                <Link
                  to={blog?.slug}
                  className="text-2xl font-bold hover:underline mb-3 inline-block"
                >
                  {blog?.title}
                </Link>
                <p>{blog?.description.slice(0, 70) + "..."}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {blog?.authorName}
                    </h2>
                    
                    <p>
                      <span>{blog?.publishDate}</span>
                      <span className="w-2 mx-2 h-2 bg-violet-500 rounded-full inline-block"></span>
                      <span>5 min read</span>
                    </p>
                  </div>
                  <nav className="flex mt-5">
                    <a
                      href="http://www.facebook.com/masudranawebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <span
                        className="w-10 h-10 rounded-full group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                        data-tip="facebook"
                      >
                        <FaFacebookF className="text-slate-900 group-hover:text-[#1877f2] transition-all duration-500" />
                      </span>
                    </a>
                    <a
                      href="http://www.linkedin.com/in/masudranawebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <span
                        className="w-10 h-10 rounded-full group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                        data-tip="linkedin"
                      >
                        <FaLinkedinIn className="text-slate-900 group-hover:text-[#1877f2] transition-all duration-500" />
                      </span>
                    </a>
                    <a
                      href="http://www.github.com/masudranawebdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <span
                        className="w-10 h-10 rounded-full group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                        data-tip="github"
                      >
                        <FaGithub className="text-slate-900 group-hover:text-slate-900 transition-all duration-500" />
                      </span>
                    </a>
                    <a
                      href="http://mrmasud.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <span
                        className="w-10 h-10 rounded-full group-hover:bg-slate-50 transition-all duration-500 flex items-center justify-center tooltip"
                        data-tip="portfolio"
                      >
                        <FaBriefcase className="text-slate-900 group-hover:text-slate-900 transition-all duration-500" />
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          ))}
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

export default Blogs;
