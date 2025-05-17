import { replace } from "lodash";

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateMain = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="p-8 text-center flex flex-col items-center">
      <h2 className="text-4xl font-bold text-pink-800">404</h2>
      <p className="mt-2 text-pink-600">Сторінка не знайдена🤷</p>

      <button
        onClick={handleNavigateMain}
        className="bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
        Повернутись на головну↩️
      </button>
    </div>
  );
};

export default NotFound;
