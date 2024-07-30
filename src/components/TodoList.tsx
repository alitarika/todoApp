import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "buy groceries",
      isCompleted: false,
    },
    {
      id: 2,
      text: "walk the dog",
      isCompleted: false,
    },
    {
      id: 3,
      text: "exercise",
      isCompleted: false,
    },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] cursor-pointer text-[14px] border-b border-black/[8%]"
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }

                return t;
              })
            );
          }}
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation(); // li also have onclick event (stop propagation for event bubbling)
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}
