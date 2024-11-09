import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { ToDo } from "../../models/ToDo";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import ToDoItem from "../../components/ToDoItem";

export default function Home() {
  const { register, handleSubmit, reset } = useForm<{ task: string }>();
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const onSubmit = useCallback(
    (data: { task: string }) => {
      setToDos((prev) => [
        ...prev,
        { id: Date.now(), task: data.task, completed: false },
      ]);
      reset();
    },
    [reset],
  );

  const handleEditSave = useCallback((id: number, newTask: string) => {
    if (newTask.trim()) {
      setToDos((prev) =>
        prev.map((toDo) =>
          toDo.id === id ? { ...toDo, task: newTask } : toDo,
        ),
      );
      setEditingId(null);
    }
  }, []);

  const handleRemove = useCallback((id: number) => {
    setToDos((prev) => prev.filter((toDo) => toDo.id !== id));
  }, []);

  const handleToggleComplete = useCallback((id: number) => {
    setToDos((prev) =>
      prev.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    );
  }, []);

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
          <div className="max-h-[470px] overflow-y-auto">
            <ul>
              {toDos.map((toDo) => (
                <ToDoItem
                  key={toDo.id}
                  toDo={toDo}
                  editingId={editingId}
                  setEditingId={setEditingId}
                  handleEditSave={handleEditSave}
                  handleRemove={handleRemove}
                  handleToggleComplete={handleToggleComplete}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
