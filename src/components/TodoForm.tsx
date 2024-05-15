import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { addTodo } from "../features/todo/todoSlice";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    todo.length > 0 && dispatch(addTodo(todo));
    setTodo("");
  };

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        onClick={handleClick}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;