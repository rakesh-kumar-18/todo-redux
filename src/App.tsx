import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useAppSelector } from "./app/hooks";

function App() {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <div className="min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="mt-2 text-2xl font-bold mb-8 text-center">
          Manage Your Todos
        </h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;