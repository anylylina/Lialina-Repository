import { useTheme } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md transition ${
        theme === "dark"
          ? "bg-pink-400 text-white hover:bg-pink-600"
          : "bg-pink-400 text-white hover:bg-pink-600"
      }`}>
      Змінити тему
    </button>
  );
};

export default ThemeSwitcher;
