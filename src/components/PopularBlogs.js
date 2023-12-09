import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Pages/Shared/Loading/Loading";

const PopularBlogs = () => {
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
    <div className="rounded my-7 p-10 bg-[#FBFBFD]">
      <h2 className="text-2xl font-semibold border-b pb-1 mb-5 text-center">
        Popular Bloger
      </h2>
      <div className="mt-7 space-y-6">
        {blogs.slice(0, 3).map((blog) => (
          <div key={blog?._id} className="flex gap-5 items-center">
            <div className="w-[150px] ring ring-slate-50 focus:ring-2 overflow-hidden rounded-lg border">
              <img
                src={blog?.thumbnail}
                alt={blog?.title}
                className="h-[100px] w-full hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <Link
                className="text-xl hover:underline hover:text-blue-500"
                to={`/${blog?.slug}`}
              >
                {blog?.title}
              </Link>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBlogs;
