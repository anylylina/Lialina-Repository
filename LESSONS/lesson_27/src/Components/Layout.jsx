import { Link, NavLink, Outlet, useMatches } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Main" },
  { to: "/about", label: "About" },
  { to: "/users", label: "Users" },
];

const Layout = () => {
  const matches = useMatches();

  return (
    <div>
      <header className="p-8 w-full text-white flex items-center justify-between">
        <h1 className="text-3xl font-bold">🌍 React Pouter Demo</h1>

        <nav className="space-x-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 underline"
                  : "text-blue-400 hover:underline"
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
