/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { modules } from "../../../utils/modules";
import { format } from "date-fns";

const PostBlog = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL || "https://bloger-server-topaz.vercel.app";
  const date = new Date();
  const publishDate = format(date, "PP");

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handlePostBlog = async (data) => {
    try {
      setLoading(true)
      data["publish"] = true;
      data["content"] = content;
      data["publishDate"] = publishDate;
      if (!image) {
        alert("please select an thumbnail");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);

      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMBB_KEY}`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      let thumbnail;
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.data) {
          thumbnail = responseData.data.display_url;
        }
      }
      data["thumbnail"] = thumbnail;
      fetch(`${base_url}/post-blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res); // Log the entire response object for debugging
          return res.json();
        })
        .then((result) => {
          console.log(result);
          toast.success(`Blog Posted Successfully`);
          navigate("/");
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
          toast.error("An error occurred. Please try again.");
        });
    } catch (error) {
      console.error("Blog Posting Error: ", error);
      toast.error("An error occurred. Please try again.");
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className="w-1/2 mx-auto px-10 bg-white my-10 py-4 rounded">
      <h2 className="text-4xl text-center mb-4">Add Your Valueable Complain</h2>
      <form
        onSubmit={handleSubmit(handlePostBlog)}
        className="border rounded-lg my-2 px-10 mx-auto"
      >
        <div className="my-2 flex gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("authorName", {
                required: "Author Name is required",
              })}
              type="text"
              placeholder="authorName"
              className="input input-bordered w-full "
            />
            {errors.authorName && (
              <p className="text-red-600"> {errors.authorName.message}</p>
            )}
          </div>
        </div>
        <div className="my-2 flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="title"
              className="input input-bordered w-full "
            />
            {errors.title && (
              <p className="text-red-600"> {errors.title.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label htmlFor="thumbnail" className="label">
              <span className="label-text">Thumbnail</span>
            </label>
            <input
              type="file"
              id="thumbnail"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
              required
            />
            {errors.thumbnail && (
              <p className="text-red-600"> {errors.photo_url.message}</p>
            )}
          </div>
        </div>
        <div className="my-2 flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              {...register("category", {
                required: "category is required",
              })}
              type="text"
              placeholder="category"
              className="input input-bordered w-full "
            />
            {errors.category && (
              <p className="text-red-600"> {errors.category.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Slug</span>
            </label>
            <input
              {...register("slug", { required: "slug is required" })}
              type="text"
              placeholder="slug"
              className="input input-bordered w-full "
            />
            {errors.slug && (
              <p className="text-red-600"> {errors.slug.message}</p>
            )}
          </div>
        </div>
        {/* Description */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            {...register("description", {
              required: "Short Description is required",
            })}
            placeholder="description"
            rows={3}
            className="textarea textarea-bordered"
          />
          {errors.description && (
            <p className="text-red-600"> {errors.description.message}</p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
        </div>
        <ReactQuill
          modules={modules}
          theme="snow"
          id="content"
          onChange={handleContentChange}
        />

        {/* button */}
        <input
          className="btn btn-accent my-4 text-slate-900 hover:text-white "
          value={loading ? "Loading...": "Publish"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default PostBlog;
