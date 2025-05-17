import { NavLink, Outlet, useMatches } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/", label: "Головна" },
  { to: "/about", label: "Про мене" },
  { to: "/contacts", label: "Контакти" },
];

const Layout = () => {
  const matches = useMatches();
  const { theme } = useTheme();

  const currentTitle = [...matches].reverse().find(({ handle }) => handle.title)
    .handle.title;

  return (
    <div>
      <header className="p-8 w-full flex utems-center justify-between">
        <h1
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}>
          {currentTitle}
        </h1>
        <nav className="space-x-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                isActive
                  ? "underline text-pink-400"
                  : theme === "dark"
                  ? "text-white hover:underline"
                  : "text-gray-800 hover:underline"
              }>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="px-8 pb-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
