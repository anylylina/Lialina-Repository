import React from "react";
import Main from "./pages/Main";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeToggle";

const MainApp = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen w-full p-6 transition-color duration-300 ${
        theme === "dark"
          ? "bg-gray-800 text-gray-800"
          : "bg-pink-200 text-gray-900"
      }`}>
      <div
        className={`fixed bottom-4 right-4 p-4 bg-pink-100 rounded-lg flex items-center space-x-4
    ${
      theme === "dark"
        ? "bg-gray-900 text-gray-800"
        : "bg-pink-100 text-gray-900"
    }`}>
        <h1 className="font-bold text-lg">Поточна тема: {theme}</h1>
        <ThemeSwitcher />
      </div>
      <RouterProvider router={router} />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <MainApp />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
