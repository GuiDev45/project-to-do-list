import { ToDo } from "../../models/ToDo";
import { Input } from "../../components/Input";
import Button from "../../components/Button";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

type ToDoItemProps = {
  toDo: ToDo;
  editingId: number | null;
  setEditingId: (id: number | null) => void;
  handleEditSave: (id: number, newTask: string) => void;
  handleRemove: (id: number) => void;
  handleToggleComplete: (id: number) => void;
};

export default function ToDoItem({
  toDo,
  editingId,
  setEditingId,
  handleEditSave,
  handleRemove,
  handleToggleComplete,
}: ToDoItemProps) {
  return (
    <li className="flex items-center mb-2">
      <Button onClick={() => handleToggleComplete(toDo.id)} className="mr-2">
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
            className="btn-confirm"
          >
            <GiConfirmed className="input-confirm-edit-task" />
          </Button>
        ) : (
          <Button onClick={() => setEditingId(toDo.id)} className="btn-edit">
            <FaRegEdit className="input-edit-task" />
          </Button>
        )}
        <Button
          onClick={() => handleRemove(toDo.id)}
          className="btn-delete ml-2"
        >
          <IoCloseSharp className="input-delete-task" />
        </Button>
      </div>
    </li>
  );
}
