import React from 'react';
import {
    FaBriefcase,
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
  } from "react-icons/fa";
const SocialMedia = () => {
    return (
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
    );
};

export default SocialMedia;