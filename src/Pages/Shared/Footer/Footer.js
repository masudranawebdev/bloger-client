import React from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-slate-200 text-gray-900">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <Link
            rel="noopener noreferrer"
            to="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-semibold">
              Bloger
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Features
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Integrations
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Privacy
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase dark:text-gray-900">Developers</h3>
            <ul className="space-y-1">
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Public API
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Documentation
                </Link>
              </li>
              <li>
                <Link rel="noopener noreferrer" to="#">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900">Social media</div>
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
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-900">
        © 2023 Develop By Masud Rana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
