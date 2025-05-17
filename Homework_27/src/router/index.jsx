import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main />, handle: { title: "🌸Головна" } },
      { path: "/about", element: <About />, handle: { title: "💁‍♀️Про мене" } },
      {
        path: "/contacts",
        element: <Contacts />,
        handle: { title: "📞Контакти" },
      },
      { path: "*", element: <NotFound />, handle: { title: "❌Не знайдено" } },
    ],
  },
]);
