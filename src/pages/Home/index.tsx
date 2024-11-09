import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { ToDo } from "../../models/ToDo";
import { Input } from "../../components/Input";
import Button from "../../components/Button";

export default function Home() {
  const { register, handleSubmit, reset } = useForm<{ task: string }>();
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const onSubmit = (data: { task: string }) => {
    setToDos((prev) => [
      ...prev,
      { id: Date.now(), task: data.task, completed: false },
    ]);
    reset();
  };

  const handleEditSave = (id: number, newTask: string) => {
    setToDos((prev) =>
      prev.map((toDo) => (toDo.id === id ? { ...toDo, task: newTask } : toDo)),
    );
    setEditingId(null);
  };

  const handleRemove = (id: number) => {
    setToDos((prev) => prev.filter((toDo) => toDo.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setToDos((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src="/img/To-Do-List.png" alt="To do list" />
      <div className="bg-gColor5 p-4 rounded-gborderRadius shadow-md w-full max-w-[600px] min-h-[650px] mt-16 px-60 py-48">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center relative w-[400px] mb-32"
        >
          <Input
            {...register("task", { required: true })}
            className="input-primary"
            placeholder="Digite a tarefa..."
          />
          <Button type="submit" className="btn-primary absolute left-[350px]">
            Adicionar
          </Button>
        </form>

        {toDos.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-[400px]">
            <img
              src="/img/capivara02.png"
              alt="Nenhuma tarefa encontrada"
              className="w-auto h-64 mb-4 object-contain"
            />
            <p className="text-gray-600 text-[32px]">
              Adicione sua primeira tarefa
            </p>
          </div>
        ) : (
          <div style={{ maxHeight: "470px", overflowY: "auto" }}>
            <ul>
              {toDos.map((toDo) => (
                <li key={toDo.id} className="flex items-center mb-2">
                  <Button
                    onClick={() => handleToggleComplete(toDo.id)}
                    className="mr-2"
                  >
                    {toDo.completed ? (
                      <RiCheckboxCircleFill className="circle-checked" />
                    ) : (
                      <MdOutlineRadioButtonUnchecked className="circle-unchecked" />
                    )}
                  </Button>
                  {editingId === toDo.id ? (
                    <Input
                      defaultValue={toDo.task}
                      onBlur={(e) => handleEditSave(toDo.id, e.target.value)}
                      className="input-edit"
                    />
                  ) : (
                    <span
                      className={`flex-1 break-words ${
                        toDo.completed ? "line-through text-gray-500" : ""
                      }`}
                      style={{ wordBreak: "break-all" }}
                    >
                      {toDo.task}
                    </span>
                  )}
                  <div className="flex ml-2">
                    {editingId === toDo.id ? (
                      <Button
                        onClick={() => handleEditSave(toDo.id, toDo.task)}
                        className="ml-1"
                      >
                        <GiConfirmed className="input-confirm-edit-task" />
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setEditingId(toDo.id)}
                        className="ml-1"
                      >
                        <FaRegEdit className="input-edit-task" />
                      </Button>
                    )}
                    <Button
                      onClick={() => handleRemove(toDo.id)}
                      className="ml-1"
                    >
                      <IoCloseSharp className="input-delete-task" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
