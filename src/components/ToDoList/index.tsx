import { useState } from "react";
import { useForm } from "react-hook-form";
import ToDoItem from "../ToDoItem";
import { ToDo } from "../../models/ToDo";

export default function ToDoList() {
  const { register, handleSubmit, reset } = useForm<{ task: string }>();
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  const onSubmit = (data: { task: string }) => {
    setToDos((prev) => [...prev, { id: Date.now(), task: data.task }]);
    reset();
  };

  const handleEdit = (id: number, task: string) => {
    setToDos((prev) =>
      prev.map((toDo) => (toDo.id === id ? { ...toDo, task } : toDo)),
    );
  };

  const handleRemove = (id: number) => {
    setToDos((prev) => prev.filter((toDo) => toDo.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("task", { required: true })}
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            onEdit={(id, task) => handleEdit(id, task)}
            onRemove={handleRemove}
            isEditing={editingId === toDo.id}
            setEditingId={setEditingId}
          />
        ))}
      </ul>
    </div>
  );
}
