import { useForm } from "react-hook-form";

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("errors", errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded 2-xl shadow-lg">
      <div className="mb-4">
        <label className="block text-sm text-gray-200 mb-1">Імʼя</label>
        <input
          type="text"
          {...register("name", { required: "Це поле є обовʼязковим" })}
          placeholder="Введіть ваше імʼя"
          className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.name && (
          <p className="text-red-400 text-sm mt-1">Поле є обовʼязковим</p>
        )}
      </div>

      {/* ---- */}

      <div className="mb-4">
        <label className="block text-sm text-gray-200 mb-1">About me</label>

        <div className="flex">
          <textarea
            {...register("about", {
              required: "Напишіть щось про себе",
              minLength: {
                value: 10,
                message: "Мінімум 10 символів",
              },
            })}
            placeholder="Розкажіть про себе"
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {errors.about && (
          <p className="text-red-400 text-sm mt-1">{errors.about.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
        Надіслати
      </button>
    </form>
  );
};

export default Main;
