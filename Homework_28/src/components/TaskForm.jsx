import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  task: z.string().min(5, "Мінімум 5 символів"),
});

function TaskForm({ tasks, setTasks }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    const newTask = {
      text: data.task,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [...tasks, newTask].sort((a, b) =>
      a.text.localeCompare(b.text)
    );
    setTasks(updated);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("task")}
        placeholder="Введіть задачу..."
        className={`w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 ${
          errors.task && touchedFields.task
            ? "border-red-500 ring-red-300"
            : "focus:ring-indigo-400"
        }`}
      />
      {errors.task && touchedFields.task && (
        <p className="text-red-500 text-sm">{errors.task.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-fuchsia-500 text-white py-2 rounded-lg hover:bg-fuchsia-600 transition">
        Додати задачу
      </button>
    </form>
  );
}

export default TaskForm;
