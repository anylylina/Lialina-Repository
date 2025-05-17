import React from "react";
import Main from "./pages/Users";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const MainApp = () => {
  return <RouterProvider router={router} />;
};

const App = () => {
  return <MainApp />;
};

export default App;
