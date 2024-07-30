import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList({ todos, setTodos }) {
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
