import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import UserDetails from "../pages/UserDetails";
import Layout from "../Components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main />, handle: { title: "Main" } },
      { path: "/about", element: <About />, handle: { title: "About" } },
      { path: "/users", element: <Users />, handle: { title: "Users" } },
      { path: "/users/:id", element: <UserDetails /> },
      { path: "*", element: <NotFound />, handle: { title: "❌Not Found" } },
    ],
  },
]);
