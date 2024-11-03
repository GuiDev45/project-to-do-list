import { ToDo } from "../../models/ToDo";

type ToDoItemProps = {
  toDo: ToDo;
  onEdit: (id: number, task: string) => void;
  onRemove: (id: number) => void;
  isEditing: boolean;
  setEditingId: (id: number | null) => void;
};

export default function ToDoItem({
  toDo,
  onEdit,
  onRemove,
  isEditing,
  setEditingId,
}: ToDoItemProps) {
  const handleSave = () => {
    onEdit(toDo.id, toDo.task);
    setEditingId(null);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            defaultValue={toDo.task}
            onChange={(e) => onEdit(toDo.id, e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
        </div>
      ) : (
        <div>
          {toDo.task}
          <button onClick={() => setEditingId(toDo.id)}>Editar</button>
          <button onClick={() => onRemove(toDo.id)}>Remover</button>
        </div>
      )}
    </li>
  );
}
