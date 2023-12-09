import { createBrowserRouter } from "react-router-dom";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import Signup from "../../Pages/Signup/Signup";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import PostBlog from "../../Pages/Dashboard/postBlog/PostBlog";
import BlogDetails from "../../components/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/post-blog",
        element: <PostBlog />,
      },
      {
        path: "/:slug",
        element: <BlogDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;
