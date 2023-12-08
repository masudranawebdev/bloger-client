import React from "react";
import {
  FaBriefcase,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-8 gap-5">
        {/* left side */}
        <div className="col-span-5 py-10">
          <div className="flex gap-3 group">
            <div className="h-[250px] w-[330px] overflow-hidden rounded-lg">
              <img
                className="h-full w-full rounded group-hover:scale-105 transition-all duration-300"
                alt=""
                src="https://new.axilthemes.com/demo/react/blogar/images/posts/lifestyle-post-02.webp?imwidth=384"
              />
            </div>
            <div className="border py-5 px-8 flex-1 rounded">
              <button className="text-red-400 mb-3">Life Style</button> <br />
              <Link to="#" className="text-2xl font-bold hover:underline">
                Lifestyle Fashion portrait of young businessman handsome model
                man i...
              </Link>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    Masud Rana
                  </h2>
                  <p>
                    <span> 9 Dec, 2023</span>
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
        </div>
        {/* right side */}
        <div className="col-span-3 py-10">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    alt=""
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-semibold">Traveler</h2>
            </div>
            <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    alt=""
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-semibold">Traveler</h2>
            </div>
            <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    alt=""
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-semibold">Traveler</h2>
            </div>
            <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <h2 className="text-3xl font-semibold">Traveler</h2>
            </div>
          </div>

          <div className="p-10 my-5 rounded bg-[#FBFBFD]">
            <h2 className="border-b mb-5 text-center font-semibold text-xl pb-1">
              Search
            </h2>
            <div className="relative w-[300px] mx-auto">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  title="Search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 dark:text-gray-500"
                  >
                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full py-2 pl-10 text-sm rounded-full focus:outline-none bg-gray-200 dark:text-gray-100"
              />
            </div>
          </div>
          {/* recent blog */}
          <div className="rounded my-7 p-10 bg-[#FBFBFD]">
            <h2 className="text-2xl font-semibold border-b pb-1 mb-5 text-center">
              Popular Bloger
            </h2>
            <div className="mt-7 space-y-3">
              <div className="flex gap-5 items-center">
                <div className="w-[150px] ring ring-slate-50 focus:ring-2 overflow-hidden rounded-lg">
                  <img
                    src="https://new.axilthemes.com/demo/react/blogar/images/posts/thumbnail-01.webp?imwidth=256"
                    alt="Shoes"
                    className="h-[100px] w-[150px] hover:scale-105"
                  />
                </div>
                <div>
                  <Link
                    className="text-xl hover:underline hover:text-blue-500"
                    href={`/service`}
                  >
                    life style blog
                  </Link>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      Masud Rana
                    </h2>
                    <p>
                      <span> 9 Dec, 2023</span>
                      <span className="w-2 mx-2 h-2 bg-violet-500 rounded-full inline-block"></span>
                      <span>5 min read</span>
                    </p>
                  </div>
                  {/* <p>{format(parseISO(service?.createdAt), "PP")}</p> */}
                </div>
              </div>
            </div>
          </div>
          {/* recent blog */}
          <div className="rounded my-7 p-10 bg-[#FBFBFD]">
            <h2 className="text-2xl font-semibold border-b pb-1 mb-5 text-center">
              Stay in Touch
            </h2>
            <nav className="flex justify-center items-center gap-x-2 mt-5">
              <a
                href="http://www.facebook.com/masudranawebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span
                  className="w-10 h-10 rounded-full group-hover:bg-[#1877f2] bg-slate-200 transition-all duration-500 flex items-center justify-center tooltip"
                  data-tip="facebook"
                >
                  <FaFacebookF className="group-hover:text-slate-50 text-[#1877f2] transition-all duration-500" />
                </span>
              </a>
              <a
                href="http://www.linkedin.com/in/masudranawebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span
                  className="w-10 h-10 rounded-full group-hover:bg-[#1877f2] bg-slate-200 transition-all duration-500 flex items-center justify-center tooltip"
                  data-tip="linkedin"
                >
                  <FaLinkedinIn className="group-hover:text-slate-50 text-[#1877f2] transition-all duration-500" />
                </span>
              </a>
              <a
                href="http://www.github.com/masudranawebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span
                  className="w-10 h-10 rounded-full group-hover:bg-[#1877f2] bg-slate-200 transition-all duration-500 flex items-center justify-center tooltip"
                  data-tip="github"
                >
                  <FaGithub className="group-hover:text-slate-50 text-[#1877f2] transition-all duration-500" />
                </span>
              </a>
              <a
                href="http://mrmasud.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <span
                  className="w-10 h-10 rounded-full group-hover:bg-[#1877f2] bg-slate-200 transition-all duration-500 flex items-center justify-center tooltip"
                  data-tip="portfolio"
                >
                  <FaBriefcase className="group-hover:text-slate-50 text-[#1877f2] transition-all duration-500" />
                </span>
              </a>
            </nav>
          </div>

          {/* recent blog */}
          <div className="rounded my-7 p-10 bg-[#FBFBFD]">
            <h2 className="text-2xl font-semibold border-b pb-1 mb-5 text-center">
              Instagram
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-01.webp?imwidth=256"
                  alt=""
                  className="hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-02.webp?imwidth=256"
                  alt=""
                  className="hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-03.webp?imwidth=256"
                  alt=""
                  className="hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-04.webp?imwidth=256"
                  alt=""
                  className="hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-05.webp?imwidth=256"
                  alt=""
                  className="hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-06.webp?imwidth=256"
                  alt=""
                  className="hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
